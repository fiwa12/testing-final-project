import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hometag from "./component/Hometag";
import Contents from "./component/Contents";
import Thumbnail from "./component/Thumbnail";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hometag />
        <Contents />
        {/* <Thumbnail /> */}
      </div>
    );
  }
}

export default App;
