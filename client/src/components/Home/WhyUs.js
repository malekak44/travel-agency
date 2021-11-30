import React from 'react';
import SectionIntro from '../SectionIntro';
import guide from '../../assets/guide.svg';
import trust from '../../assets/trust.svg';
import traveller from '../../assets/traveller.svg';
import experience from '../../assets/experience.svg';

const facilities = [{
    id: 1,
    icon: guide,
    title: "2000+ our worldwide guide"
}, {
    id: 2,
    icon: trust,
    title: "100% trusted travel agency"
}, {
    id: 3,
    icon: experience,
    title: "10+ year of travel experience"
}, {
    id: 4,
    icon: traveller,
    title: "90% of our traveller happy"
}];

const WhyUs = () => {
    return (
        <section className="home__whyus">
            <SectionIntro
                title="Why Travel Agency"
                firstSpan="Why You Will Travel With"
                secondSpan="Travel Agency"
            />
            <article className="container">
                {facilities.map(item => <div key={item.id} className="home__whyus__card">
                    <img src={item.icon} alt={item.title} />
                    <h5>{item.title}</h5>
                </div>)}
            </article>
        </section>
    );
};

export default WhyUs;