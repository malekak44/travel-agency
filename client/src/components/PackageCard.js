import React from 'react';
import calendarIcon from '../assets/calendar.svg';
import locationIcon from '../assets/location.svg';

const PackageCard = ({ location, price, duration, image }) => {
    return (
        <div className="package__card">
            <div className="package__card__image">
                <img src={image} alt={location} />
            </div>
            <div className="package__card__info">
                <div className="package__card__info__pricing">
                    <p><span>${price}</span>/Per Person</p>
                    <p>
                        <img src={calendarIcon} alt="calendar-icon" />
                        {duration}
                    </p>
                </div>
                <h3>
                    <img src={locationIcon} alt="location-icon" />
                    {location}
                </h3>
            </div>
        </div>
    );
};

export default PackageCard;