import React from 'react';
import Input from '../Input';

const Review = () => {
    return (
        <section className="content">
            <div className="content__title">
                <h2>Review</h2>
            </div>
            <form className="content__form">
                <Input type="text" placeholder="Enter Your Name" />
                <Input type="email" placeholder="Your Profession" />
                <textarea rows="4" placeholder="Describe Your Experience"></textarea>
                <Input type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default Review;