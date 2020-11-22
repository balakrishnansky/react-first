import React from "react";
import ContactList from "./components/ContactList";
import datasource from "./components/datasource";
import "./style.css";

export default function App() {
  //console.log(datasource.data);
  //const getArray = [...datasource.data];
  const readData = datasource.data.map(datasource => {
    // return datasource.data.name;
    return (
      <ContactList
        name={datasource.name}
        description={datasource.description}
      />
    );
  });

  return (
    <div>
      {readData}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
