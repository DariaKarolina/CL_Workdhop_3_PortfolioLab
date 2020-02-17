import React, {Component} from 'react';
import WrapperFormSignIn from './WrapperFormSignIn';

class WrapperSignIn extends Component{
    render(){
        return (
            <>
                <div className="wrapperSignIn">
                    <h1>{this.props.log}</h1>
                    <div className="decor"></div>
                    <WrapperFormSignIn />
                </div>
            </>
        )
    }
}

export default WrapperSignIn;