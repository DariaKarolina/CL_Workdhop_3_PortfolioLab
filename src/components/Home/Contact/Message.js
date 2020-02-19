import React, {Component} from 'react';


class Message extends Component{
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
                <label>Wpisz swoją wiadomość
                    <textarea className="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." value={this.state.name} onChange={this.handleChange}></textarea>
                </label>
            </>
        )
    }
}

export default Message;