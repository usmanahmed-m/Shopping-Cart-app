import React from "react";

export const Colors = ({ colors }) => {
  // console.log("colors", colors);

  return (
    <div className="colors">
      {colors.map((color, index) => (
        <button key={index} style={{ backgroundColor: color }}></button>
      ))}
    </div>
  );
};
