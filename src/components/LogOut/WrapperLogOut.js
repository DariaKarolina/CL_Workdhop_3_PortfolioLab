import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WrapperLogOut extends Component{
    render(){
        return (
            <>
                <div className="wrapperLogOut">
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <div className="decor"></div>
                    <Link to="/">
                        <button>Strona główna</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default WrapperLogOut;