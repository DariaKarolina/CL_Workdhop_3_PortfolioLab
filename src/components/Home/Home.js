import React, {Component} from 'react';
import "../../main.scss";
import HomeHeader from './Header/HomeHeader';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutUs from "./AboutUs/AboutUs";


class Home extends Component{
    render(){
        return(
            <>
                <div className="home">
                    <HomeHeader />
                    <ThreeColumns />
                    <SimpleSteps />
                    <AboutUs />
                    <div className="whoWeHelp"></div>
                    <div className="contact">
                        <div className="footer"></div>
                    </div>
                </div>
            </>
        )
    }
}
export default Home;