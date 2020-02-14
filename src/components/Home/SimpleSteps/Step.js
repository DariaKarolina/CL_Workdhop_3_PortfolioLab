import React, {Component} from 'react';

class Step extends Component{
    render(){
        return (
            <>
                <div className="icon"></div>
                <p className="steps">{this.props.sname}</p>
                <div className="iGaveUpLine"></div>
                <p className="stepsDesc">{this.props.sdesc}</p>  
            </>
        )
    }
}

export default Step;