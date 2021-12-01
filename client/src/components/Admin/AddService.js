import React from 'react';
import Input from '../Input';

const AddService = () => {
    return (
        <section className="content">
            <div className="content__title">
                <h2>Add Service</h2>
            </div>
            <form className="admin__content__form">
                <div className="admin__content__form__wrapper">
                    <div className="admin__content__form__row">
                        <div className="admin__content__form__group">
                            <label htmlFor="name">Service Name</label>
                            <Input type="text" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="admin__content__form__group">
                            <label htmlFor="cost">Service Cost</label>
                            <Input type="text" id="cost" placeholder="Enter Cost" />
                        </div>
                    </div>
                    <div className="admin__content__form__row">
                        <div className="admin__content__form__group">
                            <label htmlFor="description">Description</label>
                            <textarea rows="3" id="description" placeholder="Enter Description" />
                        </div>
                        <div className="admin__content__form__group">
                            <label htmlFor="image">Service Image</label>
                            <div className="upload__btn">Upload Image
                                <input type="file" id="image" name="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <Input type="submit" value="Save" />
            </form>
        </section>
    );
};

export default AddService;