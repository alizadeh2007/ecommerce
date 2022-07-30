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
      <div className="carouselStyle carouselStyle-responsive">
        <div className="container-fluid carouselStyle">
          <div className="row title"></div>
        </div>
        <div className="container-fluid carouselStyle">
          <Carousel>
            <Carousel.Item className="h400-height" >
              <img
                alt="dfsdf0"
                style={{width:"100%!important" }}
                className="d-block w-100 h400-height"
                src={im1}
              />
              <Carousel.Caption>
                {/* <h3>عینک ریوندی </h3> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h400-height" >
              <img
                alt="dfsdf"
                style={{width:"100%!important" }}
                className="d-block w-100 h400-height"
                src={im2}
              />
              <Carousel.Caption>
                {/* <h3> عینک ریوندی</h3> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h400-height">
              <img
                alt="dfsdf2"
                className="d-block w-100 h400-height"
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
