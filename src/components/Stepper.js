import React, { Component } from 'react';
import { PageTurnWrapper, PageTurnButton } from "../styles";
import { connect } from 'react-redux';

class Stepper extends Component {
  
    isStepperComplete = () => {
       return this.props.step.number === 4
    }


    render() {
        const {step} = this.props
        console.log(this.props.step)
        

        return (
            <div>
                Stepper
                {this.props.step.number}
                {this.props.step.name}
                
                <PageTurnWrapper>
                    <PageTurnButton
                        disabled={step.number === 1}
                        variant="contained"
                        color={"default"}
                        onClick={() => { this.props.stepForth({
                            number: step.number - 1,
                            name: 'subgenres'
                        }) }}
                    >

                        Back
                    </PageTurnButton>
                    <PageTurnButton
                        disabled={this.isStepperComplete()}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => { this.props.stepForth({
                            number: step.number + 1,
                            name: 'subgenres'
                        }) }}
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
        stepForth: (data) => dispatch({ type: 'STEP_FORTH', payload: data }),
        stepBack: (data) => dispatch({ type: 'STEP_BACK', payload: data  }),
        resetStepper: (data) => dispatch({ type: 'RESET_STEPPER', payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);


