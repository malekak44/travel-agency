import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Home/Header';
import Packages from '../components/Home/Packages';

const Home = () => {
    return (
        <>
            <section className="home-header">
                <Navbar />
                <Header />
            </section>
            <Packages />
        </>
    );
};

export default Home;