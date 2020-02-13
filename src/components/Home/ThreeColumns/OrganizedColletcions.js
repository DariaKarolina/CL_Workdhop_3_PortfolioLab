import React, {Component} from 'react';
import Quantity from './Quantity';
import Label from './Label';
import Description from "./Description";

class OrganizedCollections extends Component{
    render(){
        return (
            <>
                <div className="organizedCollections">
                    <Quantity amount="7"/>
                    <Label name="ZORGANIZOWANYCH ZBIÓREK" />
                    <Description desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."/>
                </div>
            </>
        )
    }
}
export default OrganizedCollections;


