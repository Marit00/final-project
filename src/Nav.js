import React from 'react';
import logo from './icons_assets/Logo.svg'

function Nav() {
  return (
    <nav className="container">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon logo"/>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href=".order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;