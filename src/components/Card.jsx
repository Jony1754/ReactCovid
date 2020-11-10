import React from "react";
import "../assets/styles/Card.scss";
import CountUp from "react-countup";
import numberWithCommas from "../utils/numberWithCommas";
const Card = ({ title, data }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h2 className="card-data">{numberWithCommas(data)}</h2>
    </div>
  );
};

export default Card;
