import React from "react";
import "./TextInput.css"

const TextInput = props => {
    return (<div>
        <label>{props.label ?? ''}</label>
        <input   placeholder={props.placeholder ?? null} className="text-field" type="text" maxLength={props.maxLength ?? null} />
    </div>)
}

export default TextInput;