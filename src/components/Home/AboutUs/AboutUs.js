import React, {Component} from 'react';
import WrapperAbout from './WrapperAbout';



class AboutUs extends Component{
    render(){
        return (
            <>
                <section className="wrapperAboutUs">
                    <WrapperAbout />
                    <div className="imgPeople"></div>
                </section>
            </>
        )
    }
}

export default AboutUs;