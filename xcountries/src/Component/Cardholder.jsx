import React from "react";
import "./Cardholder.css";

const Card = ({ country }) => {
  return (
    <div className="flag">
      <img
        className="flagimg"
        src={country.flags.png}
        alt={country.name.alt}
      />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default Card;
