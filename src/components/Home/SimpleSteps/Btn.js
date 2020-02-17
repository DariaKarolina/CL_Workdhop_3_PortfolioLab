import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Btn extends Component{
    render(){
        return (
            <>
                <Link to="/logowanie">
                    <button className="btn">{this.props.txt}</button>
                </Link>
            </>
        )
    }
}

export default Btn;