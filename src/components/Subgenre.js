import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonListWrapper, StyledGenreButton } from "../styles";
import data from "../data.json";
import {traceSteps} from '../actions';


class Subgenre extends Component {

    getSelectedButton = () => this.props.completedSteps.length > 1 && this.props.completedSteps[1] ? this.props.completedSteps[1].subgenre : null;

    onSelectSubgenre = (subgenre) => {
        this.props.editData({ subgenre: subgenre.name, ...this.props.stepper[1] })
        this.props.changeStepper(traceSteps);
    }
    
    render() {

        return (
            <ButtonListWrapper>
                {   
                    data
                    .genres.find(genre => genre.name === this.props.completedSteps[0].genre)
                    .subgenres.map(subgenre => 

                        <StyledGenreButton
                            color="primary"
                            size="large"
                            key={subgenre.name}
                            variant={this.getSelectedButton() === subgenre.name ? "contained" : "outlined"}
                            onClick={() => this.onSelectSubgenre(subgenre) }
                            >{subgenre.name}
                        </StyledGenreButton>

                    )}
            </ButtonListWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editData: (data) => dispatch({ type: 'EDIT_DATA', payload: data}),
        changeStepper: (data) => dispatch({ type: 'CHANGE_STEPPER', payload: data }),
    }
}

const mapStateToProps = state => {
    return {
        stepper: state.stepper,
        completedSteps: state.completedSteps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subgenre);