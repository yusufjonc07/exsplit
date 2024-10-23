import React from "react";
import "./Col.css";

const Col = (props) => {
  return <div className={`col-` + props.c}>{props.children}</div>;
};

export default Col;
