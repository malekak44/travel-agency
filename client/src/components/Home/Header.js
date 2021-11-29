import React from 'react';
import { Link } from 'react-router-dom';
import world from '../../assets/world.jpg';

const Header = () => {
    return (
        <section className="home__header container">
            <div className="home__header__text">
                <div className="home__header__text__wrapper">
                    <h1>
                        <span>Take only memories</span>
                        <span>Leave only footprints</span>
                    </h1>
                    <p>Online travelling agency just for you. You can book the best hotels, residences or private houses. You can get discount as earlier as you book. You will find the best pleasure of the nature. Even you can book tickets from anywhere in the world. Without making a delay, book your tickets.</p>
                    <Link to="/book" className="btn">Book Now</Link>
                </div>
            </div>
            <div className="home__header__image">
                <img src={world} alt="world" />
            </div>
        </section>
    );
};

export default Header;