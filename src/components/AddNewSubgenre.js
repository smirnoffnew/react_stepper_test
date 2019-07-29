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
    isDescriptionChecked: false,
  };

  handleInputChange = event => {
    debugger;
    var asdf = { subgenre: event.target.value, ...this.props.stepper[this.props.step] };
    
    this.props.editData({ subgenre: event.target.value, ...this.props.stepper[this.props.step], number: this.props.step.number })
  };

  toggleDescriptionCheckbox = (e) => {
    this.props.editData({ isDescriptionRequired: e.target.checked, ...this.props.stepper[this.props.step] })
  };

  render() {
    return (
      <Fragment>
            <TextField
              label='Subgenre name'
              margin="dense"
              variant="outlined"
              type={"text"}
              fullWidth={true}
              required={true}
              onChange={this.handleInputChange}
            //   value={this.state.name}
            />
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    // checked={this.state.isDescriptionChecked}
                    onClick={this.toggleDescriptionCheckbox}
                    value={this.props.completedSteps[2] ? this.props.completedSteps[2].isDescriptionRequire : false}
                    color="primary"
                    inputProps={{
                      "aria-label": "secondary checkbox",
                    }}
                  />
                }
                labelPlacement="end"
                label="Description is required for this subgenre"
              />
            </div>
      </Fragment>
    );
  }
}


const mapStateToProps = state => {
    return {
        step: state.step,
        stepper: state.stepper,
        completedSteps: state.completedSteps,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editData: (data) => {
            dispatch({ type: 'EDIT_DATA', payload: data })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubgenre);
