import React from "react";
import "../assets/styles/Card.scss";
export const Card = ({ title, data }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h2 className="card-data">{data}</h2>
    </div>
  );
};
