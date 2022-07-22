import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const PeriodicImage = ({ src, name }) => {
  const hasFetchedData = useRef(false);
  const [state, setState] = useState({ image: "" });

  useEffect(() => {
    if (!hasFetchedData.current) {
      const url2 = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${name}&origin=*&prop=pageimages&&pithumbsize=400`;
      axios
        .get(url2, {
          withCredentials: false,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((x) => {
          try {
            const data = Object.values(x.data.query.pages)[0].thumbnail.source;

            const image = data;
            setState({ ...state, image });
          } catch (error) {}
        });

      hasFetchedData.current = true;
    }
  }, [name, state]);
  return <>{state.image !== "" ? <img src={state.image} alt={name} /> : ""}</>;
};

export default PeriodicImage;
