import React, {Component} from 'react';

class FormSignIn extends Component{
    state = {
        email: "",
        password: "",
        passwordRep: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });
        console.log(this.state.email)
        console.log("password:"+ this.state.password);
        console.log("passwordRep:"+ this.state.passwordRep);
    }
    
    handleSubmit = e => {

        e.preventDefault();

        const errors= [];
        const errorEmail=document.querySelector(".errorEmail");
        const errorPassword=document.querySelector(".errorPassword");
        const errorPasswordRep=document.querySelector(".errorPasswordRep")

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

        //I took this Regexpression form our classes, but is saying that my II email adress is wrong. That is why I decided to comment this condition

        // if(!/[a-zA-Z\.]+@[a-zA-Z\.]+\.[a-zA-Z]{2,4}/g.test(this.state.email)){
        //     console.log("Podany email jest nieprawidłowy!")
        // }

        if(!this.state.password) {
            errors.push("Brak hasła");
            errorPassword.innerHTML = "Hasło jest wymagane!";
            errorPassword.style.borderTop="1px solid red";
            return            
        } 
        
        else if(this.state.password.length < 6){
            errors.push("Za krótkie hasło");
            errorPassword.innerHTML = "Podane hasło jest za krótkie!";
            errorPassword.style.borderTop="1px solid red";
            return            
        }
        else{
            errorPassword.innerHTML = "";
            errorPassword.style.display="none";
            
        }
        if(!this.state.passwordRep) {
            errors.push("Nie powtórzono hasła!");
            errorPasswordRep.innerHTML = "Wymagane jest powtórzenie hasła";
            errorPasswordRep.style.borderTop="1px solid red";
            return            
        } 
        
        else 
        if(this.state.passwordRep.length < 6){
            errors.push("Powtórzone hasło jest za krótkie");
            errorPasswordRep.innerHTML = "Podane hasło jest za krótkie!";
            errorPasswordRep.style.borderTop="1px solid red";
            return            
        }
        else{
            errorPasswordRep.innerHTML = "";
            errorPasswordRep.style.display="none";   
        }
        if(this.state.password !== this.state.passwordRep){
            errors.push("Podane hasła nie są identyczne!");
            errorPasswordRep.innerHTML = "Podane hasła nie są identyczne!";

            //for now error message has to stay in alert, I don't have any idea why is not showing in its spot. Spot is working properly, because other messages are appearing inside. Condition is also good. WHERE IS THE PROBLEM?
            alert("Podane hasła nie są identyczne!");
            errorPasswordRep.style.borderTop="1px solid red";
            return            
        }
        else{
            errorPasswordRep.innerHTML = "";
            errorPasswordRep.style.display="none";   
        }
        if (!errors.length > 0) {
            console.log("Submitted !", this.state);
            alert("Submitted!");
        }
        
    }
    render(){
        if (!this.props.errors){
        return (
            <>
                <form className="formLogIn formSignIn" id="formSignIn" onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChange}></input>
                    </label>
                    <div className=" errorEmail">{this.props.errors}</div>

                    <label>Hasło
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </label>
                    <div className="error errorPassword">{this.props.errors}</div>

                    <label>Powtórz hasło
                        <input type="password" name="passwordRep" value={this.state.passwordRep} onChange={this.handleChange}></input>
                    </label>
                    <div className="error errorPassword errorPasswordRep">{this.props.errors}</div>

                </form>
            </>
        )
    }
}
}

export default FormSignIn;