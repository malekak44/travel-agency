import React from 'react';
import Bookings from '../components/Dashboard/Bookings';
import SideNav from '../components/Dashboard/SideNav';

const Dashboard = () => {
    return (
        <>
            <SideNav />
            <Bookings />
        </>
    );
};

export default Dashboard;