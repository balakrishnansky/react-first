import React from "react";
import ContactList from "./components/ContactList";
import datasource from "./components/datasource";
import "./style.css";

export default function App() {
  console.log(datasource);
  const readData = datasource.map(datasrc => {
    return <ContactList name={datasrc.data.name} />;
  });

  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
