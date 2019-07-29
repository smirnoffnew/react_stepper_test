import React, { Component, Fragment } from 'react';
import { ButtonListWrapper, StyledGenreButton } from "../styles";
import data from "../data.json";
import { connect } from 'react-redux';

class Genre extends Component {
    getSelectedButton = () => {
        return this.props.completedSteps.length > 0 ? this.props.completedSteps[0].genre : null
    }

    render() {

        return (
            <Fragment>
                <ButtonListWrapper>
                    {data.genres.map(genre => {
                        return <StyledGenreButton
                            key={genre.name}
                            variant={this.getSelectedButton() === genre.name ? "contained" : "outlined"}
                            color="primary"
                            size="large"
                            onClick={() => { this.props.addData({ genre: genre.name, ...this.props.stepper[0] }) }}
                        >
                            {genre.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(Genre);


