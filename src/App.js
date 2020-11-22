import React, { Component } from "react";
import ContactList from "./components/ContactList";
import datasource from "./components/datasource";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myReadData: datasource.data
    };
  }

  render() {
    //const getArray = [...datasource.data];
    const readData = this.state.myReadData.map(datasource => {
      // return datasource.data.name;
      console.log(datasource.data);
      return (
        <ContactList
          key={datasource.id}
          name={datasource.name}
          description={datasource.description}
          completed={datasource.completed}
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
}

export default App;
