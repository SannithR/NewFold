/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Circle = ({ className }) => {
  return (
    <div className={`CIRCLE ${className}`}>
      <div className="oval" />

      <div className="oval-2" />

      <div className="oval-3" />

      <div className="oval-4" />
    </div>
  );
};
