import React from "react";
//import "./card.css";

const Card = () => {
  return (
    <div className="card-page">
      <div className="card">
        <span className="card-badge">NEW</span>
        <h1 className="card-title">Responsive Info Card</h1>
        <p className="card-body">
          This card is centered on the screen, has an absolutely positioned
          badge, and adjusts layout on small screens.
        </p>
        <button className="card-button">Button</button>
      </div>
    </div>
  );
};

export default Card;
