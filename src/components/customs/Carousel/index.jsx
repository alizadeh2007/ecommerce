import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import im1 from "./../../../assets/pic/Mask group.jpg";
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
                style={{ height: "400px" }}
                className="d-block w-100"
                src={im1}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
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
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                alt="dfsdf2"
                style={{ height: "400px" }}
                className="d-block w-100"
                src={im1}
              />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
