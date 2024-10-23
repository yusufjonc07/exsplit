import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button style={props.style} className={`btn ` + (props.className ?? "")}>
      {props.children}
    </button>
  );
};

export default Button;
