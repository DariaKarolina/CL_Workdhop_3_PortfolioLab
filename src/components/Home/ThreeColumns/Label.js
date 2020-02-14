import React, {Component} from 'react';

class Label extends Component{
    render(){
        return (
            <p className="label">{this.props.name}</p>
        )
    }
}
export default Label;