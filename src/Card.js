import React from "react";
// import "./Card.css";

const Card = (props) => {
  return (
      <div className="bg-light-green tc dib br3 pa2 ma2 grow bw2 shadow-5">
        <img alt="robots" src={"https://robohash.org/${props.id}?200x200"} />
        <div>
          <h1>{props.name}</h1>
          <p>{props.email}</p>
        </div>
      </div>
  );
};

export default Card;
