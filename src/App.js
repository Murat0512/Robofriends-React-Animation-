import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { Robots } from "./Robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: Robots,
      searchfield: " ",
    };
  }

  onSearchChange= (event) =>{
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.Robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    })
      
    return (
      <div className="tc">
        <h1> Robofriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cardlist Robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
