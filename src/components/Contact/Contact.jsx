import React from "react";
import "./contact.css";

const restaurantInfo = [
  {
    category: "Location",
    data: [
      {
        label: "Address",
        value: "Lorem Ipsum 45, 00100 Rome, Italy",
      },
    ],
  },
  {
    category: "Contact",
    data: [
      {
        label: "Phone",
        value: "+39 0000 455789",
      },
      {
        label: "Email",
        value: "info@littlelemon.com",
      },
    ],
  },
  {
    category: "Opening Hours",
    data: [
      {
        label: "Monday - Friday",
        value: "12:00 PM - 10:00 PM",
      },
      {
        label: "Saturday - Sunday",
        value: "10:00 AM - 11:00 PM",
      },
    ],
  },
];

const listCategory = (el) => {
  return (
    <ul key={el.category} className="contact-col">
      <h4>{el.category}</h4>
      {el.data.map((data, i) => {
        return (
          <li key={i}>
            <span className="label-info">{data.label}:</span>
            <span className="info">{data.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Contact = () => {
  return (
    <div id="contact">
      {/* <h3>
        Where green meets flavor – <br /> in the heart of Rome. 
      </h3> */}
      <div className="wrap-info">
        {restaurantInfo.map((el) => {
          return listCategory(el);
        })}
      </div>
    </div>
  );
};

export default Contact;
