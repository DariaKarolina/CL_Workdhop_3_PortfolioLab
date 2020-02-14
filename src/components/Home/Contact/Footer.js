import React, {Component} from 'react';
import Icons from "./Icons";

class Footer extends Component{
    render(){
        return (
            <>
                <div className="footer">
                    <p>Copyright by Coders Lab</p>
                    <Icons />
                </div>
            </>
        )
    }
}

export default Footer;