import React from 'react';
import logo from '../icons_assets/Logo.svg'

function Nav() {
    return (
        <nav className="container">
            <div className="logo-container">
                <img src={logo} alt="Little Lemon logo"/>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/Reservations">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;