import React, { useState } from "react";

import "./TextInput.css";
import InputValidator from "./InputValidator";

const TextInput = ({ label, value, maxLength, onChange, required, style, name }) => {
  const [error, setError] = useState("");
  const [currentValue, setCurrentValue] = useState(value ?? "");

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    if (onChange) {
      onChange(name, event.target.value);
    }

    InputValidator(label, event.target.value, {
      required,
      maxLength
    }, setError)

    
  };

  

  return (
    <div
      style={style ?? {}}
      className={"input-box " + (error ? "hasError" : "")}
    >
      <label>{label}</label>
      <input onChange={handleChange} value={currentValue} name={name} />
      <div className="inputErrorMsgContainer">
        <div className="inputErrorMsg">{error}</div>
      </div>
    </div>
  );
};

export default TextInput;
