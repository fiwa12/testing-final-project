import React, { Component } from "react";

export class Thumbnail extends Component {
  render() {
    return (
      <div>
        <div onclick="location.href='single-page.html';">
          <img src="/images/img1.jpg" width={282} height={118} />
          <div className="post-info">
            <div className="post-basic-info">
              <h3>
                <a href="#">Animation films</a>
              </h3>
              <span>
                <a href="#">
                  <label> </label>Movies
                </a>
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing &amp;
                typesetting industry.
              </p>
            </div>
            <div className="post-info-rate-share">
              <div className="rateit">
                <span> </span>
              </div>
              <div className="post-share">
                <span> </span>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
