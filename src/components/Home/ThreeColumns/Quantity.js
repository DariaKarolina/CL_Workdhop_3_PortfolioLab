import React, {Component} from 'react';

class Quantity extends Component{
    render(){
        return (
            <div className="quantity">{this.props.amount}</div>
        )
    }
}
export default Quantity;