import React, {Component} from 'react';
import FormPassword from "./FormPassword";
import FormEmail from "./FormEmail";

class FormLogIn extends Component{
    render(){
        return (
            <>
                <form className="formLogIn">
                    <FormEmail />
                    <FormPassword />
                </form>
            </>
        )
    }
}

export default FormLogIn;