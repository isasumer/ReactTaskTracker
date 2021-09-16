import React from "react";

const Button = ({ text, color, toggleShow }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShow}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
