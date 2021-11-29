import React from 'react';
import PackageCard from '../PackageCard';
import SectionIntro from '../SectionIntro';
import { useGlobalContext } from '../../contexts/AppContext';

const Packages = () => {
    const { packages } = useGlobalContext();

    return (
        <section className="container">
            <SectionIntro
                title="Choose Your Package"
                firstSpan="Select The Best Package"
                secondSpan="For Your Travel"
            />
            <article className="home__packages">
                {packages.map((item) => {
                    return <PackageCard key={item._id} {...item} />
                })}
            </article>
        </section>
    );
};

export default Packages;