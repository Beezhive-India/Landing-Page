import React from "react";
import img5 from "../../assets/images/HomeImages/img5.png";
import circle from "../../assets/images/HomeImages/circle.png";
import buisnessbox from "../../assets/images/HomeImages/buisnessbox.png";
export default function BuissnessSection() {
  return (
    <div>
      <div className="row gx-0">
        <div className="col-md-8 col-12">
          <div className="transport-container  col-md-12 col-12 gx-0 px-2">
            {" "}
            <img src={circle} className="transportimg my-auto" />
            <div className="centered-transport my-auto">Buisness</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="transport-desc gx-0 gy-0">
              Unlock growth of business.
            </span>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <img src={img5} className="img-2" />
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-md-5 " style={{ textAlign: "center" }}>
          <img src={buisnessbox} className="buisnessbox" />
        </div>
        <div
          className="col-md-7 transport-text"
          style={{
            paddingTop: "5%",
          }}
        >
          <span>
            Enable contactless ordering & payment in your store with One app.
          </span>
        </div>
      </div>
    </div>
  );
}
