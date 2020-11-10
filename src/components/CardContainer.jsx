import React from "react";
import Card from "./Card";
import "../assets/styles/Card.scss";
export default function CardContainer({ data }) {
  return (
    <div className="container">
      <Card title="Fallecidos" data={data[0]} key={1} />
      <Card title="Contagiados" data={data[2]} key={2} />
      <Card title="Recuperados" data={data[1]} key={3} />
    </div>
  );
}
