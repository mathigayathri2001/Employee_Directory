import React from "react";
// import "./style.css"

function Table(props) {
    return (
      <tr>
        <td><img src={props.image} alt={props.name}/></td>
        <td>{props.name}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
        <td>{props.location}</td> 
      </tr>
    );
}

export default Table;