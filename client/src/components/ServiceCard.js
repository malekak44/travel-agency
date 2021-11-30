import React from 'react';

const ServiceCard = ({ name, cost, description, imageURL }) => {
    return (
        <div className="service__card">
            <img src={imageURL} alt={name} />
            <h4>{name}</h4>
            <h4>${cost}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;