import React from "react";
import line_img from "../../assets/images/line-2.png";
import ICON_1 from "../../assets/images/icon-1.png";
import ICON_2 from "../../assets/images/icon-2.png";
import ICON_3 from "../../assets/images/icon-3.png";
import "./section-1.scss";
function Section1() {
  return (
    <div className="section-1">
      <div className="section-1-heading">
        <div>The</div>
        <div className="line-container">
          &nbsp;only&nbsp;
          <img src={line_img} alt="" className="line-img" />
        </div>
        <div>fertility kit you will</div>
        <br /> <div>ever need</div>
      </div>
      <div className="section-1-desc">
        Most ovulation tests predict your fertile days by tracking Estrogen and
        Luteinizing Hormone (LH), but fail to measure the hormone that actually
        confirms your ovulation and supports pregnancy:<b> Progesterone.</b>
      </div>
      <div className="section-1-subheading">What makes Inito different?</div>
      <div className="section-1-subdesc">
        Inito is the only fertility monitor that measures all 4 hormones on a
        single test strip, showing you a full picture of your cycles with
        results unique to your body.
      </div>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <img src={ICON_1} alt="" />
          </div>
          <div className="feature-text">
            <p>
              TRUSTED BY <br /> 20,000+ COUPLES
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={ICON_2} alt="" />
          </div>
          <div className="feature-text">
            <p>
              TRUSTED BY <br /> 20,000+ COUPLES
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={ICON_3} alt="" />
          </div>
          <div className="feature-text">
            <p>
              TRUSTED BY <br /> 20,000+ COUPLES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
