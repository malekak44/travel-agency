import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import grid from '../../assets/grid.svg';
import order from '../../assets/order.svg';
import addUser from '../../assets/add-user.svg';
import addService from '../../assets/add-service.svg';

const SideNav = () => {
    const [isActive, setIsActive] = useState('manage');

    return (
        <section className="sidenav">
            <Link to="/" className="sidenav__logo">
                <img src={logo} alt="logo" />
                <h1>Travel Agency</h1>
            </Link>
            <div className="sidenav__wrapper">
                <Link
                    to="/admin/manage"
                    onClick={() => setIsActive('manage')}
                    className={`sidenav__link ${isActive === 'manage' ? 'active' : ''}`}
                >
                    <img src={grid} alt="manage" className="manage" />
                    <p>Manage</p>
                </Link>
                <Link
                    to="/admin/add-service"
                    onClick={() => setIsActive('add-service')}
                    className={`sidenav__link ${isActive === 'add-service' ? 'active' : ''}`}
                >
                    <img src={addService} alt="add-service" />
                    <p>Add Service</p>
                </Link>
                <Link
                    to="/admin/order-list"
                    onClick={() => setIsActive('order-list')}
                    className={`sidenav__link ${isActive === 'order-list' ? 'active' : ''}`}
                >
                    <img src={order} alt="order" />
                    <p>Order List</p>
                </Link>
                <Link
                    to="/admin/make-admin"
                    onClick={() => setIsActive('make-admin')}
                    className={`sidenav__link ${isActive === 'make-admin' ? 'active' : ''}`}
                >
                    <img src={addUser} alt="admin" />
                    <p>Make Admin</p>
                </Link>
            </div>
        </section>
    );
};

export default SideNav;