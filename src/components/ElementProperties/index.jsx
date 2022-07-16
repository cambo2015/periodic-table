import React from "react";
import { roundToHundreths } from "../../helpers";
import Canvas from "../Canvas";

const getTotalNumShells = (arr) => {
  if (arr) {
    return arr.reduce((total, current) => (total += current));
  }
  return -1;
};

const kelvinToF = (K) => {
  return 1.8 * (K - 273) + 32;
};

const kelvinToC = (K) => {
  return K - 273.15;
};

const CtoF = (C) => {
  return (C * 9) / 5 + 32;
};
const ElementProperties = ({
  name,
  boil,
  category,
  density,
  melt,
  period,
  phase,
  shells,
  electronConfig,
}) => {
  const totalElectrons = getTotalNumShells(shells);

  return (
    <div>
      <p>
        Boil:{" "}
        <span class="badge bg-primary">
          {" "}
          {roundToHundreths(CtoF(kelvinToC(boil)))}F
        </span>
      </p>
      <p>
        Category: <span class="badge bg-primary"> {category}</span>
      </p>
      <p>
        Density: <span class="badge bg-primary"> {density}</span>
      </p>
      <p>
        Melt: <span class="badge bg-primary"> {roundToHundreths(CtoF(kelvinToC(melt))) }F</span>
      </p>
      <p>
        Period: <span class="badge bg-primary"> {period}</span>
      </p>
      <p>
        Phase: <span class="badge bg-primary"> {phase}</span>
      </p>
      <p>
        Electron Configuration:{" "}
        <span class="badge bg-primary text-wrap text-start">
          {" "}
          {electronConfig}
        </span>
      </p>
      <p>
        Total Electrons: <span class="badge bg-primary"> {totalElectrons}</span>
      </p>
      {shells ? <Canvas shells={shells} name={name} /> : ""}
    </div>
  );
};

export default ElementProperties;
