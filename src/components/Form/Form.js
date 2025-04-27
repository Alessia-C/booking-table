import React, { useState } from "react";
import "./form.css";

const Form = ({ availableTimes, updateTimes }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    numberOfPeople: 1,
    date: "",
    time: availableTimes[0],
    additionalNotes: "",
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
    // You can handle the form submission logic here
  };

  const isFormValid = () => {
    return (
      formData.fullName !== "" &&
      formData.phoneNumber !== "" &&
      formData.email !== "" &&
      formData.numberOfPeople > 0 &&
      formData.date !== "" &&
      formData.time !== ""
    );
  };

  return (
    <div className="wrap-form">
      <h3>Book Your Table</h3>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="col-form">
            <div className="input-element">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                aria-label="Full Name"
                required
              />
            </div>
            <div className="input-element">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                aria-label="Phone Number"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
              />
            </div>
            <div className="input-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email"
                required
              />
            </div>
          </div>
          <div className="col-form">
            <div className="input-element">
              <label htmlFor="numberOfPeople">Number of People</label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                aria-label="Number of People"
                min="1"
                max="20"
                required
              />
            </div>
            <div className="reservation-date">
              <div className="input-element">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  aria-label="Reservation Date"
                  required
                />
              </div>
              <div className="input-element">
                <label htmlFor="res-time">Time</label>
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
            </div>
            <div className="input-element">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                aria-label="Additional Notes"
                placeholder="Any special requests or information?"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          aria-label="Make Your reservation"
          data-testid="submit-button"
        >
          Make Your Reservation
        </button>
      </form>
    </div>
  );
};

export default Form;
