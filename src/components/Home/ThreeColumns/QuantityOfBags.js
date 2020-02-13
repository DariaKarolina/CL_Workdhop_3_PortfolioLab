import React, {Component} from 'react';
import Quantity from './Quantity';
import Label from "./Label";
import Description from "./Description";

class QuantityOfBags extends Component{
    render(){
        return (
            <>
                <div className="quantityOfBags">
                    <Quantity amount="10"/>
                    <Label name="ODDANYCH WORKÓW" />
                    <Description desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
                </div>
            </>
        )
    }
}
export default QuantityOfBags;