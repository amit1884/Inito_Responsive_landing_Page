import React from "react";
import Card from "../Card/Card";
import Img from "../../assets/images/graph.png";
import Line from "../../assets/images/line-2.png";
import "./section-3.scss";
function Card4() {
  return (
    <Card customClass="card-2 card-2-mb">
      <div className="left-section">
        <div className="heading">
          <div>Get charts and actual</div>
          <div className="same-line-text">
            <div className="line-container">
              values <img src={Line} alt="" className="line" />
            </div>{" "}
            <div>of your</div>
          </div>
          <div> hormones</div>
        </div>
        <div className="content">
          <p>
            Most ovulation kits have a set value or a threshold, making them
            likely to give a false read if your hormones fall outside the
            average range.
          </p>
          <br />
          <p>
            Every woman is unique, especially with a condition like PCOS or
            Thyroid which can influence hormone levels. Inito measures real
            values of your hormones to personalize results to the unique you.
          </p>
        </div>
      </div>
      <div className="right-section">
        <img src={Img} alt="" />
      </div>
    </Card>
  );
}

export default Card4;
