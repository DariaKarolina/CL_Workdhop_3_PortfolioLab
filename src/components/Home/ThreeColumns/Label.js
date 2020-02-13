import React, {Component} from 'react';

class Label extends Component{
    render(){
        return (
            <div className="label">{this.props.name}</div>
        )
    }
}
export default Label;