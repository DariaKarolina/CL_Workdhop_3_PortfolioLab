import React, {Component} from 'react';
import FormSingIn from "./FormSignIn";
import WrapperFormButtons from "../LogIn/WrapperFormButtons";

class WrapperFormSignIn extends Component{
    render(){
        return (
            <>
                <div className="wrapperFormLogIn wrapperFormSignIn">
                    <FormSingIn />
                    <WrapperFormButtons />
                </div>
            </>
        )
    }
}

export default WrapperFormSignIn;