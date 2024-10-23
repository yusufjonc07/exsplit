import React from "react";

const Form = (props) => {
  return (
    <form action={props.action} method={props.method ?? "post"}>
      {props.children}
    </form>
  );
};

export default Form;
