import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const closeNavbar = () => setIsNavbarOpen(false);

    useEffect(() => {
        const body = document.body;
        if (isNavbarOpen) {
            body.classList.add('noscroll');
        } else {
            body.classList.remove('noscroll');
        }
    }, [isNavbarOpen]);

    return (
        <section className={`navbar container ${isNavbarOpen ? 'open' : ''}`}>
            <div
                onClick={closeNavbar}
                className={isNavbarOpen ? 'overlay has-fade fade-in' : 'overlay has-fade fade-out'}
            ></div>
            <nav>
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="logo" />
                    <h1>Travel Agency</h1>
                </Link>

                <div
                    className="navbar__toggle hide-for-desktop"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="navbar__links hide-for-mobile">
                    <Link to="/">Home</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav >

            <div
                className={isNavbarOpen ? 'navbar__menu has-fade fade-in' : 'navbar__menu has-fade fade-out'}
            >
                <Link to="/" onClick={closeNavbar}>Home</Link>
                <Link to="/destinations" onClick={closeNavbar}>Destinations</Link>
                <Link to="/dashboard" onClick={closeNavbar}>Dashboard</Link>
                <Link to="/contact" onClick={closeNavbar}>Contact</Link>
                <Link to="/login" onClick={closeNavbar}>Login</Link>
            </div>
        </section >
    );
};

export default Navbar;