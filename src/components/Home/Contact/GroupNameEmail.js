import React, {Component} from 'react';
import GroupName from "./GroupName";
import GroupEmail from "./GroupEmail";

class GroupNameEmail extends Component{
    render(){
        return (
            <>
                <div className="groupNameEmail">
                    <GroupName />
                    <GroupEmail />
                    </div>
            </>
        )
    }
}

export default GroupNameEmail;