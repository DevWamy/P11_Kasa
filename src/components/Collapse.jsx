import React, { useState } from 'react';
import down from '../assets/down.svg';
import '../style/components/_collapse.scss';

const Collapse = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggle}>
                <span className="collapse-title">{title}</span>
                <img src={down} alt="down" className={isExpanded ? 'arrow arrow-expanded' : 'arrow'} />
            </div>
            <div className={isExpanded ? 'content collapse-expanded' : 'content collapse-hidden'}>
                {typeof content === "string"
                ? <div key={content}>{content}</div>
                : (content.map(item => <span>{item}</span>))
                }
            </div>
        </div>
    );
};
export default Collapse;
