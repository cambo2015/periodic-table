import React from "react";

const Credits = () => {
  return (
    <div class="card card-body" id="credits">
      Made by Cameron Hansen Copyright 2022. <br />
      <span className="small-text">
        Many thanks to{" "}
        <a target="_blank" href="https://wikipedia.com" rel="noreferrer">
          wikipedia
        </a>{" "}
        for the images and text summary content.
      </span>
      <div className="text-center p-2">
        <button className="btn btn-primary" style={{ width: 100 }}>
          <i class="fa-brands fa-github"></i> &nbsp;Github
        </button>
      </div>
    </div>
  );
};

export default Credits;
