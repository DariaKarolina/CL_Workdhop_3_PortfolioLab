import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return (
            <>
                <nav className="navigation">
                    <ul>
                        <li>Start</li>
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