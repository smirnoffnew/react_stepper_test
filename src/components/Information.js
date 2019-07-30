import React from "react";
import { connect } from "react-redux";
import TextFieldInput from './TextFieldInput'

class Information extends React.Component {

  state = {
    fields: null
  }

  componentDidMount() {
    this.setState({ fields: this.props.fields });
  }

  handleChange = (name, value) => {
    this.props.editData({ ...{ [name]: value }, ...this.props.stepper[this.props.currentStep.number] })
  };

  ifDescriptionOmitted = (field) => {
    return field.name === "Description" &&
      (this.props.completedSteps.length === 2 || !Boolean(this.props.completedSteps[2].isDescriptionRequired))
  }

  render() {
    return (
      this.props.fields && this.props.fields.map(field => this.ifDescriptionOmitted(field)
        ?
        null
        :
        <TextFieldInput
          field={field}
          handleChange={this.handleChange}
          key={field.name}
        />
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    completedSteps: state.completedSteps,
    fields: state.fields,
    currentStep: state.currentStep,
    stepper: state.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return { editData: (data) => dispatch({ type: 'EDIT_DATA', payload: data }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);