import React from 'react';
import '../style/components/_banner.scss';

const Banner = ({ text, picture }) => {
    return (
        <div className="banner">
            <h1>{text}</h1>
            <img src={picture} alt="banner" />
            <div className="darken_filter"></div>
        </div>
    );
};

export default Banner;
