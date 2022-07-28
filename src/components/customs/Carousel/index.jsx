import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import im1 from "./../../../assets/pic/b3.jpg";
import im2 from "./../../../assets/pic/b5e501216f7d50205a01b89c3d12370a3c20c114_1658557717.jpg";
import im3 from "./../../../assets/pic/b2.jpg";
import "./carousel.style.css";
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div className="carouselStyle">
        <div className="container-fluid carouselStyle">
          <div className="row title"></div>
        </div>
        <div className="container-fluid carouselStyle">
          <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                alt="dfsdf0"
                style={{ height: "400px",width:"100%!important" }}
                className="d-block w-100"
                src={im2}
              />
              <Carousel.Caption>
                {/* <h3>عینک ریوندی </h3> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                alt="dfsdf"
                style={{ height: "400px"}}
                className="d-block w-100 "
                src={im1}
              />
              <Carousel.Caption>
                {/* <h3> عینک ریوندی</h3> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                alt="dfsdf2"
                style={{ height: "400px" }}
                className="d-block w-100"
                src={im3}
              />
              <Carousel.Caption>
              {/* <h3> عینک ریوندی</h3> */}
            
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
