import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Card from "../Card";
import ElementProperties from "../ElementProperties";

const PeriodicElement = ({
  name,
  elementName,
  atomicNumber,
  atomicMass,
  img,
  attribution,
  element,
  color = "primary",
}) => {
  const hasFetchedData = useRef(false);
  const [state, setState] = useState({});

  useEffect(() => {
    const getData = () => {
      const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${name}&origin=*`;
      axios
        .get(url, {
          withCredentials: false,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = Object.values(response.data.query.pages)[0];

          const parsedResponse = data.extract;
          const cleaned = parsedResponse.replace(/<\/?[^>]+(>|$)/g, "");
          setState({
            ...state,
            summary: cleaned,
          });
        })
        .catch((error) => console.log(`There was an error: ${error}`));
    };

    if (!hasFetchedData.current) {
      getData();
      hasFetchedData.current = true;
    }
  }, [name,state]);

  const main = (
 <>
      <button
        type="button"
        className={`btn btn-${color} w-100 m-1`}
        data-bs-toggle="modal"
        data-bs-target={"#" + name}
      >
        {atomicNumber < 100 ? (
          <>{atomicNumber}</>
        ) : (
          <span className="small-text">{atomicNumber}</span>
        )}
        <br />
        {elementName}
      </button>
      <div
        className="modal fade"
        id={name}
        tabIndex="-1"
        aria-labelledby={"exampleModalLabel"}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="badge rounded-pill text-bg-primary">
                {atomicNumber}
              </span>
              <br />
              <h5 className="modal-title" id="exampleModalLabel">
                {name}
              </h5>
              <br />
              <span className="badge rounded-pill text-bg-primary">
                {atomicMass}
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target={`#${name}-summary-pane`}
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Summary
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target={`#${name}-info-pane`}
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Info
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id={`${name}-summary-pane`}
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <Card
                    name={name}
                    text={
                      state.summary
                      // ? state.summary.substring(0, 500) + "..."
                      // : ""
                    }
                    attribution={attribution}
                    img={img}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id={`${name}-info-pane`}
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  {element !== undefined ? (
                    <ElementProperties
                      boil={element.boil}
                      shells={element.shells}
                      electronConfig={element.electron_configuration}
                      category={element.category}
                      density={element.density}
                      melt={element.melt}
                      period={element.period}
                      phase={element.phase}
                      name={element.name}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return <>{name!==""? main : <>""</>}</>;
};

export default PeriodicElement;
