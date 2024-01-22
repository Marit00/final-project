import React from 'react';
import '../App.css';
import BookingForm from './BookingForm.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

function Reservations({availableTimes, dispatch}) {
    return (
        <div>
            <Nav/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
            <Footer/>
        </div>
    );
}

export default Reservations;