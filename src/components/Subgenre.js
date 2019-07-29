import React, { Component, Fragment } from 'react';
import { ButtonListWrapper, StyledGenreButton } from "../styles";
import data from "../data.json";
import { connect } from 'react-redux';

class Subgenre extends Component {
    getSelectedButton = () => {
        return this.props.completedSteps.length > 1 && this.props.completedSteps[1] ? this.props.completedSteps[1].subgenre : null
    }

    render() {
        const genre = data.genres.find(
            genre => genre.name === this.props.completedSteps[0].genre
          );
        return (
            <Fragment>
                <ButtonListWrapper>
                    {   
                        genre.subgenres.map(subgenre => {
                        return <StyledGenreButton
                            key={subgenre.name}
                            variant={this.getSelectedButton() === subgenre.name ? "contained" : "outlined"}
                            color="primary"
                            size="large"
                            onClick={() => { this.props.addData({ subgenre: subgenre.name, ...this.props.stepper[1] }) }}
                        >
                            {subgenre.name}
                        </StyledGenreButton>
                    })}
                </ButtonListWrapper>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData: (data) => {
            dispatch({ type: 'ADD_DATA', payload: data })
        }
    }
}

const mapStateToProps = state => {
    return {
        stepper: state.stepper,
        completedSteps: state.completedSteps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subgenre);


