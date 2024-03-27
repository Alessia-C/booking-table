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
    setFormData({ ...formData, [name]: value });
    if (name === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const isFormValid = () => {
    return formData.date !== "";
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
          />
        </div>
        <div className="input-element">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
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
          />
        </div>
        <div className="input-element">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!isFormValid()}
        />
      </form>
      </div>
  );
};

export default Form;
