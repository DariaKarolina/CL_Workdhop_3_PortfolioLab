import React, {Component} from 'react';

class WrapperLogOut extends Component{
    render(){
        return (
            <>
                <div className="wrapperLogOut">
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <div className="decor"></div>
                    <button>Strona główna</button>
                </div>
            </>
        )
    }
}

export default WrapperLogOut;