import React, {Component} from 'react';
import WrapperFormLogIn from './WrapperFormLogIn';


class WrapperLogIn extends Component{
    render(){
        return (
            <>
                <div className="wrapperLogIn">
                    <h1>Zaloguj się</h1>
                    <div className="decor"></div>
                    <WrapperFormLogIn />
                </div>
            </>
        )
    }
}

export default WrapperLogIn;