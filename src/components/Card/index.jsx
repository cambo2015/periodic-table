import React from "react";
import PeriodicImage from "../PeriodicImage";

const Card = ({ name, img, text, attribution }) => {
  return (
    <div className="card">
      <PeriodicImage name={name}/>
      <div className="card-body ">
        <p className="card-text overflow-auto height-150">
          {text}{" "}
          <a
            className="text-decoration-none"
             href={"https://en.wikipedia.org/wiki/" + name}
          >
            link
          </a>
        </p>

        {/* <p className="small-text">{`image by: ${attribution}`}</p> */}
      </div>
    </div>
  );
};

export default Card;
