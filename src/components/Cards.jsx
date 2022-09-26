import React from 'react';
import '../style/components/cards.css';

const Cards = ({ title, lodgingImg }) => {
    return (
        <div className="card">
            <img src={lodgingImg} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Cards;
