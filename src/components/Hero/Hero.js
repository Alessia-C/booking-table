import React from "react";
import restaurant from "../../assets/img/restaurant.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <img
        src={restaurant}
        alt="little lemon restaurant"
        aria-labelledby="restaurant-heading"
      />
      <div className="hero-content">
        <h2>A Natural Flavor, A Unique Atmosphere</h2>
        <p className="info">
          Nestled in the heart of nature, Little Lemon is a restaurant that
          celebrates authentic flavors with dishes made only from fresh, natural
          ingredients.
        </p>
        <a className="cta" href="/reservation">Book Your Table</a>
      </div>
      <h5 id="restaurant-heading" className="photo-label">
        Photo of Little Lemon restaurant
      </h5>
    </section>
  );
};

export default Hero;
