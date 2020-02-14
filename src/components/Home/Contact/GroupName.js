import React, {Component} from 'react';


class GroupName extends Component{
    render(){
        return (
            <>
                <div className="groupName">
                    <label>Wpisz swoje imię
                        <input name="name" placeholder="Krzysztof" autoComplete="name"></input>
                    </label>
                </div>
            </>
        )
    }
}

export default GroupName;