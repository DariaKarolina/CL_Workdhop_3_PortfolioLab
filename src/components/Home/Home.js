import React, {Component} from 'react';

import "../../main.scss";
import HomeHeader from './Header/HomeHeader';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from './WhoWeHelp/WhoWeHelp'
import Contact from "./Contact/Contact";


class Home extends Component{
    render(){
        return(
            <>
                <div className="home">
                    <HomeHeader />
                    <ThreeColumns />
                    <SimpleSteps />
                    <AboutUs />
                    <WhoWeHelp />
                    <Contact />
                </div>
            </>
        )
    }
}
export default Home;