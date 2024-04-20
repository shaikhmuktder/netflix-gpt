import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

// hex #A52A2A	 rgb(165,42,42)

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("#000000");

  const handleRGBColor = () => {
    // rgb(0-256,0-256,0-256)
    const r = untilRandom(256);
    const g = untilRandom(256);
    const b = untilRandom(256);
    setColor(`rgb(${r},${g},${b})`);
    console.log(`rgb(${r},${g},${b})`);
  };
  const untilRandom = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexColor = () => {
    const hexValue = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexValue[untilRandom(hexValue.length)];
    }
    setColor(hexColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRGBColor();
    if (typeOfColor === "hex") handleHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setTypeOfColor("hex")}
        >
          Create Hex Color
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={typeOfColor == "hex" ? handleHexColor : handleRGBColor}
        >
          {" "}
          Create Random Color
        </Button>
        <div>
          <h1 className="text-white  font-bold">{typeOfColor}</h1>
          <h2 className=" text-white font-bold py-2 px-4 ">{color}</h2>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
