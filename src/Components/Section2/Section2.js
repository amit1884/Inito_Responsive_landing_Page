import React from "react";
import PHONE from "../../assets/images/ipnone-2.png";
import Line from "../../assets/images/line-2.png";
import Graph from "../../assets/images/graph-2.png";
import Check1 from "../../assets/images/check-blue.png";
import Check2 from "../../assets/images/check-green.png";
import Check3 from "../../assets/images/check-orange.png";
import Check4 from "../../assets/images/check-purple.png";
import Egg from '../../assets/images/an-egg.png'
import Line2 from '../../assets/images/line-1.png'
import "./section-2.scss";
function Section2() {
  return (
    <div className="section-2">
      <div className="sub-section sub-section-1">
        <div className="image-section">
          <img src={PHONE} alt="" />
        </div>
        <div className="text-section">
          <div className="heading">
            <div>
              Predict and confirm
              <br />
              your ovulation with
            </div>
            <div className="text-in-same-line">
              <div className="line-container">
                actual <img src={Line} alt="" />
              </div>
              <div>data</div>
            </div>
          </div>
          <div className="subheading">
            Unlike most ovulation tests that only give you "yes/no" results,
            Inito provides real numerical values of your fertility hormones.
            <br />
            <br /> If you have irregular cycles, actual data is necessary to
            know exactly when you ovulate, and when is the best time to try to
            conceive.
          </div>
          <button className="btn-primary section-2-btn">
            Get The Inito Kit
          </button>
        </div>
        <div className="image-section-mb">
          <img src={PHONE} alt="" />
        </div>
      </div>
      <div className="sub-section sub-section-2">
        <div className="text-section">
          <div className="heading">
            <div className="text-in-same-line">
              <div>Never miss &nbsp;</div>
              <div className="line-container">
                a day <img src={Egg} alt="" className="egg-img"/>
                <img src={Line2} alt="" className="strike-img"/>
              </div>
            </div>
            <div>again with Inito</div>
          </div>

          <div className="subheading">
            Inito tracks up to 6 fertile days and confirms ovulation by
            <br /> measuring all 4 hormones in just 10 minutes:
          </div>
          <div className="list">
            <div className="list-item">
              <img src={Check2} alt="" />
              <div>Estrogen, which rises 3-4 days before ovulation</div>
            </div>
            <div className="list-item">
              <img src={Check4} alt="" />
              <div>Estrogen, which rises 3-4 days before ovulation</div>
            </div>
            <div className="list-item">
              <img src={Check1} alt="" />
              <div>Estrogen, which rises 3-4 days before ovulation</div>
            </div>
            <div className="list-item">
              <img src={Check3} alt="" />
              <div>Estrogen, which rises 3-4 days before ovulation</div>
            </div>
          </div>
        </div>
        <div className="image-section graph-img-container ">
          <img src={Graph} alt=""  className="graph-img"/>
        </div>
        <div className="image-section-mb graph-img-container ">
          <img src={Graph} alt=""  className="graph-img"/>
        </div>
      </div>
    </div>
  );
}

export default Section2;
