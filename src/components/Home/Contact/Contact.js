import React, {Component} from 'react';
import WrapperContact from "./WrapperContact";
import Footer from "./Footer";
//zrobić komponent z div className="decor"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//popatrzyć i uzupełnić FORM o odpowiednie tagi html5


class Contact extends Component{
    render(){
        return (
            <>
                <section className="contact">
                    <WrapperContact />
                    <Footer />
                </section>
            </>
        )
    }
}

export default Contact;