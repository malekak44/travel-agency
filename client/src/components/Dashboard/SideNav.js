import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import list from '../../assets/list.svg';
import review from '../../assets/review.svg';

const SideNav = () => {
    const [isActive, setIsActive] = useState('book');

    return (
        <section className="sidenav">
            <Link to="/" className="sidenav__logo">
                <img src={logo} alt="logo" />
                <h1>Travel Agency</h1>
            </Link>
            <div className="sidenav__wrapper">
                <Link
                    to="/dashboard/book"
                    onClick={() => setIsActive('book')}
                    className={`sidenav__link ${isActive === 'book' ? 'active' : ''}`}
                >
                    <img src={cart} alt="book" className="cart" />
                    <p>Book</p>
                </Link>
                <Link
                    to="/dashboard/bookings"
                    onClick={() => setIsActive('bookings')}
                    className={`sidenav__link ${isActive === 'bookings' ? 'active' : ''}`}
                >
                    <img src={list} alt="list" />
                    <p>Booking List</p>
                </Link>
                <Link
                    to="/dashboard/review"
                    onClick={() => setIsActive('review')}
                    className={`sidenav__link ${isActive === 'review' ? 'active' : ''}`}
                >
                    <img src={review} alt="review" />
                    <p>Review</p>
                </Link>
            </div>
        </section>
    );
};

export default SideNav;