import React from "react";
import img2 from "../../assets/images/HomeImages/img2.png";
import circle from "../../assets/images/HomeImages/circle.png";

import buisnessbox from "../../assets/images/HomeImages/buisnessbox.png";
export default function TransportSection() {
  return (
    <div>
      <div className="row gx-0">
        <div className="col-md-8 col-12">
          <div className="transport-container  col-md-12 col-12 gx-0 px-2">
            {" "}
            <img className="transportimg my-auto" src={circle} />
            <div className="centered-transport my-auto">Transportation</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="transport-desc gx-0 gy-0">
              Move faster & freely with ease.
            </span>
          </div>
        </div>
        <div
          className="col-md-4 "
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <img src={img2} className="img-2" />
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-md-5 " style={{ textAlign: "center" }}>
          <img src={buisnessbox} className="buisnessbox" />
        </div>
        <div
          className="col-md-5 transport-text"
          style={{
            paddingTop: "5%",
          }}
        >
          <span className="">
            Book cab or send anything across the city faster on single tap With
            Beezride & Beezsend
          </span>
        </div>
      </div>
    </div>
  );
}
