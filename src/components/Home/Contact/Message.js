import React, {Component} from 'react';


class Message extends Component{
    state= {
        message: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    
    render(){
        return (
            <>
                <label>Wpisz swoją wiadomość
                    <textarea className="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." value={this.state.message} onChange={this.handleChange}></textarea>
                </label>
            </>
        )
    }
}

export default Message;