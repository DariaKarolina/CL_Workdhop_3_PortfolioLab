import React, {Component} from 'react';
import Step from './Step';

class WrapperFourSteps extends Component{
    render(){
        return (
            <>
                <div className="wrapperFourSteps">
                    <div className="stepFirst">
                        <Step sname="Wybierz rzeczy" sdesc="ubrania, zabawki, sprzęt i inne"/>
                    </div>
                    <div className="stepSecond">
                        <Step sname="Spakuj je" sdesc="skorzystaj z worków na śmieci" />
                    </div>
                    <div className="stepThird">
                        <Step sname="Zdecyduj komu chcesz pomóc" sdesc="wybierz zaufane miejsce" />
                    </div>                
                    <div className="stepFourth">
                        <Step sname="Zamów kuriera" sdesc="kurier przyjedzie w dowolnym terminie"/>
                    </div>
                </div>               
            </>
        )
    }
}

export default WrapperFourSteps;