import React from "react";
import { connect } from "react-redux";
import TextFieldInput from './TextFieldInput'

class Information extends React.Component {
state={
  fields: null
}

componentDidMount() {
  this.setState({ fields: this.props.fields });
}

handleChange = (name, value) => {
  const newValue = {}
  newValue[name] = value
  this.props.editData({ ...newValue, ...this.props.stepper[this.props.step.number] })
};

ifDescriptionOmitted =() =>{
    return this.props.completedSteps.length === 2 || !Boolean(this.props.completedSteps[2].isDescriptionRequired)
}

  render() {
      return(
        this.props.fields
      ? this.props.fields.map(field => {
          if (field.name === "Description" && this.ifDescriptionOmitted())
          {
            return null;
          }
          return (
            <TextFieldInput
              field={field}
              handleChange={this.handleChange}
              key={field.name}
            />
          );
        })
      : null);

  }
}

const mapStateToProps = state => {
  return {
    completedSteps: state.completedSteps,
    fields: state.fields,
    step: state.step,
    stepper: state.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
      editData: (data) => {
          dispatch({ type: 'EDIT_DATA', payload: data })
      }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Information);
