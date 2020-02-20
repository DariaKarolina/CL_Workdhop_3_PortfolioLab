import React, {Component} from 'react';


class GroupName extends Component{
    state= {
        name: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    
    render(){
        return (
            <>
                <div className="groupName">
                    <label>Wpisz swoje imię
                        <input name="name" type="text" placeholder="Krzysztof" autoComplete="name" value={this.state.name} onChange={this.handleChange}></input>
                    </label>
                </div>                    
            </>
        )
    }
}

export default GroupName;