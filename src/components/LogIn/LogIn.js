import React, {Component} from 'react';
import TopMenu from '../Home/Header/TopMenu';
import WrapperLogIn from './WrapperLogIn';
import {Link} from "react-router-dom";


class LogIn extends Component{
    
    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });
        console.log(this.state.email)
        console.log(this.state.password);
    }
    
    handleSubmit = e => {

        e.preventDefault();

        const errors= [];
        const errorEmail=document.querySelector(".errorEmail");
        const errorPassword=document.querySelector(".errorPassword");

        if(!this.state.email){
            errors.push("Błędny email");
            errorEmail.innerHTML = "Podany email jest nieprawidłowy!";
            errorEmail.style.borderTop="1px solid red";
            return
        }
        else{
            errorEmail.innerHTML = "";
            errorEmail.style.display="none";
        }
        if(!/[a-zA-Z\.]+@[a-zA-Z\.]+\.[a-zA-Z]{2,3}/g.test(this.state.email)){
            console.log("Podany email jest nieprawidłowy!")
        }
        if(!this.state.password) {
            errors.push("Brak hasła");
            errorPassword.innerHTML = "Hasło jest wymagane!";
            errorPassword.style.borderTop="1px solid red";
            return            
        } 
        
        else if(this.state.password.length < 6){
            errors.push("Za krótkie hasło")
            errorPassword.innerHTML = "Podane hasło jest za krótkie!";
            errorPassword.style.borderTop="1px solid red";
            return            
        }
        else{
            errorPassword.innerHTML = "";
            errorPassword.style.display="none";
            
        }
        if (!errors.length > 0) {
            console.log("Submitted !", this.state);
        }
        
    }
    render(){
        if (!this.props.errors){
            
            return (
                <>
                    <div className="logIn">
                        <TopMenu />
                        <div className="wrapperLogIn">
                            <h1>Zaloguj się</h1>
                            <div className="decor"></div>
                            <div className="wrapperFormLogIn">
                                <form className="formLogIn" id="formLogIn" onSubmit={this.handleSubmit}>
                                    <label>Email
                                        <input type="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChange}></input>
                                        </label>
                                    <div className=" errorEmail">{this.props.errors}</div>
                                    <label>Hasło
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                    </label>   
                                    <div className="error errorPassword">{this.props.errors}</div>
                                </form>
                            <div className="wrapperFormButtons">
                                {/* <Link to="/logowanie"> */}
                                    <button type="submit" form="formLogIn">Zaloguj się</button>
                                {/* </Link> */}
                                <Link to="/rejestracja">
                                    <button>Załóż konto</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}


export default LogIn;