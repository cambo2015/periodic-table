import React from "react";
import PeriodicElement from "../PeriodicElement";
import elementsJson from "../../elements.json";
import KeyItem from "../KeyItem";
import Credits from "./Credits";

const PeriodicTable = () => {
  const json = JSON.parse(JSON.stringify(elementsJson));
  const finalArr = [];

  const numRows = 8;
  const numColumns = 18;
  let currentElementIndex = 0;

  for (let rows = 0; rows < numRows; rows++) {
    let temp = [];
    for (let columns = 0; columns < numColumns; columns++) {
      // first row
      if (currentElementIndex === 0 && rows === 1) {
        temp.push(json.elements[currentElementIndex]);
        for (let x = 0; x < 18 - 2; x++) {
          temp.push("");
        }
        currentElementIndex++;
        temp.push(json.elements[currentElementIndex]);
        currentElementIndex++;
      }
      if (rows === 2 && currentElementIndex === 2) {
        temp.push(json.elements[currentElementIndex]);
        currentElementIndex++;
        temp.push(json.elements[currentElementIndex]);
        currentElementIndex++;
        for (let i = 0; i < 10; i++) {
          temp.push("");
        }
        for (let i = 4; i < 5 + 6 - 1; i++) {
          temp.push(json.elements[i]);
          currentElementIndex++;
        }
      }
      if (rows === 3 && currentElementIndex === 10) {
        temp.push(json.elements[currentElementIndex]);
        currentElementIndex++;
        temp.push(json.elements[currentElementIndex]);
        currentElementIndex++;
        for (let i = 0; i < 10; i++) {
          temp.push("");
        }
        for (let i = 0; i < 6; i++) {
          temp.push(json.elements[currentElementIndex]);
          currentElementIndex++;
        }
      }
      if (rows === 4 && currentElementIndex === 18) {
        for (let i = 0; i < 18; i++) {
          temp.push(json.elements[currentElementIndex]);
          currentElementIndex++;
        }
      }
      if (rows === 5 && currentElementIndex === 36) {
        for (let i = 0; i < 18; i++) {
          temp.push(json.elements[currentElementIndex]);
          currentElementIndex++;
        }
      }
      if (rows === 6 && currentElementIndex === 54) {
        for (let i = 0; i < 18; i++) {
          temp.push(json.elements[currentElementIndex]);
          currentElementIndex++;
        }
      }
      if (rows === 7 && currentElementIndex === 72) {
        //  console.log("Hello World",rows,currentElementIndex)
        for (let i = 0; i < 18; i++) {
          temp.push(json.elements[currentElementIndex]);
          currentElementIndex++;
        }
      }
    }
    finalArr.push(temp);
  }

  return (
    <div>
      <h1 className="text-center m-5">Periodic Table</h1>
      <div className="container" id="periodic-table">
        {finalArr.map((rows) => {
          return (
            <div className="row m-1">
              {rows.map((x) => {
                return (
                  <>
                    <div className="col">
                      {x !== "" ? (
                        <PeriodicElement
                          name={x.name}
                          elementName={x.symbol}
                          img={x.spectral_img}
                          atomicMass={x.atomic_mass}
                          atomicNumber={x.number}
                          color={x.color}
                          element={x}
                          key={`pt-${x.name}`}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
        <div className="row  mt-5">
          {json["hidden-row-1"].map((x) => {
            return (
              <div className="col m-6">
                <PeriodicElement
                  name={x.name}
                  elementName={x.symbol}
                  img={x.spectral_img}
                  atomicMass={x.atomic_mass}
                  atomicNumber={x.number}
                  color="orange"
                  element={x}
                  key={`pt-${x.name}`}
                />
              </div>
            );
          })}
        </div>
        {/* hidden row 2 */}
        <div className="row mt-1">
          {json["hidden-row-2"].map((x) => {
            return (
              <div className="col m-6">
                <PeriodicElement
                  name={x.name}
                  elementName={x.symbol}
                  img={x.spectral_img}
                  atomicMass={x.atomic_mass}
                  atomicNumber={x.number}
                  color="lightorange"
                  element={x}
                  key={`pt-${x.name}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* key */}
      <div className="container m-5">
        <div className="row m-1">
          <div className="col">
            <KeyItem name={"Transition Metal"} color="primary" />
          </div>
          <div className="col">
            {" "}
            <KeyItem name={"Diatomic Nonmetal"} color="warning" />
          </div>
          <div className="col">
            <KeyItem name={"Alkali Metal"} color="danger" />
          </div>
          <div className="col">
            <KeyItem name={"Alkali Earth Metal"} color="pink" />
          </div>
          <div className="col">
            <KeyItem name={"Metalloid"} color="success" />
          </div>
          <div className="col">
            <KeyItem name={"Post-Transition Metal"} color="lightgreen" />
          </div>
          <div className="col">
            <KeyItem name={"Noble Gas"} color="purple" />
          </div>
          <div className="col">
            <KeyItem name={"Halogen"} color="lightblue" />
          </div>
          <div className="col">
            <KeyItem name={"Lanthanide"} color="orange" />
          </div>
          <div className="col">
            <KeyItem name={"Actinide"} color="lightorange" />
          </div>
        </div>
      </div>
      {/* credits */}
      
       <Credits/>
        
    </div>
  );
};

export default PeriodicTable;
