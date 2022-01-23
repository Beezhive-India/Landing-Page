import React from "react";
import brandlogo from "../../assets/images/HomeImages/brandlogo.png";

import canadaflag from "../../assets/images/HomeImages/candaflag.png";
import indiaflag from "../../assets/images/HomeImages/indiaflag.png";

import insta from "../../assets/images/HomeImages/insta.png";
import fb from "../../assets/images/HomeImages/fb.png";
import twitter from "../../assets/images/HomeImages/twitter.png";
import youtube from "../../assets/images/HomeImages/youtube.png";

import ReactStoreBadges from "react-store-badges";
export default function Footer() {
  return (
    <div>
      <section
        id="footer"
        className="footer res-rad"
        style={{
          backgroundColor: "white",

          paddingTop: "5rem",
          paddingBottom: "2rem",
        }}
      >
        <div className="row gx-0 footer-container">
          <div className="" style={{ width: "fit-content" }}>
            <div style={{ textAlign: "center" }}>
              <img src={brandlogo} className="footer-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="footer-download-text">
                Download the Beezhive App.
              </span>
            </div>

            <div
              className="col-10 my-auto p-0 mt-4 mx-auto "
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <ReactStoreBadges platform={"ios"} url="" locale={"en-us"} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ReactStoreBadges platform={"android"} url="" locale={"en-us"} />
            </div>
          </div>
          <div
            className="mx-auto mt-2"
            style={{ width: "fit-content", textAlign: "center" }}
          >
            <span
              style={{
                color: "#555758",
                fontWeight: "600",
                fontSize: "30px",
              }}
            >
              Connect with Us
            </span>
            <div className="my-4">
              <a
                href="https://twitter.com/beezhivecanada"
                target="_blank"
                className="footer-icon"
              >
                <img src={twitter} style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://facebook.com/beezhivecanada"
                target="_blank"
                className="footer-icon"
              >
                <img src={fb} style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://instagram.com/beezhive.ca"
                target="_blank"
                className="footer-icon"
              >
                <img src={insta} style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkYMPhOJnyyDgV6Lo_srVrw"
                target="_blank"
                className="footer-icon"
              >
                <img src={youtube} style={{ height: "40px", width: "40px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="row col-md-11 mx-auto gx-0 mt-4 py-2">
          <div
            className="col-lg-3 col-md-3 col-12 mb-2 "
            style={{ paddingLeft: "3%" }}
          >
            <p
              style={{
                color: "#555758",
                fontWeight: "700",
                fontSize: "34px",
              }}
            >
              Company
            </p>
            <div>
              <a
                href="#about-us"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <p
                  style={{
                    color: "#C2C2C2",
                    fontWeight: "400",
                    fontSize: "32px",
                  }}
                  className="my-0"
                >
                  About
                </p>
              </a>
              <a
                href="https://beezhive.medium.com/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <p
                  style={{
                    color: "#C2C2C2",
                    fontWeight: "400",
                    fontSize: "32px",
                  }}
                  className="my-0"
                >
                  Blog
                </p>
              </a>

              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Services
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-12 mb-2"
            style={{ paddingLeft: "3%" }}
          >
            <p
              style={{
                color: "#555758",
                fontWeight: "700",
                fontSize: "34px",
              }}
            >
              Partner with Us
            </p>
            <div>
              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Driver Partner
              </p>
              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Merchant Partner
              </p>
              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Beezpay API
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-12 mb-2"
            style={{ paddingLeft: "3%" }}
          >
            <p
              style={{
                color: "#555758",
                fontWeight: "700",
                fontSize: "34px",
              }}
            >
              Careers
            </p>
            <div>
              <a
                href="https://beezhive.zohorecruit.in/jobs/Careers"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <p
                  style={{
                    color: "#C2C2C2",
                    fontWeight: "400",
                    fontSize: "32px",
                  }}
                  className="my-0"
                >
                  Jobs
                </p>
              </a>
              <a
                href="https://beezhive.zohorecruit.in/jobs/Careers"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <p
                  style={{
                    color: "#C2C2C2",
                    fontWeight: "400",
                    fontSize: "32px",
                  }}
                  className="my-0"
                >
                  Internship
                </p>
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-12 mb-2"
            style={{ paddingLeft: "3%" }}
          >
            <p
              style={{
                color: "#555758",
                fontWeight: "700",
                fontSize: "34px",
              }}
            >
              Get in touch
            </p>
            <div>
              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Help Center
              </p>
              <p
                style={{
                  color: "#C2C2C2",
                  fontWeight: "400",
                  fontSize: "32px",
                }}
                className="my-0"
              >
                Contact us
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mt-4 mx-auto "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="px-4" style={{ width: "fit-content" }}>
            <a href="/privacy" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#C2C2C2",
                  fontWeight: "600",
                  fontSize: "32px",
                }}
              >
                Privacy Policy
              </span>
            </a>
          </div>

          <div className="px-4" style={{ width: "fit-content" }}>
            <a href="/terms" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#C2C2C2",
                  fontWeight: "600",
                  fontSize: "32px",
                }}
              >
                Terms & Condition
              </span>
            </a>
          </div>
        </div>
        <div className="mt-4 " style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#C2C2C2",
              fontWeight: "400",
              fontSize: "32px",
            }}
          >
            Made with <span style={{ color: "red" }}>❤</span> for{" "}
            <span>
              <img src={canadaflag} />
            </span>{" "}
            in{" "}
            <span>
              <img src={indiaflag} />{" "}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
