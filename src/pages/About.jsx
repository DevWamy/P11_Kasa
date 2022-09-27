import React from 'react';
import Banner from '../components/Banner';
import bannerImg from '../assets/about_banner.jpg';

const About = () => {
    return (
        <div className="about">
            <Banner picture={bannerImg} />
        </div>
    );
};

export default About;
