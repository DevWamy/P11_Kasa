import React from 'react';
import '../style/components/_cards.scss';

const Cards = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <p>{title}Titre de la location</p>
            <div className="red_filter"></div>
        </div>
    );
};

export default Cards;
