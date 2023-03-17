import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Location from '../Location/Location';
import OurProducts from '../OurProducts/OurProducts';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <AboutUs />
            <Services />
            <Location />
            <OurProducts />
            <OurTeam />
        </div>
    );
};

export default Home;