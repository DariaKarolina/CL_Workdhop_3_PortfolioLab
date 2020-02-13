import React, {Component} from 'react';
import Quantity from "./Quantity";
import Label from './Label';
import Description from './Description';

class HelpedOrganizations extends Component{
    render(){
        return (
            <>
                <div className="helpedOrganizations">
                    <Quantity amount="5" />
                    <Label name="WSPARTYCH ORGANIZACJI" />
                    <Description desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
                    </div>
            </>
        )
    }
}
export default HelpedOrganizations;