import React from "react";
import beezchatbox from "../../assets/images/HomeImages/beezchatbox.png";
import circle from "../../assets/images/HomeImages/circle.png";

import img3 from "../../assets/images/HomeImages/img3.png";
export default function SocialSection() {
  return (
    <div>
      <div className="row gx-0">
        <div className="col-md-8 col-12">
          <div className="transport-container  col-md-8 col-md-12 col-12 gx-0 px-2">
            {" "}
            <img className="transportimg my-auto" src={circle} />
            <div className="centered-transport my-auto">Social</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="transport-desc gx-0 gy-0">
              We care about your privacy.
            </span>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <img src={img3} className="img-2" />
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-md-5 " style={{ textAlign: "center" }}>
          <img src={beezchatbox} className="buisnessbox" />
        </div>
        <div
          className="col-md-5 transport-text"
          style={{
            paddingTop: "5%",
          }}
        >
          <span className="">
            Say “hello” to a beezchat simple, powerful, and secure messenger
          </span>
        </div>
      </div>
    </div>
  );
}
