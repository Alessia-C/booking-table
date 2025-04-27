import React from "react";
import BookingForm from "./BookingForm/BookingForm";
import Hero from "./Hero/Hero";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Menu from "./Menu/Menu";

const Main = () => {
  return (
    <main>
      <Hero />
      <Menu />
      <AboutUs />
      <Contact />
      <BookingForm />
    </main>
  );
};

export default Main;
