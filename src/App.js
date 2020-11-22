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
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  handleClickEvent(id) {
    console.log("Testing == " + id);
    this.setState(prevStates => {
      // const copyValState = [...this.state.myReadData];
      // const updatedVal = copyValState.map(contact => {
      const updatedVal = prevStates.myReadData.map(contact => {
        if (contact.id === id) {
          contact.completed = !contact.completed;
        }
        return contact;
      });

      return {
        myReadData: updatedVal
      };
    });
  }
  render() {
    //const getArray = [...datasource.data];
    const readData = this.state.myReadData.map(datasource => {
      // return datasource.data.name;
      console.log(datasource);
      return (
        <ContactList
          key={datasource.id}
          datasource={datasource}
          handleClickEvent={this.handleClickEvent}
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
