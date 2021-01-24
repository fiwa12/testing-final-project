import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

class Contents extends Component {
  render() {
    return (
      <div className="post-container">
        <Thumbnail imageExample="./images/safira/1.jpg" postText="ABNSC" />
        <Thumbnail
          imageExample="./images/safira/2.jpg"
          postText="fdadfadfasdf"
        />
        <Thumbnail
          imageExample="./images/safira/3.jpg"
          postText="Aadsasdfasdfasdf"
        />
        <Thumbnail imageExample="./images/safira/4.jpg" postText="AasdsdSC" />
        <Thumbnail
          imageExample="./images/safira/5.jpg"
          postText="ABdsdsdsdsdSC"
        />
        <Thumbnail imageExample="./images/safira/6.jpg" postText="AsdfsdSC" />
        <Thumbnail imageExample="./images/safira/7.jpg" postText="ABdsdNSC" />
        <Thumbnail imageExample="./images/safira/8.jpg" postText="ABsdfsdNSC" />
        <Thumbnail imageExample="./images/safira/9.jpg" postText="ABNsdsdSC" />
        <Thumbnail imageExample="./images/safira/10.jpg" postText="ABNsdsdSC" />
        <Thumbnail imageExample="./images/safira/11.jpg" postText="ABNsdsdSC" />
      </div>
    );
  }
}

export default Contents;