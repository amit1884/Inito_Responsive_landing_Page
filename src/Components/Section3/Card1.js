import React from "react";
import Card from "../Card/Card";
import Img from "../../assets/images/img-6.png";
function Card1() {
  return (
    <Card customClass="card-1">
      <div className="heading">WHY MEASURE PROGESTERONE?</div>
      <div className="content">
        <p>
          <b>Anovulation</b> (having a menstrual cycle with no egg) is actually
          a common occurrence, affecting 1 in 10 women*.
        </p><br/>
        <p>
          A sure way to confirm ovulation is a <b>rise in Progesterone</b> level
          after peak fertility. Progesterone also supports implantation and
          elevated levels of PdG during the 7-10 day window after ovulation
          correlates to higher chances of a successful pregnancy.
        </p>
        <p className="light-text">* Source: National Institutes of Health</p>
      </div>
      <div className="subheading">
        “Inito is all that you need to give you the best chance of conception."
      </div>
      <div className="account-container">
        <div className="profile-photo-container">
          <img src={Img} alt="" />
        </div>
        <div className="details">
          <p>Dr. Rachel Wagner</p>
          <p className="desig">MD</p>
        </div>
      </div>
    </Card>
  );
}

export default Card1;
