import React from "react";
import Carousel from "react-multi-carousel";
import img1 from "../../assets/images/HomeImages/img1.png";
import Breakpoints from "../Breakpoints";
import beezbag_logo from "../../assets/images/HomeImages/beezbag_logo.png";
import beezfood from "../../assets/images/HomeImages/beezfood.png";
import circle from "../../assets/images/HomeImages/circle.png";
export default function FoodSection() {
  return (
    <div>
      <div className="row gx-0">
        <div className="col-md-8">
          <div className="food-container  col-md-12 col-12 gx-0 px-2">
            {" "}
            <img className="foodimg my-auto" src={circle} />
            <div className="centered-food ">Food & Shopping</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="food-desc gx-0 gy-0">
              Unmatched ordering experience.
            </span>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <img src={img1} className="img-2" />
        </div>
      </div>
      <div
        className="col-11 mx-auto"
        style={{
          flexwrap: "wrap",
        }}
      >
        <Carousel
          responsive={Breakpoints.responsive2}
          infinite={true}
          draggable={true}
          swipeable={true}
          autoPlay={true}
          arrows={false}
          containerClass=""
        >
          <div className="mx-2 rounded d-flex flex-column justify-content-center align-items-center">
            <div style={{ height: "300px" }}>
              <img
                src={beezbag_logo}
                width="100%"
                className="rounded h-100"
                alt=""
              />
            </div>
          </div>
          <span style={{ color: "white", fontSize: "42px", fontWeight: "500" }}>
            Say “hello” to a beezchat <br />
            simple, powerful, and secure <br />
            messenger
          </span>
          <div className="mx-2 rounded d-flex flex-column justify-content-center align-items-center">
            <div style={{ height: "300px" }}>
              <img
                src={beezfood}
                width="100%"
                className="rounded h-100"
                alt=""
              />
            </div>
          </div>
          <span style={{ color: "white", fontSize: "42px", fontWeight: "500" }}>
            Say “hello” to a beezchat <br />
            simple, powerful, and secure <br />
            messenger
          </span>
        </Carousel>
      </div>
    </div>
  );
}
