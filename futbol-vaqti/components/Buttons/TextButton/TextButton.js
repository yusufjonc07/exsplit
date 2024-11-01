import React from "react";

import "./TextButton.css";

const TextButton = ({className, type, children, disabled}) => {
  return (
    <button disabled={disabled ?? false} className={"btn " + (className ?? 'btn-primary')} type={type ?? "button"}>
      {children}
    </button>
  );
};

export default TextButton;
