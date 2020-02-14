import React, {Component} from 'react';


class GroupEmail extends Component{
    render(){
        return (
            <>
                <div className="groupEmail">
                    <label>Wpisz swój email
                        <input name="email" type="email" placeholder="abc@xyz.pl" autoComplete="email"></input>
                    </label>
                </div>
            </>
        )
    }
}

export default GroupEmail;