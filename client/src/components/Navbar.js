import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

const Navbar = () => {
    const menuRef = useRef(null);
    const navbarRef = useRef(null);
    const overlayRef = useRef(null);
    const body = document.body;
    const menu = menuRef.current;
    const navbar = navbarRef.current;
    const overlay = overlayRef.current;
    const fadeElements = [menu, overlay];
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const closeNavbar = () => {
        setIsNavbarOpen(false);
        body.classList.remove("noscroll");
        fadeElements.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);

        if (navbar.classList.contains("open")) {
            closeNavbar();
        } else {
            body.classList.add("noscroll");
            fadeElements.forEach(element => {
                element.classList.remove("fade-out");
                element.classList.add("fade-in");
            });
        }
    }

    return (
        <section
            ref={navbarRef}
            className={`navbar container ${isNavbarOpen ? 'open' : ''}`}
        >
            <div
                ref={overlayRef}
                onClick={closeNavbar}
                className="overlay has-fade"
            ></div>
            <nav>
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="logo" />
                    <h1>Travel Agency</h1>
                </Link>

                <div
                    className="navbar__toggle hide-for-desktop"
                    onClick={toggleNavbar}
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
                ref={menuRef}
                className="navbar__menu has-fade"
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