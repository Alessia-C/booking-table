import React, { useState } from "react";
import "./form.css";

const Form = ({ availableTimes, updateTimes }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes[0],
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isFormValid = () => {
    return formData.date !== "" && formData.time !== "";
  };

  return (
    <div className="wrap-form">
      <h3>Book Now</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-label="date-label"
            required
          />
        </div>
        <div className="input-element">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-label="Choose time"
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="input-element">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            aria-label="Number of guests"
            required
          />
        </div>
        <div className="input-element">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="Occasion"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          aria-label="Make Your reservation"
          data-testid="submit-button"
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default Form;
