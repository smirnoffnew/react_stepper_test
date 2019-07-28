import React, { Component } from 'react';
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";

class Start extends Component {

    render() {
        return (
            <div>
                <Link to="/step/1">
                <Button color='primary' onClick={()=>{

                }}>
                    Start
                </Button>
                </Link>
            </div>
        );
    }
}

export default Start;