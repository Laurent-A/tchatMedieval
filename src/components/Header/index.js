import React from 'react';
import Settings from '../../container/Settings';
import './style.scss';

const Logo = () => (
    <div className="logo">
        <div className="texteLogo">Le TCHAT du moyen age</div>
    </div>
);

const Header = () => (

    <div id="header">
        <Logo />
        <Settings />
    </div>
    
);

export default Header;