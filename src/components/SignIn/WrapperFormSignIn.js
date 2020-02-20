import React, {Component} from 'react';
import FormSingIn from "./FormSignIn";
import WrapperFormButtons from "../LogIn/WrapperFormButtons";
import {Link} from "react-router-dom";

class WrapperFormSignIn extends Component{
    render(){
        return (
            <>
                <div className="wrapperFormLogIn wrapperFormSignIn">
                    <FormSingIn />
                    <WrapperFormButtons />
                    <div className="wrapperFormButtons">
                                <Link to="/logowanie">
                                    <button type="submit" form="formLogIn">Zaloguj się</button>
                                </Link>
                                {/* <Link to="/rejestracja"> */}
                                    <button>Załóż konto</button>
                                {/* </Link> */}
                    </div>
                </div>
            </>
        )
    }
}

export default WrapperFormSignIn;