import React, { useReducer } from "react";
import Form from "./Form/Form";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", date });
  };

  return (
    <div>
      <Form availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default Main;
