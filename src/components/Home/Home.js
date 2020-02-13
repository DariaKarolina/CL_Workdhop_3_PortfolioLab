import React, {Component} from 'react';
import "../../main.scss";
import HomeHeader from './HomeHeader/HomeHeader';


class Home extends Component{
    render(){
        return(
            <>
                <div className="home">
                    <HomeHeader />
                    <div className="threeColumns"></div>
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