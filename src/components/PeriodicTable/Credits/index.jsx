import React from "react";

const Credits = () => {
  return (
    <div className="card card-body" id="credits">
      Made by Cameron Hansen <br />
      <span className="small-text">
        Thanks to{" "}
        <a target="_blank" href="https://wikipedia.com" rel="noreferrer">
          wikipedia
        </a>{" "}
        for the images and text summary content
      </span>
      <span className="small-text">
        and to &nbsp;
        <a href="https://github.com/Bowserinator/Periodic-Table-JSON">
          Browserinator
        </a>
        &nbsp;for the json data.
      </span>
      <span className="small-text">
        License is{" "}
        <a href="https://creativecommons.org/licenses/by-sa/3.0">
          Creative Commons Attribution-ShareAlike 3.0 Unported
        </a>
      </span>
      <div className="text-center p-2">
        <button className="btn btn-primary" style={{ width: 300 }}>
          <i className="fa-brands fa-github"></i> &nbsp;
          <a
            href="https://github.com/cambo2015/periodic-table"
            className="text-white"
          >
            View the code on Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default Credits;
