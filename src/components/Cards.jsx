import React from 'react';
import '../style/components/_cards.scss';

const Cards = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Cards;
