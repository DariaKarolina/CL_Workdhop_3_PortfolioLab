import React, {Component} from 'react';
import TopMenu from '../Home/Header/TopMenu';
import WrapperLogIn from './WrapperLogIn';


class LogIn extends Component{
    render(){
        return (
            <>
            <div className="logIn">
                <TopMenu />
                <WrapperLogIn log="Zaloguj się"/>
            </div>
            </>
        )
    }
}

export default LogIn;