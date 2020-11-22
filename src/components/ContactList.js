import React from "react";
import ReactDOM from "react-dom";

export default function ContactList(props) {
  return (
    <div>
      <h1>{props.datasource.name}</h1>
      <p>{props.datasource.description}</p>
      <input
        type="checkbox"
        checked={props.datasource.completed}
        onChange={() => {
          props.handleClickEvent(props.datasource.id);
        }}
      />
    </div>
  );
}
