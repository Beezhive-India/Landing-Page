import React from "react";
import IntroSection from "./Home/IntroSection";
import AboutUsSection from "./Home/AboutUsSection";
import ExploreMoreSection from "./Home/ExploreMoreSection";
import PaymentSection from "./Home/PaymentSection";
import SocialSection from "./Home/SocialSection";
import FoodSection from "./Home/FoodSection";
import TransportSection from "./Home/TransportSection";
import JoinSection from "./Home/JoinSection";
import DownloadSection from "./Home/DownloadSection";
import Footer from "./Home/Footer";
import BuissnessSection from "./Home/BuissnessSection";
import "../assets/css/index.css";

import "react-multi-carousel/lib/styles.css";

const IndexPage = () => {
  return (
    <>
      {/* Start of intro section  */}
      <IntroSection />
      {/* end of intro section */}
      {/* start of about section  */}
      <section
        id="about-us"
        className=""
        style={{ marginTop: "5rem", overflowX: "hidden" }}
      >
        <AboutUsSection />
      </section>
      {/* end of about section */}
      {/* start of exploremore section */}
      <ExploreMoreSection />
      {/* end of exploremore section */}
      {/* start of navigation links to payment social sections */}
      <section style={{}}>
        <div
          className="row gx-0 res-rad"
          style={{
            backgroundColor: "white",

            paddingTop: "5rem",
            paddingBottom: "6rem",
          }}
        >
          <ul class="navsection">
            <li>
              <a href="#payments">Payments</a>
            </li>
            <li>
              <a href="#social">Social</a>
            </li>
            <li>
              <a href="#food">Food & Shoping</a>
            </li>
            <li>
              <a href="#buisness">Buisness</a>
            </li>
            <li>
              <a href="#transport">Transportation</a>
            </li>
          </ul>
        </div>
      </section>
      {/* end of nanavigation links */}
      <section
        id="payments"
        className="payments res-rad"
        style={{
          backgroundColor: "#5FCD6C",

          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <PaymentSection />
      </section>
      <section
        id="social"
        className="social res-rad"
        style={{
          backgroundColor: "#408BF9",

          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <SocialSection />
      </section>
      <section
        id="food"
        className="food res-rad"
        style={{
          backgroundColor: "#F2AD73",

          paddingTop: "5rem",
          paddingBottom: "5rem",
          // paddingLeft: "5%",
        }}
      >
        <FoodSection />
      </section>
      <section
        id="buisness"
        className="buisness res-rad"
        style={{
          backgroundColor: "#8CD6C4",

          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <BuissnessSection />
      </section>
      <section
        id="transport"
        className="transport res-rad"
        style={{
          backgroundColor: "#0094F2",

          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <TransportSection />
      </section>
      <JoinSection />
      <DownloadSection />
      <Footer />{" "}
    </>
  );
};
export default IndexPage;
