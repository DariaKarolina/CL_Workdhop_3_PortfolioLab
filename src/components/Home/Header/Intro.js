import React, {Component} from 'react';

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
                        <li>ODDAJ RZECZY</li>
                        <li>ZORGANIZUJ ZBIÓRKĘ</li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Intro;