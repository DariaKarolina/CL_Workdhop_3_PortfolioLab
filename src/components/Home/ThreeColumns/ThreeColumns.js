import React, {Component} from 'react';
import QuantityOfBags from "./QuantityOfBags";
import HelpedOrganizations from './HelpedOrganizations';
import OrganizedCollections from './OrganizedColletcions';


class ThreeColumns extends Component{
    render(){
        return (
            <>
                <div className="threeColumns">
                    <QuantityOfBags />
                    <HelpedOrganizations />
                    <OrganizedCollections />
                </div>
            </>
        )
    }
}

export default ThreeColumns;