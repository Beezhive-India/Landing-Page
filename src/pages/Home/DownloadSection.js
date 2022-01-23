import React from "react";
import mobilescreen from "../../assets/images/HomeImages/mobilescreen.png";

import mobilescreen2 from "../../assets/images/HomeImages/mobilescreen2.png";
import apple from "../../assets/images/HomeImages/apple.png";

import playstore from "../../assets/images/HomeImages/playstore.png";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function DownloadSection() {
  return (
    <div>
      <section className="download-section">
        <div className="row gx-0">
          <div className="col-md-8 col-12">
            <div className="download-text">
              Download the Beezhive app today!
            </div>
            <div className="col-md-10 mt-4 mx-auto button-grp">
              <Button className="button-style col-md-5 col-10 mx-auto">
                <img
                  className="my-auto"
                  src={playstore}
                  style={{ height: "30px", width: "30px" }}
                ></img>{" "}
                Play store
              </Button>
              <Button className=" my-auto button-style col-md-5 col-10 mx-auto">
                <img
                  className=""
                  src={apple}
                  style={{
                    height: "35px",
                    width: "30px",
                    paddingBottom: "2%",
                  }}
                ></img>{" "}
                Apple store
              </Button>
            </div>
            <div
              className="rotate-mobile"
              style={{ paddingTop: "3rem", overflow: "hidden" }}
            >
              <img src={mobilescreen2} className="mobilescreen"></img>
            </div>
          </div>

          <div
            className="col-md-auto"
            style={{ paddingTop: "3rem", textAlign: "center" }}
          >
            <img src={mobilescreen} className="mobilescreen"></img>
          </div>
        </div>
      </section>
    </div>
  );
}
