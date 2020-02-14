import React, {Component} from 'react';


class Message extends Component{
    render(){
        return (
            <>
                <label>Wpisz swoją wiadomość
                    <textarea className="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."></textarea>
                </label>
            </>
        )
    }
}

export default Message;