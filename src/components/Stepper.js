import React, { Component } from 'react';
import { PageTurnWrapper, PageTurnButton } from "../styles";
import { connect } from 'react-redux';
import { traceSteps, traceStepsWithNewSubgenre } from '../constants';
import Genre from './Genre';
import Subgenre from './Subgenre';
import AddNewSubgenre from './AddNewSubgenre';
import Information from './Information';
import Completion from './Completion';
import Steps from './Steps';
import UpperLine from './UpperLine';


class Stepper extends Component {

    isNextButtonDisabled = () => {
        if (this.props.currentStep.name === 'Add new subgenre') {
            return this.props.completedSteps[this.props.currentStep.number] &&
                this.props.completedSteps[this.props.currentStep.number].subgenre ? false : true
        }
        return this.props.currentStep.number === this.props.stepper.length - 1 ||
            !Boolean(this.props.completedSteps[this.props.currentStep.number])
    }

    isCompleteButtonDisabled = () => {
        const { completedSteps, currentStep} = this.props;

        const ifDescriptionMeetsConditions = 
            !completedSteps[currentStep.number] ? false :
            !completedSteps[currentStep.number-1].isDescriptionRequired ? true :
            completedSteps[currentStep.number]['Description'] ? true : false; 

        return (
            completedSteps[currentStep.number] &&
            completedSteps[currentStep.number]['Book title'] &&
            completedSteps[currentStep.number]['Author'] &&
            completedSteps[currentStep.number]['ISBN'] &&
            completedSteps[currentStep.number]['Publisher'] &&
            completedSteps[currentStep.number]['Date published'] &&
            completedSteps[currentStep.number]['Number of pages'] &&
            completedSteps[currentStep.number]['Format'] &&
            completedSteps[currentStep.number]['Edition'] &&
            completedSteps[currentStep.number]['Edition language'] &&
            ifDescriptionMeetsConditions
                ? 
                false
                : 
                true
        )
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
            default:
                return null;
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
        this.props.editData({ number: 1, name: 'Subgenre', subgenre: '' });
        this.props.stepForth(this.props.stepper[this.props.currentStep.number + 1]);
    }

    isAddNewButtonDisabled = () => {
        return this.props.completedSteps[this.props.currentStep] && this.props.completedSteps[this.props.currentStep].subgenre;
    }

    renderNavigationButtons = () => {
        const { currentStep, stepper } = this.props
        return (
            currentStep.number < stepper.length - 1

                ?

                <PageTurnWrapper adjustWidth={currentStep.name === 'Genre' || currentStep.name === 'Subgenre'}>

                    <PageTurnButton
                        disabled={this.props.currentStep.number === 0}
                        variant="contained"
                        color={"default"}
                        onClick={this.onClickBackButton}
                    >Back
                    </PageTurnButton>

                    {
                        this.props.currentStep.number === this.props.stepper.length - 2
                            ?
                            <PageTurnButton
                                disabled={this.isCompleteButtonDisabled()}
                                variant="contained"
                                color='secondary'
                                onClick={this.onClickNextButton}
                            > Complete
                        </PageTurnButton>
                            :
                            <PageTurnButton
                                disabled={this.isNextButtonDisabled()}
                                variant="contained"
                                color='primary'
                                onClick={this.onClickNextButton}
                            >Next
                        </PageTurnButton>
                    }


                    {
                        currentStep.number === 1
                            ?
                            <PageTurnButton
                                variant="contained"
                                color="secondary"
                                disabled={this.isAddNewButtonDisabled()}
                                onClick={this.onClickAddNewButton}
                            >Add new
                            </PageTurnButton>
                            :
                            null
                    }

                </PageTurnWrapper>

                : null
        )
    }

    render() {
        return (
            this.props.stepper.length > 0
                ?
                <div>
                    <UpperLine />
                    <Steps />
                    {this.renderPage(this.props.currentStep.name)}
                    {this.renderNavigationButtons()}
                </div>
                :
                null
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
        editData: (data) => dispatch({ type: 'EDIT_DATA', payload: data }),
        stepForth: (data) => dispatch({ type: 'STEP_FORTH', payload: data }),
        stepBack: (data) => dispatch({ type: 'STEP_BACK', payload: data }),
        resetStepper: (data) => dispatch({ type: 'RESET_STEPPER', payload: data }),
        changeStepper: (data) => dispatch({ type: 'CHANGE_STEPPER', payload: data }),
        removeData: (name) => dispatch({ type: 'REMOVE_DATA', payload: name }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);


