import React, {Component} from 'react';
import ContactForm from './ContactForm';


class WrapperContact extends Component{
    render(){
        return (
            <>
                <div className="wrapperContact">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decor"></div> 
                    <ContactForm />
                </div>
            </>
        )
    }
}

export default WrapperContact;