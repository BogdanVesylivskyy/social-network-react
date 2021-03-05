import React from 'react'
import s from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/dialogs'>Messages</a></li>
                <li><a href='#3'>News</a></li>
                <li><a href='#3'>Music</a></li>
                <li><a href='#3'>Settings</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;
