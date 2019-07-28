import React, { Component } from 'react';
import { PageTurnWrapper, PageTurnButton } from "../styles";
import { connect } from 'react-redux';

class Stepper extends Component {
    state={
        stepper: null,
    }

    componentDidMount() {
        this.setState({
            stepper:  this.props.possibleStepsWithoutNewSubgenre
        })
    }

    isStepperComplete = () => {
       return this.props.step.number === this.state.stepper.length -1
    }


    render() {
        const {step, possibleStepsWithNewSubgenre, possibleStepsWithoutNewSubgenre} = this.props
              console.log(this.state.stepper)
              console.log(step.number)
        return (
            this.state.stepper ? 
            <div>
                Stepper
                {this.state.stepper[step.number].number}
                {this.state.stepper[step.number].name}

                
                <PageTurnWrapper>
                    <PageTurnButton
                        disabled={step.number === 0}
                        variant="contained"
                        color={"default"}
                        onClick={() => { this.props.stepBack(this.state.stepper[step.number-1]) }}
                    >

                        Back
                    </PageTurnButton>
                    <PageTurnButton
                        // disabled={this.isStepperComplete()}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => { debugger; this.props.stepForth(this.state.stepper[step.number+1]) }}
                    >
                        Next
                    </PageTurnButton>
                    <PageTurnButton
                        // disabled={this.isStepperComplete()}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => { 
                            this.setState({stepper: possibleStepsWithNewSubgenre }, ()=>{
                                this.props.stepForth(this.state.stepper[step.number+1])
                            })
                            
                            }}
                    >
                        Change
                    </PageTurnButton>
                </PageTurnWrapper>
            </div>
: null
        )
    }
}

const mapStateToProps = state => {
    return {
        step: state.step,
        possibleStepsWithNewSubgenre: state.possibleStepsWithNewSubgenre,
        possibleStepsWithoutNewSubgenre: state.possibleStepsWithoutNewSubgenre, 
    }
    
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


