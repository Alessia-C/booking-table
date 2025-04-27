import React from "react";
import restaurantImage from "../../assets/img/insiderestaurant.jpg";

import './aboutus.css';

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="aboutus-info"> 
        <h3>AboutUs</h3>
        <p>
          At Little Lemon, we believe that great food brings people together.
        </p>
        <p>
          Born from a passion for authentic flavors and fresh ingredients, our
          restaurant is a cozy corner where tradition meets creativity.
        </p>
        <p>
          Located in the heart of Rome, we offer a menu crafted with love,
          celebrating the best of Mediterranean cuisine.
        </p>
        <p>
          Whether you're here for a casual lunch or a special celebration, we
          are dedicated to making every meal unforgettable.
        </p>
      </div>
      <figure className="rastaurant-image">
        <img src={restaurantImage} alt="restaurant" />
      </figure>
    </section>
  );
};

export default AboutUs;
