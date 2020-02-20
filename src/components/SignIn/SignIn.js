import React, {Component} from 'react';
import TopMenu from "../Home/Header/TopMenu";
import WrapperSignIn from "./WrapperSignIn";


class SingIn extends Component{
    
    render(){
        

        return (
            <>
                <div className="logIn signIn">
                    <TopMenu />
                    <WrapperSignIn log="Załóż konto" />
                </div>

            </>
        )
        
    }
}

export default SingIn;