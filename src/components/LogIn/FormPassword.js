import React, {Component} from 'react';

class FormPassword extends Component{
    render(){
        return (
            <>
                <label for="formPassword">Hasło</label>
                <input type="password" name="formPassword"></input>
            </>
        )
    }
}

export default FormPassword;