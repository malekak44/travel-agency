import React from 'react';
import PackageCard from '../PackageCard';
import { useGlobalContext } from '../../contexts/AppContext';

const Packages = () => {
    const { packages } = useGlobalContext();

    return (
        <section className="home__packages container">
            {packages.map((item) => {
                return <PackageCard key={item._id} {...item} />
            })}
        </section>
    );
};

export default Packages;