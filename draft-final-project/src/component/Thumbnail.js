import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    return (
      <div className="post-thumbnail">
        <br />
        <div className="post-img-text">
          <div className="post-img">
            <img src={this.props.imageExample} alt="" />
          </div>
          <div className="post-text">
            <p>{this.props.postText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;