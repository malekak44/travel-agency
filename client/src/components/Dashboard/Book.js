import React from 'react';
import Input from '../Input';
import paypal from '../../assets/paypal.png';
import stripe from '../../assets/stripe.ico';
import credit from '../../assets/credit-card.png';

const Book = () => {
    return (
        <section className="content">
            <div className="content__title">
                <h2>Book</h2>
            </div>
            <form className="dashboard__content__form">
                <Input type="text" placeholder="Enter Full Name" />
                <Input type="email" placeholder="Enter Email Address" />
                <Input type="text" placeholder="Enter Service Name" />
                <p>Pay With</p>
                <div className="dashboard__content__form__row payment">
                    <div className="dashboard__content__form__group">
                        <input type="radio" name="pay-method" id="card" />
                        <label htmlFor="card">
                            <img src={credit} alt="card" />
                            <span>Credit Card</span>
                        </label>
                    </div>
                    <div className="dashboard__content__form__group">
                        <input type="radio" name="pay-method" id="stripe" />
                        <label htmlFor="stripe">
                            <img src={stripe} alt="stripe" />
                            <span>Stripe</span>
                        </label>
                    </div>
                    <div className="dashboard__content__form__group">
                        <input type="radio" name="pay-method" id="paypal" />
                        <label htmlFor="paypal">
                            <img src={paypal} alt="paypal" />
                            <span>PayPal</span>
                        </label>
                    </div>
                </div>
                <Input type="text" placeholder="Card Number" />
                <div className="dashboard__content__form__row">
                    <Input type="text" placeholder="MM/ YY" />
                    <Input type="text" placeholder="CVC" />
                </div>
                <div className="dashboard__content__form__row submit">
                    <p>Your service charge will be
                        <span>$2000</span>
                    </p>
                    <Input type="submit" value="Pay" />
                </div>
            </form>
        </section>
    );
};

export default Book;