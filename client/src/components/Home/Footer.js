import React from "react";
import visa from "../../assets/visa.png";
import stripe from "../../assets/stripe.png";
import skrill from "../../assets/skrill.png";
import logo from "../../assets/white-logo.svg";
import twitter from "../../assets/twitter.svg";
import dribble from "../../assets/dribble.svg";
import whatsapp from "../../assets/whatsapp.svg";
import facebook from "../../assets/facebook.svg";
import discover from "../../assets/discover.png";
import mailSend from "../../assets/mail-send.svg";
import instagram from "../../assets/instagram.svg";
import telephone from "../../assets/telephone.svg";
import mastercard from "../../assets/mastercard.png";
import locationPin from "../../assets/location-pin.svg";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item footer__intro">
                        <div className="footer__logo">
                            <img src={logo} alt="logo" />
                            <h1>Travel Agency</h1>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate
                            dolorum nisi ducimus ratione</p>
                        <h5>Follow Us:</h5>
                        <div className="footer__links">
                            <img src={facebook} alt="facbook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={dribble} alt="dribble" />
                            <img src={whatsapp} alt="whatsapp" />
                        </div>
                    </div>
                    <div className="footer__item">
                        <h2>Contact us</h2>
                        <div className="footer__contact">
                            <img className="phone" src={telephone} alt="telephone" />
                            <div>
                                <p>+01852-1265122</p>
                                <p>+01852-1265122</p>
                            </div>
                        </div>
                        <div className="footer__contact">
                            <img src={mailSend} alt="mail-send" />
                            <div>
                                <p>info@travelagency.com</p>
                                <p>support@travelagency.com</p>
                            </div>
                        </div>
                        <div className="footer__contact">
                            <img src={locationPin} alt="location-pin" />
                            <div>
                                <p>2752 Willison Street <br />
                                    Eagan, United State</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__item">
                        <h2>Support</h2>
                        <ul className="footer__support">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Blogs</li>
                            <li>Terms And Conditions</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h2>We Accept:</h2>
                        <div className="footer__payment">
                            <img src={visa} alt="visa" />
                            <img src={mastercard} alt="card" />
                            <img src={skrill} alt="skrill" />
                            <img src={stripe} alt="stripe" />
                            <img src={discover} alt="discover" />
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>Copyright 2021 | All rights reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;