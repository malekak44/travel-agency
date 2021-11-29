import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Home/Header';

const Home = () => {
    return (
        <>
            <section className="home-header">
                <Navbar />
                <Header />
            </section>
        </>
    );
};

export default Home;