import React from "react";
import img4 from "../../assets/images/HomeImages/img4.png";
import circle from "../../assets/images/HomeImages/circle.png";
import beezpaybox from "../../assets/images/HomeImages/beezpaybox.png";
export default function PaymentSection() {
  return (
    <div>
      <div className="row gx-0">
        <div className="col-md-7 col-12">
          <div className="payments-container  col-md-8 col-12 gx-0 gy-0">
            {" "}
            <img src={circle} className="transportimg my-auto" />
            <div className="centered-payments my-auto">Payments</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="transport-desc gx-0 gy-0">
              transactions reliable and cashless.
            </span>
          </div>
        </div>
        <div
          className="col-md-5"
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <img src={img4} className="img-2" />
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-md-5 " style={{ textAlign: "center" }}>
          <img src={beezpaybox} className="buisnessbox" />
        </div>
        <div
          className="col-md-5 transport-text "
          style={{
            paddingTop: "5%",
          }}
        >
          <span>E-wallet, go cashless. Mobile payments made easy</span>
        </div>
      </div>
    </div>
  );
}
