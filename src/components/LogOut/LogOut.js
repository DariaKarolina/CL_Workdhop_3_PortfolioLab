import React, {Component} from 'react';
import TopMenu from "../Home/Header/TopMenu";
import WrapperLogOut from "./WrapperLogOut"; 

class LogOut extends Component{
    render(){
        return (
            <>
                <div className="logIn signIn logOut">
                    <TopMenu />
                    <WrapperLogOut />
                </div>
            </>
        )
    }
}

export default LogOut;