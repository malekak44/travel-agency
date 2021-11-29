import React from 'react';

const SectionIntro = ({ title, firstSpan, secondSpan }) => {
    return (
        <div className="section__intro">
            <h3>{title}</h3>
            <h1>
                <span>{firstSpan}</span>
                <span>{secondSpan}</span>
            </h1>
        </div>
    );
};

export default SectionIntro;