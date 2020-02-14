import React, {Component} from 'react';
import WrapperAbout from './WrapperAbout';
// import QuantityOfBags from "./QuantityOfBags";
// import HelpedOrganizations from './HelpedOrganizations';
// import OrganizedCollections from './OrganizedColletcions';


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