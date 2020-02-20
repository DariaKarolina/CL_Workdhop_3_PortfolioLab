import React, {Component} from 'react';


class GroupEmail extends Component{
    state= {
        email: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    
    render(){
        return (
            <>
                <div className="groupEmail">
                    <label>Wpisz swój email
                        <input name="email" type="email" placeholder="abc@xyz.pl" autoComplete="email" onChange={this.handleChange} value={this.state.email} ></input>
                    </label>
                </div>
            </>
        )
    }
}

export default GroupEmail;