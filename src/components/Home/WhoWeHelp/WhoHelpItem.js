import React from 'react';

export default function WhoHelpItem({title, subtitle, description}) {
    return (
        <div className="wrapperAboutFundation itemFundation">
            <h4 className="nameOfFundation">{title}</h4>
            <h5 className="fundationGoals">{subtitle}.</h5>
            <p className="fundationNeeds">{description}</p>
        </div>
    )
}
