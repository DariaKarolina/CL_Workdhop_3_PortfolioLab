import React, {Component} from 'react';
// import FormPassword from '../LogIn/FormPassword';
// import FormEmail from '../LogIn/FormEmail';
// import FormPasswordII from "./FormPasswordII";

class FormSignIn extends Component{
    render(){
        return (
            <>
                <form className="formLogIn formSignIn">
                    <label>Email
                        <input type="email" name="formEmail" autoComplete="email"></input>
                    </label>
                    <label>Hasło
                        <input type="password" name="formPassword"></input>
                    </label>
                    <label>Powtórz hasło
                        <input type="password" name="formPasswordII"></input>
                    </label>
                </form>
            </>
        )
    }
}

export default FormSignIn;