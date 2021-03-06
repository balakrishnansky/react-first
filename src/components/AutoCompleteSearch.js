import React, { Component } from "react";
import Countries from "./Countries";
class AutoCompleteSearch extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: ""
    };
    this.suggestionsHandler = this.suggestionsHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.selectedText = this.selectedText.bind(this);
  }
  onChangeHandler = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      //const regex = new RegExp(`^${value}`, "i");
      //suggestions = Countries.sort().filter(v => regex.test(v));
      suggestions = Countries.sort().filter(value1 =>
        value1.toLowerCase().includes(value.toLowerCase())
      );
    }
    this.setState({
      suggestions,
      text: value
    });
  };
  selectedText = item => {
    //console.log(item);
    this.setState({
      text: item,
      suggestions: []
    });
  };

  suggestionsHandler = () => {
    // console.log(this.state.suggestions + "jjsjsj");
    let { suggestions } = this.state;
    //  console.log("iiiiiiiii");
    if (suggestions.length === 0) {
      return;
    }

    const updatedVal = suggestions.map((item, index) => {
      //console.log("iiiiiiiii" + index);

      return (
        <li key={index} onClick={() => this.selectedText(item)}>
          {item}
        </li>
      );
    });

    return <ul>{updatedVal}</ul>;
  };

  render() {
    const { text, suggestions } = this.state;
    return (
      <div id="notebooks">
        <h3>Auto Search </h3>
        <input name="text" value={text} onChange={this.onChangeHandler} />
        {this.suggestionsHandler()}
        <span>Suggestions : {suggestions.length}</span>
      </div>
    );
  }
}

export default AutoCompleteSearch;
