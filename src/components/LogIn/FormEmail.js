import React, {Component} from 'react';

class FormEmail extends Component{
    render(){
        return (
            <>
                <label for="formEmail">Email</label>
                <input type="email" name="formEmail" autoComplete="email"></input>
            </>
        )
    }
}

export default FormEmail;