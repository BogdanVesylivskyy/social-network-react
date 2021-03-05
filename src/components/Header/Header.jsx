import React from 'react'

import './Header.scss';
import logo from '../../assets/logo.svg';



function Header() {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    );
}


export default Header;
