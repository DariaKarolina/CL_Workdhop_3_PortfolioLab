import React, {Component} from 'react';
import FormPassword from '../LogIn/FormPassword';
import FormEmail from '../LogIn/FormEmail';
import FormPasswordII from "./FormPasswordII";

class FormSignIn extends Component{
    render(){
        return (
            <>
                <form className="formLogIn formSignIn">
                    <FormEmail />
                    <FormPassword />
                    <FormPasswordII />
                </form>
            </>
        )
    }
}

export default FormSignIn;