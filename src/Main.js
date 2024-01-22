import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.js';
import BookingForm from './BookingForm.js';

function Main() {
const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
