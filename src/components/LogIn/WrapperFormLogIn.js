import React, {Component} from 'react';
import WrapperFormButtons from './WrapperFormButtons';
import FormLogIn from './FormLogIn';

class WrapperFormLogIn extends Component{
    render(){
        return (
            <>
                <div className="wrapperFormLogIn">
                    <FormLogIn />
                    <WrapperFormButtons />
                </div>
            </>
        )
    }
}

export default WrapperFormLogIn;