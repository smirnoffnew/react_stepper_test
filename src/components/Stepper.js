import React, { Component, Fragment } from 'react';
import { PageTurnWrapper, PageTurnButton, StyledForm } from "../styles";
import { connect } from 'react-redux';
import Genre from './Genre';
import Subgenre from './Subgenre';
import AddNewSubgenre from './AddNewSubgenre';
import Information from './Information';
import Completion from './Completion';

class Stepper extends Component {


    componentDidMount() {
        this.props.changeStepper(this.props.possibleStepsWithoutNewSubgenre);
    }

    isNextButtonDisabled = () => {
        return this.props.step.number === this.props.stepper.length - 1 || !Boolean(this.props.completedSteps[this.props.step.number])
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

    submitForm = (e) => {
        e.preventDefault();
        this.props.stepForth(this.props.stepper[this.props.step.number + 1])
    }

    renderNavigationButtons = () => {
        const { stepper, step, possibleStepsWithNewSubgenre, possibleStepsWithoutNewSubgenre, completedSteps } = this.props
        return (
            <PageTurnWrapper>

                <PageTurnButton
                    disabled={step.number === 0}
                    variant="contained"
                    color={"default"}
                    onClick={() => {
                        this.props.removeData(step.name)
                        this.props.stepBack(stepper[step.number - 1]);
                        step.name === 'Subgenre' && this.props.changeStepper(possibleStepsWithoutNewSubgenre);

                    }}
                    >Back
                </PageTurnButton>


                <PageTurnButton
                    disabled={this.props.step.name === 'Information' ? false : this.isNextButtonDisabled()}
                    variant="contained"
                    color={this.props.step.name === 'Information' ? 'secondary' : "primary"}
                    type="submit"
                    onClick={() => {
                        { this.props.step.name !== 'Information' && this.props.stepForth(stepper[step.number + 1]); }
                    }}
                    >{this.props.step.name === 'Information' ? 'Complete' : 'Next'}
                </PageTurnButton>



                {
                    step.number === 1
                        ?
                        <PageTurnButton
                            variant="contained"
                            color="secondary"
                            type="submit"
                            disabled={completedSteps.length === 2}
                            onClick={() => {
                                (async () => {
                                    await this.props.changeStepper(possibleStepsWithNewSubgenre);
                                    this.props.stepForth(this.props.stepper[step.number + 1]);
                                })()
                            }}
                        >
                            Add new
                    </PageTurnButton>
                        :
                        null
                }
            </PageTurnWrapper>
        )
    }

    render() {
        const { stepper, step, possibleStepsWithNewSubgenre, possibleStepsWithoutNewSubgenre, completedSteps } = this.props
        return (
            this.props.stepper.length > 0 ?
                <div>
                    <div>{step.name}</div>
                    <div>{step.number}</div>
                    {
                        step.name === "Information" &&
                        <StyledForm onSubmit={this.submitForm}>
                            {this.renderPage(step.name)}
                            {this.renderNavigationButtons()}
                        </StyledForm>
                    }
                    {
                        step.name === "Completion" &&
                        this.renderPage(step.name)
                    }
                    {   
                        step.name !== "Information" && step.name !== "Completion" &&
                        <Fragment>
                            {this.renderPage(step.name)}
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
        step: state.step,
        possibleStepsWithNewSubgenre: state.possibleStepsWithNewSubgenre,
        possibleStepsWithoutNewSubgenre: state.possibleStepsWithoutNewSubgenre,
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


