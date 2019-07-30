import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";
import { StartWrapper } from '../styles';

class Start extends Component {

    render() {
        return (
            <StartWrapper>
                <Typography
                    gutterBottom={true}
                    color='primary'
                    paragraph  
                    variant='h4'
                >
                    Add New Book
                </Typography>
                <Link to="/stepper" style={{ textDecoration: 'none' }}>
                <Button 
                    variant='contained'
                    color='secondary'
                    size='large'  
                >
                    <Typography>
                        Start
                    </Typography>
                </Button>
                </Link>
            </StartWrapper>
        );
    }
}

export default Start;