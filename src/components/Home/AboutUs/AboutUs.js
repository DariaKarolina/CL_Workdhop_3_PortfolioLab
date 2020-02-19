import React, {Component} from 'react';
import WrapperAbout from './WrapperAbout';



class AboutUs extends Component{
    render(){
        return (
            <>
                <section className="wrapperAboutUs" id="aboutUs">
                    <WrapperAbout />
                    <div className="imgPeople"></div>
                </section>
            </>
        )
    }
}

export default AboutUs;