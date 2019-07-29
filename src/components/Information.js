import React from "react";
import { connect } from "react-redux";
import TextFieldInput from './TextFieldInput'

class Information extends React.Component {

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
              // handleChange={this.handleChange}
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
  };
};
export default connect(
  mapStateToProps,
)(Information);
