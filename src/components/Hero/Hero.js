import React from "react";
import restaurant from "../../assets/img/restaurant.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="col">
          <h2>Little Lemon</h2>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur. Porta urna feugiat orci
            laoreet velit morbi auctor. Id quis vitae lobortis tempus nascetur
            tortor in scelerisque.
          </p>
        </div>
        <div className="col">
          <img src={restaurant} alt="photo little lemon restaurant" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
