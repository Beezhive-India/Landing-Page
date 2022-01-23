import React from "react";

import home from "../../assets/images/HomeImages/home.png";
import driver from "../../assets/images/HomeImages/driver.png";
import user from "../../assets/images/HomeImages/user.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function JoinSection() {
  return (
    <div>
      <section id="joinsection" className="joinsection">
        <div className="row gx-0 join-text">Become part of Beezhive</div>

        <div className="row container gx-0 mx-auto">
          <div className="col-lg-4 px-4 col-md-6 col-12 box-height">
            <div className="hw-webi-work my-4 d-flex flex-column justify-content-center align-items-center h-100">
              <div
                id="prog"
                className="rounded-circle hw-work-1 mb-2 d-flex justify-content-center align-items-center"
              >
                <img src={home} alt="" height="50%" width="50%" />
              </div>
              <p className="  mb-2 text-center" style={{ fontSize: "48px" }}>
                Buisness
              </p>
              <p
                className="  mb-2 text-center px-4"
                style={{ fontSize: "24px", color: "#666666" }}
              >
                We empower merchants with cutting-edge technologies that help
                them multiply reach and sales.
              </p>
              <Button
                className="px-4"
                style={{
                  borderRadius: "40px",
                  border: "none",
                  boxShadow: "1px 2px #707070",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  backgroundColor: "#FADE31",
                  color: "#231F20",
                }}
              >
                Join as Buisness
              </Button>
            </div>
          </div>
          <div className="col-lg-4 px-4 col-md-6 col-12 box-height">
            <div className="hw-webi-work my-4 d-flex flex-column justify-content-center align-items-center h-100">
              <div
                id="prog"
                className="rounded-circle hw-work-1 mb-2 d-flex justify-content-center align-items-center"
              >
                <img src={driver} alt="" height="50%" width="50%" />
              </div>
              <p className="  mb-2 text-center" style={{ fontSize: "48px" }}>
                Drivers
              </p>
              <p
                className="  mb-2 text-center px-4"
                style={{ fontSize: "24px", color: "#666666" }}
              >
                Drive the North American economy with us and enjoy a bundle of
                health and financial benefits.
              </p>
              <Button
                className="px-4"
                style={{
                  borderRadius: "40px",
                  border: "none",
                  boxShadow: "1px 2px #707070",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  backgroundColor: "#FADE31",
                  color: "#231F20",
                }}
              >
                Join as Rider
              </Button>
            </div>
          </div>
          <div className="col-lg-4 px-4 col-md-6 col-12  box-height">
            <div className="hw-webi-work my-4 d-flex flex-column justify-content-center align-items-center h-100">
              <div
                id="prog"
                className="rounded-circle hw-work-1 mb-2 d-flex justify-content-center align-items-center"
              >
                <img src={user} alt="" height="50%" width="50%" />
              </div>
              <p className="  mb-2 text-center" style={{ fontSize: "48px" }}>
                Beezhiver
              </p>
              <p
                className="  mb-2 text-center px-4"
                style={{ fontSize: "24px", color: "#666666" }}
              >
                Join North America’s only hyper-growth potential billion dollars
                startup And create impact.
              </p>
              <Button
                className="px-4"
                style={{
                  borderRadius: "40px",
                  border: "none",
                  boxShadow: "1px 2px #707070",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  backgroundColor: "#FADE31",
                  color: "#231F20",
                }}
              >
                Join as employee
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
