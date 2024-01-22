import {render, screen} from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import {initializeTimes, updateTimes} from './Main.js';
import PropTypes from "prop-types";

describe("Reservation Form HTML validation", () => {

    let availableTimes;
    let mockDispatch;

    beforeEach(() => {
        // Initialize the mock data before each test
        availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

        // Initialize a mock dispatch function
        mockDispatch = jest.fn();
    });

    BookingForm.propTypes = {
        availableTimes: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    it("should have required attribute for date input", () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch}/>);
        const dateInput = screen.getByLabelText("Choose date");
        expect(dateInput).toHaveAttribute("required");
    });

    it("should have required attribute for time select", () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch}/>);
        const timeSelect = screen.getByLabelText("Choose time");
        expect(timeSelect).toHaveAttribute("required");
    });

    it("should have required attribute for occasion select", () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch}/>);
        const occasionSelect = screen.getByLabelText("Occasion");
        expect(occasionSelect).toHaveAttribute("required");
    });

    it("should have required attribute for guests slider", () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch}/>);
        const guestsSlider = screen.getByLabelText("Number of guests");
        expect(guestsSlider).toHaveAttribute("required");
    });
});