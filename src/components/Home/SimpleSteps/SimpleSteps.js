import React, {Component} from 'react';
import WrapperFourSteps from "./WrapperFourSteps";
import Btn from "./Btn";

class SimpleSteps extends Component{
    render(){
        return (
            <>
                <section className="simpleSteps" id="simpleSteps">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decor"></div>
                    <WrapperFourSteps />
                    <Btn txt="ODDAJ RZECZY" />
                </section>
            </>
        )
    }
}

export default SimpleSteps;