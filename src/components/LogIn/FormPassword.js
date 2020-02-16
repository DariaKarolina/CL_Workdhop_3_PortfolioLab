import React, {Component} from 'react';

class FormPassword extends Component{
    render(){
        return (
            <>
                <label for="fromPassword">Hasło</label>
                <input type="password" name="formPassword"></input>
            </>
        )
    }
}

export default FormPassword;