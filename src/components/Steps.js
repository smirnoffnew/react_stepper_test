import React from "react";
import { connect } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  withStyles,
  Typography,
  StepConnector,
} from "@material-ui/core";

const classes = {
  icon: {
    transform: "scale(2)",
  },
  connectorLine: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
};

class Steps extends React.Component {
  state = {
    activeStep: 0,
  };
  render() {
    const { stepper, classes, currentStep } = this.props;
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      currentStep.number < stepper.length - 1
      ? 
        <div style={{marginBottom: '2rem'}}>
          <Stepper
            alternativeLabel
            connector={connector}
          >
            {stepper.map((step, index) => {
              return (
                  stepper.length - 1 !== index  
                  ?
                <Step
                  key={step.name}
                  active={step.number === currentStep.number}
                  disabled={step.number > currentStep.number}
                  completed={step.number < currentStep.number}
                >
                  <StepLabel
                    StepIconProps={{
                      classes: { root: classes.icon },
                    }}
                  >
                    <Typography variant="body2">{step.name}</Typography>
                  </StepLabel>
                </Step>
                : null
              );
            })}
          </Stepper>
        </div>
      :
      null
    );
  }
}

const mapStateToProps = state => {
  return {
    stepper: state.stepper,
    currentStep: state.currentStep,
  };
};
export default connect(mapStateToProps)(withStyles(classes)(Steps));

