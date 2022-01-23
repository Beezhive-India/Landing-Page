import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import canada from "../../assets/images/HomeImages/canada.png";

export default function ExploreMoreSection() {
  return (
    <div>
      <section className="explore-section">
        <div className="row gx-0 explore-div">
          <div className="row gx-0 col-md-7">
            <div className="explore-text">
              {" "}
              <span>
                An app
                <br />
                That can run nation
              </span>
            </div>
            <div className="explore-desc">
              <span>North America’s Only Super App</span>
            </div>
            <div className="explore-button-div">
              <Button className="px-4 explore-button-style">
                Explore More
              </Button>
            </div>
          </div>
          <div className="row gx-0 col-md-5">
            <img src={canada} className="explore-img" />
          </div>
        </div>
      </section>
    </div>
  );
}
