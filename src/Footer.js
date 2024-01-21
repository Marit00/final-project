import React from 'react';
import './App.css';
import footerlogo from './icons_assets/small_logo.png'

function Footer() {
  return (
    <footer className="container">
      <section>
        <div className="logo-section">
          <img src={footerlogo} alt="Little Lemon logo" />
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href=".order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Adress</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="www.facebook.com">Facebook</a></li>
            <li><a href="www.instagram.com">Instagram</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;