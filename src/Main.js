import './App.css';
import React, {useReducer} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Reservations from "./components/Reservations";

function updateTimes(state, action) {
    switch (action.type) {
        case 'REMOVE_TIME':
            return state.filter(time => time !== action.payload);
        default:
            return state;
    }
}

function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/reservations"
                           element={<Reservations availableTimes={availableTimes} dispatch={dispatch}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Main;
