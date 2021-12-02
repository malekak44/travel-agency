import React from 'react';
import Input from '../Input';

const MakeAdmin = () => {
    return (
        <section className="content">
            <div className="content__title">
                <h2>Add Service</h2>
            </div>
            <form className="admin__content__form">
                <div className="admin__content__form__wrapper">
                    <div className="admin__content__form__row make-admin">
                        <div className="admin__content__form__group">
                            <label htmlFor="email">Email</label>
                            <Input type="email" id="email" placeholder="Enter Email Address" />
                        </div>
                        <div className="admin__content__form__group">
                            <Input type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};
export default MakeAdmin;