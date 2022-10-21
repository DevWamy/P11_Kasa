import React from 'react';
import '../style/components/_banner.scss';

const Banner = ({ text, picture }) => {
    return (
        <div className="banner">
            {text && <h1>{text}</h1>}
            {/* Evite d'afficher le h1 dans la page qund le texte est vide. */}
            <img src={picture} alt="banner" />
            <div className="darken_filter"></div>
        </div>
    );
};

export default Banner;
