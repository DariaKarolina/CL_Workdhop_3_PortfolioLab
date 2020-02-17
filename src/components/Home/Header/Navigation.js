import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navigation extends Component{
    render(){
        return (
            <>
                <nav className="navigation">
                    <ul>
                        <Link to="/">
                            <li>Start</li>
                        </Link>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </>
        )
    }
}
export default Navigation;