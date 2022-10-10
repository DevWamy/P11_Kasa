import React, { useState } from 'react';
import down from '../assets/down.svg';
import '../style/components/_collapse_equipments.scss';

const CollapseEquipments = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    let currentContent = content;
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
                {currentContent.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </div>
    );
};
export default CollapseEquipments;
