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
        <div className="gallery">
            <img className="picture" src={pictures[index]} alt="" />
            {pictures.length > 1 && (
                <>
                    <img className="previous" onClick={prev} src={previous} alt="previous button" />
                    <img className="next" onClick={next} src={nextButton} alt="next button" />
                </>
            )}
        </div>
    );
};

export default Slideshow;
