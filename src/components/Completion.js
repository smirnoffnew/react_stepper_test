import React from "react";
import { connect } from "react-redux";
import { Typography, Button, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { CompletionContainer, CompletionImage } from "../styles";

class Completion extends React.Component {

    addAnotherBook = () => {
        this.props.resetStepper();
        this.props.removeData();
    };

    isRowGrey = (index) => ({ backgroundColor: index % 2 > 0 ? 'transparent' : '#e3e3e3' });
    
    getFormatedData = () => {
        const res = {};
        this.props.completedSteps.forEach(element => Object.assign(res, element));

        delete res.number;
        delete res.name;
        delete res.isDescriptionRequired;

        if (!res.subgenre)
            delete res.subgenre;
        
        return res;
    }


    render() {
        const data = this.getFormatedData();
        return (
            <CompletionContainer>
                <CompletionImage />
                <Typography variant="body1">Book added successfully</Typography>
                <Button
                    color="primary"
                    size="large"
                    onClick={() => { this.addAnotherBook(); }}
                    variant="contained"
                    style={{ marginTop: "2rem" }}
                    >Add another book
                 </Button>

                <Table style={{ width: "100%", marginTop: '5rem' }}>
                    <TableBody>
                        {
                            Object.keys(data).map((key, index) => 
                                <TableRow key={Math.random()}>
                                    <TableCell style={this.isRowGrey(index)}>{key}</TableCell>
                                    <TableCell style={this.isRowGrey(index)}>{data[key]}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </CompletionContainer>)
    }
}

const mapStateToProps = state => {
    return {
        completedSteps: state.completedSteps,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetStepper: (data) => dispatch({ type: 'RESET_STEPPER', payload: data }),
        removeData: () => dispatch({ type: 'REMOVE_ALL_DATA' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completion)