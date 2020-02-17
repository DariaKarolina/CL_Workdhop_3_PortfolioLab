import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Intro extends Component{
    render(){
        return (
            <>
                <div className="intro">
                    <h1>Zacznij pomagać!
                        <br/>Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div className="decor"></div>
                    <ul>
                        <Link to="/logowanie">
                            <li>ODDAJ RZECZY</li>
                            <li>ZORGANIZUJ ZBIÓRKĘ</li>
                        </Link>
                    </ul>
                </div>
            </>
        )
    }
}
export default Intro;