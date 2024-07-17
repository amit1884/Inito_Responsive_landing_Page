import React from "react";
import Card from "../Card/Card";
import Img from "../../assets/images/ipnone-calender.png";
import "./section-3.scss";
function Card3() {
  return (
    <Card customClass="card-2 card 3">
      <div className="right-section right-section-with-padding top-section">
        <img src={Img} alt="" />
      </div>
      <div className="left-section">
        <div className="title">
          <div>Inito tracks everything so you don’t have to</div>
        </div>
        <div className="content">
          <p>
            The Inito Fertility Monitor comes with a free easy-to-use App, so
            you can track your fertile days with ease and know exactly when you
            ovulate.
          </p>
          <p> Our App notifies you for everything:</p>
        </div>
        <ul className="list">
          <li>Your fertility levels</li>
          <li>When to test on the right days</li>
          <li>When you’ve successfully ovulated</li>
          <li>And when to roll into bed!</li>
        </ul>
      </div>
      <div className="right-section right-section-with-padding bottom-section">
        <img src={Img} alt="" />
      </div>
    </Card>
  );
}

export default Card3;
