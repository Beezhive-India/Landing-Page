import React from "react";
import brandlogo from "../../assets/images/HomeImages/brandlogo.png";
import img1 from "../../assets/images/HomeImages/img1.png";
import img2 from "../../assets/images/HomeImages/img2.png";
import img4 from "../../assets/images/HomeImages/img4.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import apple from "../../assets/images/HomeImages/apple.png";
import img3 from "../../assets/images/HomeImages/img3.png";
import playstore from "../../assets/images/HomeImages/playstore.png";
export default function IntroSection() {
  return (
    <div>
      <section className="intro-container">
        <div className="nav-main">
          <Navbar
            expand="lg"
            sticky="top"
            className="col-md-11 col-11 navbar-style"
          >
            <Navbar.Brand href="#home">
              <img src={brandlogo} className="brand-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto col-md-8 col-12 mx-auto d-flex justify-space-around  ">
                <Nav.Link
                  className="col-md-4 nav-link-style nav-link-fade-up "
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="col-md-4 nav-link-style nav-link-fade-up"
                  href="#about-us"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  className="col-md-4 nav-link-style nav-link-fade-up"
                  href="https://beezhive.medium.com/"
                  target="_blank"
                >
                  Blog
                </Nav.Link>
              </Nav>
              <div
                className="download-app-btn-div"
                style={{ textAlign: "center" }}
              >
                <Button className="px-4 download-app-btn ">Download App</Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="row gx-0 mt-4  w-100">
          <div className="row gx-0 col-md-3 intro-img-grp">
            <img src={img3} className="intro-img1" />
            <img src={img1} className="intro-img2" />
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row text-center">
              <span className="span-meet">Meet</span>
              <span className="span-beezhive col-11">Beezhive</span>
              <span className="span-north">North America’s Super App</span>
              <div
                className="col-md-10 mt-4 mx-auto button-grp"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button className="col-md-5 col-10 mx-auto intro-button-style">
                  <img
                    className="my-auto"
                    src={playstore}
                    style={{ height: "30px", width: "30px" }}
                  ></img>{" "}
                  Play store
                </Button>
                <Button className="col-md-5 col-10 mx-auto intro-button-style">
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
            </div>
          </div>
          <div className="row gx-0 col-md-3 intro-img-grp">
            <img src={img4} className="intro-img3" />
            <img src={img2} className="intro-img4" />
          </div>
        </div>
      </section>
    </div>
  );
}
