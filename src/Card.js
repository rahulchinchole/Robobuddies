import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="f6 tc dib br3 pa3 ma2 grow bw2 shadow-5" id="bck">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h1 className="name">{name}</h1>
        <p className="f4 email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
