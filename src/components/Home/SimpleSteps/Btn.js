import React, {Component} from 'react';

class Btn extends Component{
    render(){
        return (
            <>
                    <button className="btn">{this.props.txt}</button>
            </>
        )
    }
}

export default Btn;