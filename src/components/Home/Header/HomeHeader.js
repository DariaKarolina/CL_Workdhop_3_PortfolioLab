import React, {Component} from 'react';
import TopMenu from './TopMenu';
import Intro from "./Intro";

class HomeHeader extends Component{
    render(){
        return (
            <>
                <header className="homeHeader" id="home">
                            <TopMenu />
                            <Intro />
                </header>
            </>
        )
    }
}

export default HomeHeader;