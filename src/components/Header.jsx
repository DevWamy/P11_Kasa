import React from 'react';
import { NavLink } from 'react-router-dom';
import kasalogo from '../assets/Kasa_logo.svg';
import '../style/components/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={kasalogo} alt="logo de Kasa" />
                </NavLink>
            </div>
            <div className="links">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À Propos</NavLink>
            </div>
        </div>
    );
};

export default Header;
