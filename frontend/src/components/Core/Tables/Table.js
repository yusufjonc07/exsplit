import React from "react";
import "./Table.css"

const Table = props => {
    return (<table border={1} style={{width: "100%"}}>
        {props.children}
    </table>);
}

export default Table;