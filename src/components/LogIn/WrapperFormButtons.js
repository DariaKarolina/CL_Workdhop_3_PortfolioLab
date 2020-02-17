import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WrapperFormButtons extends Component{
    render(){
        return (
            <>
                <div className="wrapperFormButtons">
                    <Link to="/rejestracja">
                        <button>Załóż konto</button>
                    </Link>
                    <Link to="/logowanie">
                        <button>Zaloguj się</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default WrapperFormButtons;