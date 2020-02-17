import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Registration extends Component{
    render(){
        return (
            <>
                <div className="registration">
                    <ul>
                        <Link to="/logowanie">
                            <li>Zaloguj</li>
                        </Link>
                        <Link to="rejestracja">
                            <li>Załóż konto</li>
                        </Link>
                    </ul>
                </div>
            </>
        )
    }
}
export default Registration;