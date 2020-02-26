import React from 'react';

export default function WhoHelpItem({title, subtitle, description}) {
    return (
        <div className="wrapperAboutFundatio itemFundation">
            <h4 className="nameOfFundation fOneA ">{title}</h4>
            <h5 className="fundationGoals fOneB fTwoB">{subtitle}.</h5>
            <p className="fundationNeeds fOneC fTwoC">{description}</p>
        </div>
    )
}
