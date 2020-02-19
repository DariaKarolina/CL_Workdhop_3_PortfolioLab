import React, {Component} from 'react';


class Submit extends Component{
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
    }
    render(){
        return (
            <>
                <input className="submit" type="submit" name="submit" value="Wyślij"></input>
            </>
        )
    }
}

export default Submit;