import React, { Component } from 'react';
import { PageTurnWrapper, PageTurnButton } from "../styles";
import { connect } from 'react-redux';

class Stepper extends Component {
  
    isStepperComplete = () => {
       return this.props.step === 4
    }


    render() {
        const {step} = this.props

        return (
            <div>
                Stepper
                {this.props.step}
                <PageTurnWrapper>
                    <PageTurnButton
                        disabled={step === 1}
                        variant="contained"
                        color={"default"}
                        onClick={() => { this.props.stepBack();
                        }}
                    >

                        Back
                    </PageTurnButton>
                    <PageTurnButton
                        disabled={this.isStepperComplete()}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => { this.props.stepForth() }}
                    >
                        Next
                    </PageTurnButton>
                </PageTurnWrapper>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {step: state.step}
    
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        stepForth: () => dispatch({ type: 'STEP_FORTH' }),
        stepBack: () => dispatch({ type: 'STEP_BACK' }),
        resetStepper: () => dispatch({ type: 'RESET_STEPPER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);


