import React, { useEffect, useState } from "react";
import axios from "axios";

const PeriodicImage = ({ src, name }) => {
  const [state, setState] = useState({image:""});

  useEffect(() => {
    const url2 = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${name}&origin=*&prop=pageimages&&pithumbsize=400`;
    axios
      .get(url2, {
        withCredentials: false,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((x) => {
        // console.log(x.data);
        const image = Object.values(x.data.query.pages)[0].thumbnail.source;
        // console.log(image);
        setState({ ...state, image });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>

     {state.image!==""?<img src={state.image} alt={name}  />:""}
    </>
  );
};

export default PeriodicImage;
