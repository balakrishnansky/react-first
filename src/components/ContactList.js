import React from "react";
import ReactDOM from "react-dom";

export default function ContactList(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
