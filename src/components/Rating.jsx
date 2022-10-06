import React from 'react';
import fullStar from '../assets/red_star.svg';
import emptyStar from '../assets/gray_star.svg';
import '../style/components/_rating.scss';

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img src={fullStar} alt="red_star" key={i} />);
        } else {
            stars.push(<img src={emptyStar} alt="gray_star" key={i} />);
        }
    }

    return <div className="rating">{stars}</div>;
};

export default Rating;
