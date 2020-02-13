import React, {Component} from 'react';

class Description extends Component{
    render(){
        return (
            <div className="description">{this.props.desc}</div>
        )
    }
}
export default Description;