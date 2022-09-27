import React from 'react';
import kasawhitelogo from '../assets/white_logo.svg';
import '../style/components/_footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={kasawhitelogo} alt="Logo de Kasa" />
            </div>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    );
};

export default Footer;
