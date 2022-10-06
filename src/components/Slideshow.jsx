import React, { useState } from 'react';
import previous from '../assets/previous.svg';
import nextButton from '../assets/next.svg';
import '../style/components/_slideshow.scss';

const Slideshow = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index === pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index === 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <img className="gallery" src={pictures[index]} alt="" />
            {pictures.length > 1 && (
                <button className="previous" onClick={prev}>
                    <img src={previous} alt="previous button" />
                </button>
            )}
            {pictures.length > 1 && (
                <button className="next" onClick={next}>
                    <img src={nextButton} alt="next button" />
                </button>
            )}
            <div className="counter">
                {index + 1}/{pictures.length}
            </div>
        </>
    );
};

export default Slideshow;
