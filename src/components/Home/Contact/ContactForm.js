import React, {Component} from 'react';
import GroupNameEmail from './GroupNameEmail';
import Message from "./Message";
import Submit from "./Submit";


class ContactForm extends Component{
    state = {
        name: "",
        email: "",
        message: "",
        errors: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });
        console.log(this.state.name);
        console.log(this.state.email)
        console.log("msg:"+ this.state.message);
        console.log(this.state.message.length);
    }
    
    handleSubmit = e => {

        e.preventDefault();

        const errorName=document.querySelector(".errorName");
        const errorEmail2=document.querySelector(".errorEmail2");
        const errorMessage=document.querySelector(".errorMessage");
        const success=document.querySelector(".success");

         
        function countWords(str) {
                return str.trim().split(/\s+/).length;  
            }
            
            if(countWords(this.state.name) !== 1){
                this.setState({
                    errors: [...this.state.errors, "Podane imię jest nieprawidłowe!"]
                });
                errorName.innerHTML = "Podane imię jest nieprawidłowe!";
                errorName.style.borderTop="2px solid red";
            return 
            }
            else if(countWords(this.state.name) == 1){
                this.state.errors.pop();
                errorName.innerHTML = "";
                errorName.style.display="none";
            };
        
        if(!this.state.name){
            this.setState({
                errors: [...this.state.errors, "Brak imienia"]
            });
            errorName.innerHTML = "Brak imienia!";
            errorName.style.borderTop="2px solid red";
            return
        }
        else if(this.state.name){
            this.state.errors.pop();
            errorName.innerHTML = "";
            errorName.style.display="none"; 
        }

        if(!this.state.email){
            this.setState({
                errors: [...this.state.errors, "Podanny email jest nieprawidłowy"]
            });
            errorEmail2.innerHTML = "Podany email jest nieprawidłowy!";
            errorEmail2.style.borderTop="2px solid red";
            return
        }
        else if(this.state.email){
            this.state.errors.pop();
            errorEmail2.innerHTML = "";
            errorEmail2.style.display="none";
        }
        
        if(this.state.message.length < 120){
            this.setState({
                errors: [...this.state.errors, "Wiadomość musi mieć conajmniej 120 znaków!"]
            })
            errorMessage.innerHTML = "Wiadomość musi mieć conajmniej 120 znaków!";
            errorMessage.style.borderTop="2px solid red";
            return            
        } 
        else if(this.state.message.length >= 120 ){
            this.state.errors.pop();
            errorMessage.innerHTML = "";
            errorMessage.style.display="none";
        }

        if(!this.state.errors == ""){
            console.log(this.state.errors);  
        }
        
        if (!this.state.errors.length) {
            console.log("Submitted !", this.state);
            success.style.display="block";
        
        if(this.state.errors.length == 0)
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            .then(res => {
                console.log(res)
            })
        }

    }

    render(){
        return (
            <>
                <div className="decor"></div>
                <div className="success">
                    <p>Wiadomość została wysłana!</p>
                    <p>Wkrótce się skontaktujemy.</p>
                </div>
                <form className="contactForm" id="contactForm" onSubmit={this.handleSubmit}>
                    <div className="groupNameEmail">
                        <div className="groupName">
                            <label>Wpisz swoje imię
                                <input name="name" type="text" placeholder="Krzysztof" autoComplete="name" value={this.state.name} onChange={this.handleChange} onInput={this.handleChangeName}></input>
                            </label>
                            <div className="error errorName">{this.props.errors}</div>
                        </div> 
                        <div className="groupEmail">
                            <label>Wpisz swój email
                                <input name="email" type="email" placeholder="abc@xyz.pl" autoComplete="email" onChange={this.handleChange} value={this.state.email} ></input>
                            </label>
                            <div className="error errorEmail errorEmail2">{this.props.errors}</div>
                        </div>
                    </div>                        
                    <label>Wpisz swoją wiadomość
                        <textarea className="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." value={this.state.message} onChange={this.handleChange}></textarea>
                    </label>         
                    <div className="error errorMessage">{this.props.errors}</div>               
                    <input className="submit" type="submit" name="submit" value="Wyślij"></input>
                </form>   
            </>
        )
    }
}

export default ContactForm;