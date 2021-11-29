import React from 'react';
import calender from '../../assets/calendar.svg';
import location from '../../assets/location.svg';

const Packages = () => {
    return (
        <section className="packages">
            <div class="package__card">
                {/* <img src=''/> */}
                <p><span class="price">$180</span>/Per Person</p>
                <p><img src={calender} alt="calendar" /> 5 days/6 nights</p>
                <h5>
                    <img src={location} alt="map" />Eiffel Power, Paris, France
                </h5>
            </div>
        </section>
    );
};

export default Packages;