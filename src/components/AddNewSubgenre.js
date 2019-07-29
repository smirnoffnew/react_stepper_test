import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";


class AddNewSubgenre extends React.Component {

  state = {
    name: "",
    isDescriptionRequired: false,
  };

  handleInputChange = event => { 
    this.props.editData({ subgenre: event.target.value, ...this.props.stepper[this.props.currentStep.number] });
    this.setState({name: event.target.value});
  };

  toggleDescriptionCheckbox = (e) => {
    this.props.editData({ isDescriptionRequired: e.target.checked, ...this.props.stepper[this.props.currentStep.number] });
    this.setState({isDescriptionRequired: !this.state.isDescriptionRequired });
  };

  componentDidMount = () => {
    if (this.props.completedSteps[this.props.currentStep.number]) {
      this.setState({
        name: this.props.completedSteps[this.props.currentStep.number].subgenre,
        isDescriptionRequired: this.props.completedSteps[this.props.currentStep.number].isDescriptionRequired
      })
    } 
  }

  render() {
    return (
      <Fragment>
            <TextField
              label='Subgenre name'
              margin="dense"
              variant="outlined"
              type={"text"}
              fullWidth={true}
              // required={true}
              onChange={this.handleInputChange}
              value={this.state.name}
            />

            <div style={{ width: "100%", marginTop: "1rem" }}>
              <FormControlLabel
                  labelPlacement="end"
                  label="Description is required for this subgenre"
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      checked={this.state.isDescriptionRequired}
                      onClick={this.toggleDescriptionCheckbox}
                      inputProps={{"aria-label": "secondary checkbox",}}
                    />
                  }
                />
            </div>

      </Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
        currentStep: state.currentStep,
        stepper: state.stepper,
        completedSteps: state.completedSteps,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editData: (data) => dispatch({ type: 'EDIT_DATA', payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubgenre);