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

    onClickBackButton = () => {
        this.props.removeData(this.props.currentStep.name)
        this.props.stepBack(this.props.stepper[this.props.currentStep.number - 1]);
        this.props.currentStep.name === 'Subgenre' && this.props.changeStepper(traceSteps);
    }

    onClickNextButton = () => this.props.stepForth(this.props.stepper[this.props.currentStep.number + 1]);

    onClickAddNewButton = async () => {
        await this.props.changeStepper(traceStepsWithNewSubgenre);
        this.props.addData({number: 1, name: 'Subgenre',  subgenre: ''});
        this.props.stepForth(this.props.stepper[this.props.currentStep.number + 1]);
    }

    isAddNewButtonDisabled = () => {
        return  this.props.completedSteps[this.props.currentStep] && this.props.completedSteps[this.props.currentStep].subgenre;
    }

    isInformationComponent = () => this.props.currentStep.name === 'Information';

    renderNavigationButtons = () => {
        const { currentStep, completedSteps } = this.props
        return (
            <PageTurnWrapper>

                <PageTurnButton
                    disabled={this.props.currentStep.number === 0}
                    variant="contained"
                    color={"default"}
                    onClick={this.onClickBackButton}
                    >Back
                </PageTurnButton>

                <PageTurnButton
                    disabled={this.isInformationComponent() ? false : this.isNextButtonDisabled()}
                    variant="contained"
                    color={this.isInformationComponent() ? 'secondary' : 'primary'}
                    type="submit"
                    onClick={this.onClickNextButton}
                    >{this.isInformationComponent() ? 'Complete' : 'Next'}
                </PageTurnButton>

                {
                    currentStep.number === 1
                    ?
                    <PageTurnButton
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={this.isAddNewButtonDisabled()}
                        onClick={this.onClickAddNewButton}
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
        addData: (data) => dispatch({ type: 'ADD_DATA', payload: data }),
        stepForth: (data) => dispatch({ type: 'STEP_FORTH', payload: data }),
        stepBack: (data) => dispatch({ type: 'STEP_BACK', payload: data }),
        resetStepper: (data) => dispatch({ type: 'RESET_STEPPER', payload: data }),
        changeStepper: (data) => dispatch({ type: 'CHANGE_STEPPER', payload: data }),
        removeData: (name) => dispatch({ type: 'REMOVE_DATA', payload: name }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);


