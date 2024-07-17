import React from "react";
import Card1 from "./Card1";
import Line from "../../assets/images/line-2.png";
import "./section-3.scss";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function Section3() {
  return (
    <div className="section-3">
      <Card1 />
      <div className="main-content">
        <div className="main-heading">
          <div>Why Inito is the smarter</div>
          <div className="same-line-text">
            way to get
            <div className="line-container">
              pregnant <img src={Line} alt="" className="line" />
            </div>
          </div>
        </div>
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default Section3;
