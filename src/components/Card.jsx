import React from "react";
import { Button } from "@material-ui/core";

const Card = ({ name, caption, imageUrl, isSignedIn }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={imageUrl} className="card__image" />
      <p>{caption}</p>
      {isSignedIn && <Button>Buy now</Button>}
    </div>
  );
};

export default Card;
