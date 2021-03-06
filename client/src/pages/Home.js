import React from 'react';
import Navbar from '../components/Navbar';
import WhyUs from '../components/Home/WhyUs';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Packages from '../components/Home/Packages';
import Services from '../components/Home/Services';

const Home = () => {
    return (
        <>
            <section className="home-header">
                <Navbar />
                <Header />
            </section>
            <Packages />
            <Services />
            <WhyUs />
            <Footer />
        </>
    );
};

export default Home;