import React, { Component } from "react";

export class Thumbnail extends Component {
  render() {
    return (
      <div className="content">
        <div className="wrap">
          <div id="main" role="main">
            <ul id="tiles">
              <li onClick="lcoation.href='single-page.html':">
                <img src="./images/img1.jpg" alt="brave" width="282" height="118" />
                <div className="post-info">
                  <div className="post-basic-ifo">
                    <h3><a href="#">Animation films</a></h3>
                    <span><a href="#"><label htmlFor=""></label>Movies</a></span>
                    <p>Lorem ipsum is simply a dummy text of the printing and typesetting industry</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Thumbnail;
