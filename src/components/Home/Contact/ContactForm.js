import React, {Component} from 'react';
import GroupNameEmail from './GroupNameEmail';
import Message from "./Message";
import Submit from "./Submit";


class ContactForm extends Component{
    render(){
        return (
            <>
                <form className="contactForm" onSubmit={this.handleNameChange}>
                    <GroupNameEmail />
                    <Message />
                    <Submit />
                </form>   
            </>
        )
    }
}

export default ContactForm;