import React, {Component} from 'react';

class Step extends Component{
    render(){
        return (
            <>
                <div className="icon"></div>
                <div className="steps">{this.props.sname}</div>
                <div className="iGaveUpLine"></div>
                <div className="stepsDesc">{this.props.sdesc}</div>  
            </>
        )
    }
}

export default Step;