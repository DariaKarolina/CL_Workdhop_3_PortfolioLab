import React, {Component} from 'react';
import QuantityOfBags from "./QuantityOfBags";
import HelpedOrganizations from './HelpedOrganizations';
import OrganizedCollections from './OrganizedColletcions';


class ThreeColumns extends Component{
    render(){
        return (
            <>
                <section className="threeColumns">
                    <QuantityOfBags />
                    <HelpedOrganizations />
                    <OrganizedCollections />
                </section>
            </>
        )
    }
}

export default ThreeColumns;