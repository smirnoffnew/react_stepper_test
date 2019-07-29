import React, { Component, Fragment } from 'react';
import { PageTurnWrapper, PageTurnButton, StyledForm } from "../styles";
import { connect } from 'react-redux';
import Genre from './Genre';
import Subgenre from './Subgenre';
import AddNewSubgenre from './AddNewSubgenre';
import Information from './Information';
import Completion from './Completion';
import {traceSteps, traceStepsWithNewSubgenre} from '../actions';

class Stepper extends Component {

    isNextButtonDisabled = () => {
        return this.props.currentStep.number === this.props.stepper.length - 1 || !Boolean(this.props.completedSteps[this.props.currentStep.number])
    }

    renderPage = (name) => {
        switch (name) {
            case 'Genre':
                return <Genre />
            case 'Subgenre':
                return <Subgenre />
            case 'Add new subgenre':
                return <AddNewSubgenre />
            case 'Information':
                return <Information />
            case 'Completion':
                return <Completion />
        }
    }

    onClickBackButton(){
        this.props.removeData(this.props.currentStep.name)
        this.props.stepBack(this.props.stepper[this.props.currentStep.number - 1]);
        this.props.currentStep.name === 'Subgenre' && this.props.changeStepper(traceSteps);
    }

    onClickNextButton(){
        this.props.stepForth(this.props.stepper[this.props.currentStep.number + 1]);
    }

    async onClickAddNewButton(){
        await this.props.changeStepper(traceStepsWithNewSubgenre);
        this.props.stepForth(this.props.stepper[this.props.currentStep.number + 1]);
    }

    renderNavigationButtons = () => {
        const { currentStep, completedSteps } = this.props
        return (
            <PageTurnWrapper>

                <PageTurnButton
                    disabled={this.props.currentStep.number === 0}
                    variant="contained"
                    color={"default"}
                    onClick={() => this.onClickBackButton}
                    >Back
                </PageTurnButton>

                <PageTurnButton
                    disabled={this.props.currentStep.name === 'Information' ? false : this.isNextButtonDisabled()}
                    variant="contained"
                    color={this.props.currentStep.name === 'Information' ? 'secondary' : "primary"}
                    type="submit"
                    onClick={() => this.onClickNextButton}
                    >{this.props.currentStep.name === 'Information' ? 'Complete' : 'Next'}
                </PageTurnButton>

                {
                    currentStep.number === 1
                    ?
                    <PageTurnButton
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={completedSteps.length === 2}
                        onClick={() => this.onClickAddNewButton}
                        >Add new
                    </PageTurnButton>
                    :
                    null
                }

            </PageTurnWrapper>
        )
    }

    render() {
       
        const { stepper, currentStep, completedSteps } = this.props
        console.log(currentStep)
        return (
            this.props.stepper.length > 0 ?
                <div>
                    <div>{stepper.name}</div>
                    <div>{stepper.number}</div>
                    <div>{stepper.map(i => {
                        return <span> {i.number}-{i.name} //</span>
                        })}</div>
                    {
                        currentStep.name === "Information" &&
                        <StyledForm onSubmit={this.submitForm}>
                            {this.renderPage(currentStep.name)}
                            {this.renderNavigationButtons()}
                        </StyledForm>
                    }
                    {
                        currentStep.name === "Completion" &&
                        this.renderPage(currentStep.name)
                    }
                    {   
                        currentStep.name !== "Information" && currentStep.name !== "Completion" &&
                        <Fragment>
                            {this.renderPage(currentStep.name)}
                            {this.renderNavigationButtons()}
                        </Fragment>
                    }     
                </div>
                : 'null'
        )
    }
}

const mapStateToProps = state => {
    return {
        completedSteps: state.completedSteps,
        currentStep: state.currentStep,
        stepper: state.stepper
    }
}

const mapDispatchToProps = dispatch => {
    return {
        stepForth: (data) => dispatch({ type: 'STEP_FORTH', payload: data }),
        stepBack: (data) => dispatch({ type: 'STEP_BACK', payload: data }),
        resetStepper: (data) => dispatch({ type: 'RESET_STEPPER', payload: data }),
        changeStepper: (data) => dispatch({ type: 'CHANGE_STEPPER', payload: data }),
        removeData: (name) => dispatch({ type: 'REMOVE_DATA', payload: name }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);


