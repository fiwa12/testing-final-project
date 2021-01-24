import React, { Component } from "react";

export class Hometag extends Component {
  render() {
    return (
      <div>
        <section className="w3l-homeblock1 py-sm-1 py-4">
          <div className="container py-md-4">
            <div className="grids-area-hny main-cont-wthree-fea row">
              <div className="col-lg-3 col-6 grids-feature">
                <a href="beauty.html">
                  <div className="area-box">
                    <h4 className="title-head">Beauty</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-6 grids-feature">
                <a href="fashion.html">
                  <div className="area-box">
                    <h4 className="title-head">Fashion and style</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                <a href="#food">
                  <div className="area-box">
                    <h4 className="title-head">Food and wellness</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-6 grids-feature mt-lg-0 mt-md-4 mt-3">
                <a href="#lifsetyle">
                  <div className="area-box">
                    <h4 className="title-head">Lifestyle</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hometag;
