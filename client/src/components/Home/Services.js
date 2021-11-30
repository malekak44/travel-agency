import React from 'react';
import ServiceCard from '../ServiceCard';
import SectionIntro from '../SectionIntro';
import { useGlobalContext } from '../../contexts/AppContext';

const Services = () => {
    const { services } = useGlobalContext();

    return (
        <section className="container">
            <SectionIntro
                title="Checkout Our Services"
                firstSpan="We Have All The Services"
                secondSpan="That You Need"
            />
            <article className="home__services">
                {services.map((item) => {
                    return <ServiceCard key={item._id} {...item} />
                })}
            </article>
        </section>
    );
};

export default Services;