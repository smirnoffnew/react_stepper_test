import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

class UpperLine extends React.Component {
  render() {
      const adjustPadding = this.props.currentStep.name === 'Genre' || this.props.currentStep.name === 'Subgenre'
      
    return (
        this.props.currentStep.number < this.props.stepper.length -2
        ?
            <Typography paragraph variant="body1">
                <span style={{ paddingLeft: adjustPadding ? "2%" : 0 }}>
                    Add book - New Book
                </span>
            </Typography>
        : 
        null
    );
  }
}

const mapStateToProps = state => {
    return {
        currentStep: state.currentStep,
        stepper: state.stepper,
    }
}

export default connect(mapStateToProps)(UpperLine);