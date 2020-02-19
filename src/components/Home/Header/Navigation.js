import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import  {Link}  from 'react-scroll';


class Navigation extends Component{
    render(){
        return (
            <>
                <nav className="navigation">
                    <ul>
                        <NavLink to="/">
                            <li>Start</li>
                        </NavLink>
                        <Link to="threeColumns"
                        smooth={true}
                        duration={1200}>
                            <li>O co chodzi?</li>
                        </Link>
                        <Link to="aboutUs"
                        smooth={true}
                        duration={1800}>
                            <li>O nas</li>
                        </Link>
                        <Link to="whoWeHelp"
                        smooth={true}
                        duration={2500}>
                            <li>Fundacja i organizacje</li>
                        </Link>
                        <Link to="contact"
                        smooth={true}
                        duration={3000}>
                            <li>Kontakt</li>
                        </Link>
                    </ul>
                </nav>
            </>
        )
    }
}
export default Navigation;