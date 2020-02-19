import React, {Component} from 'react';
import WrapperContact from "./WrapperContact";
import Footer from "./Footer";



class Contact extends Component{
    render(){
        return (
            <>
                <section className="contact" id="contact">
                    <WrapperContact />
                    <Footer />
                </section>
            </>
        )
    }
}

export default Contact;