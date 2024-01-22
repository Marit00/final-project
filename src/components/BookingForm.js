import React, {useState} from 'react';
import '../App.css';
import dessert from '../icons_assets/lemon dessert.jpg'

function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'REMOVE_TIME', payload: time}); // Dispatch an action to remove the selected time
        console.log("Form submitted!");
    };

    return (
        <section className="form">
            <div className="formSection">
                <div>
                    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                        <h3>Reserve a table</h3>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time"
                            value={time} // Use the time state variable here
                            onChange={(e) => handleTimeChange(e)}
                            required
                        >
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
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
                            required
                        />
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                            required
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