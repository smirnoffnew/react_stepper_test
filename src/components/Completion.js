import React from "react";
import { connect } from "react-redux";
import { Typography, Button, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { CompletionContainer, CompletionImage } from "../styles";

class Completion extends React.Component {
    //   state = {
    //     returnBack: false,
    //   };

    componentDidMount() {

console.log(Object.entries(this.props.completedSteps[2]))
        // Object.entries(this.props.completedSteps[2]).filter.map(property => {
        //     console.log(property[0])
        //     console.log(property[1])
        // })
    }

    addAnotherBook = () => {
        this.props.resetStepper();
        this.props.removeData();

    };

    isRowGrey = (index) => {
       return {backgroundColor: index%2>0 ?  'transparent' : '#e3e3e3'};
    }

    render() {
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
                >
                    Add another book
        </Button>
                <Table style={{ width: "100%", marginTop: '5rem' }}>
                    <TableBody>
                        {
                            this.props.completedSteps.map((data, index) => {
                                if(data){
                                    if (data.name === 'Information') {                               
                                        return (
                                            Object.keys(data).filter(item => (item !== 'name') &&  (item !== 'number')).map((key, index) => {
                                                return (
                                                    <TableRow key={Math.random()}>
                                                        <TableCell style={this.isRowGrey(index)}>{key}</TableCell>
                                                        <TableCell style={this.isRowGrey(index)}>{data[key]}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                            
                                        )
                                    } 
                                        return (
                                            <TableRow key={Math.random()}>
                                                <TableCell style={this.isRowGrey(index)}>{data.name}</TableCell>
                                                <TableCell style={this.isRowGrey(index)}>{data[data.name.toLowerCase()]}</TableCell>
                                            </TableRow>
                                        )
                                }
                               
                                
                            })
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