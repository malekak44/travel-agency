import React from 'react';
import accomodation from '../../assets/accomodation.png';
import carHire from '../../assets/car-hire.png';

const bookings = [
    {
        icon: accomodation,
        name: "Accommodation",
        price: 360,
        status: 'done',
        description: 'Travel agency takes pride in giving the customers a choice of their specific accommodation needs, no matter where - regionally and internationally.'
    },
    {
        icon: carHire,
        name: "Car Hire",
        price: 120,
        description: "Travel Agency is an agent for a number of internationally recognized car rental companies. A mutual relationship exists."
    },
    {
        icon: accomodation,
        name: "Accommodation",
        price: 360,
        status: 'done',
        description: 'Travel agency takes pride in giving the customers a choice of their specific accommodation needs, no matter where - regionally and internationally.'
    },
]

const Bookings = () => {
    return (
        <section className="content">
            <div className="content__title">
                <h2>Booking List</h2>
            </div>
            <article className="bookings__wrapper">
                {
                    bookings.map(bk => {
                        return (
                            <div className="booking">
                                <img src={bk.icon} alt={bk.name} />
                                <span className="status">Pending</span>
                                <h5>{bk.name}</h5>
                                <p>{bk.description}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    );
};

export default Bookings;