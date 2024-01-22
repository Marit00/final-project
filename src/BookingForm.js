import React from 'react';
import {useState} from 'react';
import './App.css';
import dessert from './icons_assets/lemon dessert.jpg'

function BookingForm({availableTimes, setAvailableTimes}) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="form">
      <div className="formSection">
        <div>
         <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
          <h3>Reserve a table</h3>
          <label htmlFor="res-date">Choose date</label>
          <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
          id="res-time"
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make your reservation" className="button"/>
        </form>
        </div>
        <div className="formImg">
          <img src={dessert} alt="Lemon dessert"/>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;