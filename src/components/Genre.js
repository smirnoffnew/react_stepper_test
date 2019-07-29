import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import data from "../data.json";
import { ButtonListWrapper, StyledGenreButton } from "../styles";

class Genre extends Component {

    getSelectedButton = () => this.props.completedSteps.length > 0 ? this.props.completedSteps[0].genre : null;

    onSelectGenre = (genre) => this.props.editData({ genre: genre.name, ...this.props.stepper[0] });
    
    render() {
        return (
            <Fragment>
                <ButtonListWrapper>

                    {
                        data.genres.map(genre => 

                            <StyledGenreButton
                                color="primary"
                                size="large"
                                key={genre.name}
                                variant={this.getSelectedButton() === genre.name ? "contained" : "outlined"}
                                onClick={()=>this.onSelectGenre(genre)}
                                >{genre.name}
                            </StyledGenreButton>
                        )
                    }

                </ButtonListWrapper>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editData: (data) => dispatch({ type: 'EDIT_DATA', payload: data})
    }
}

const mapStateToProps = state => {
    return {
        stepper: state.stepper,
        completedSteps: state.completedSteps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);