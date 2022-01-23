import React from "react";
import aboutimg1 from "../../assets/images/HomeImages/aboutimg1.png";
import aboutimg2 from "../../assets/images/HomeImages/aboutimg2.png";
export default function AboutUsSection() {
  return (
    <div>
      <div className="row text-center">
        {" "}
        <span className="about-heading">We are Beezhive</span>
        <span className="about-subheading">North America’s Only Super App</span>
      </div>

      <div className="row gx-0 about-container">
        <div className="row gx-0 gy-0 col-md-6 col-12">
          <div className="about-desc gx-0 gy-0">
            {" "}
            <span>
              One App <br />
              That can do <br /> All Your jobs!
            </span>
          </div>
          <div className="about-bullets">
            <span>
              -Make Payments
              <br />
              -Chat with friends
              <br />
              -Order Food
              <br />
              -Order Grocery
              <br />
              -Book a Cab{" "}
            </span>
          </div>
        </div>
        <div
          className="row gx-0 col-md-6"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            className="w-100"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={aboutimg2}
              style={{
                textAlign: "right",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={aboutimg1} className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
