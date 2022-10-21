import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/_cards.scss';

const Cards = ({ title, cover, id }) => {
    return (
        <div className="card">
            <Link to={`/housing/${id}`}>
                <img src={cover} alt={title} />
                <p>{title}</p>
                <div className="card_filter"></div>
            </Link>
        </div>
    );
};

export default Cards;
