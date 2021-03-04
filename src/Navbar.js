import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><a href='#1'>Profile</a></li>
                <li><a href='#2'>Messages</a></li>
                <li><a href='#3'>News</a></li>
                <li><a href='#3'>Music</a></li>
                <li><a href='#3'>Settings</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;
