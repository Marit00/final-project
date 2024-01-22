import React from 'react';
import './App.css';
import BookingForm from './BookingForm.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

function Reservations() {
  return (
    <div>
      <Nav />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default Reservations;