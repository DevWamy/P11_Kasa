import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import kasalogo from '../assets/Kasa_logo.svg';
import '../style/components/_header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src={kasalogo} alt="logo de Kasa" />
                </Link>
            </div>
            <div className="links">
                <NavLink to="/" className={(nav) => (nav.isActive ? 'navActive' : '')}>
                    Accueil
                </NavLink>
                <NavLink to="/About" className={(nav) => (nav.isActive ? 'navActive' : '')}>
                    À Propos
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
