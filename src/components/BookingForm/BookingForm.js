import React, { useReducer } from "react";
import Form from "../Form/Form";
import { initializeTimes, updateTimes } from "../../utils/helperFunction";
import restaurantImage from "../../assets/img/insiderestaurant.jpg";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const BookingForm = () => {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  const handleUpdateTimes = updateTimes(dispatch);

  return (
    <section id="reservation">
      {/* <figure className="reservation-image">
        <img src={restaurantImage} alt="restaurant" />
      </figure> */}
      <Form availableTimes={availableTimes} updateTimes={handleUpdateTimes} />
    </section>
  );
};

export default BookingForm;
