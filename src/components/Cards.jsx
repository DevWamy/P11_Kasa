import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/_cards.scss';

const Cards = ({ title, cover, id }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <Link to={`/housing/${id}`}>
                <p>{title}</p>
            </Link>
        </div>
    );
};

export default Cards;
