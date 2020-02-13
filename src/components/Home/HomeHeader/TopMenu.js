import React, {Component} from 'react';
import Registration from './Registration';
import Navigation from './Navigation';

class TopMenu extends Component{
    render(){
        return (
            <>
                <div className="topMenu">
                    <Registration />
                    <Navigation />
                </div>
            </>
        )
    }
}
export default TopMenu;