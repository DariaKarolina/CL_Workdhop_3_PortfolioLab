import React, {Component} from 'react';


class GroupEmail extends Component{
    state= {
        name: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value});
        console.log(this.state.name);
    };
    render(){
        return (
            <>
                <div className="groupEmail">
                    <label>Wpisz swój email
                        <input name="email" type="email" placeholder="abc@xyz.pl" autoComplete="email" onChange={this.handleChange} value={this.state.name} ></input>
                    </label>
                </div>
            </>
        )
    }
}

export default GroupEmail;