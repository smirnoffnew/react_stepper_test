import React, { Fragment } from "react";
import { connect } from "react-redux";
import TextFieldInput from "./TextFieldInput";
import TextEditor from "./TextEditor";

class Information extends React.Component {
  state = {
    fields: null,
  };

  componentDidMount() {
    this.setState({ fields: this.props.fields });
  }

  handleChange = (name, value) => {
    this.props.editData({
      ...{ [name]: value },
      ...this.props.stepper[this.props.currentStep.number],
    });
  };

  render() {
    return (
      <Fragment>
        {this.props.fields &&
          this.props.fields.map(field =>
            <TextFieldInput
              field={field}
              handleChange={this.handleChange}
              key={field.name}
            />
          )}
        {
          this.props.completedSteps[2] && this.props.completedSteps[2].isDescriptionRequired &&
          <TextEditor onChange={this.handleChange} />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    completedSteps: state.completedSteps,
    fields: state.fields,
    currentStep: state.currentStep,
    stepper: state.stepper,
  };
};

const mapDispatchToProps = dispatch => {
  return { editData: data => dispatch({ type: "EDIT_DATA", payload: data }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);

// <TextEditor />;
