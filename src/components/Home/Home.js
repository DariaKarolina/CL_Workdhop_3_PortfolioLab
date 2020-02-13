import React, {Component} from 'react';
import "../../main.scss";
import HomeHeader from './Header/HomeHeader';
import ThreeColumns from './ThreeColumns/ThreeColumns';


class Home extends Component{
    render(){
        return(
            <>
                <div className="home">
                    <HomeHeader />
                    <ThreeColumns />
                    <div className="simpleSteps"></div>
                    <div className="aboutUs"></div>
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