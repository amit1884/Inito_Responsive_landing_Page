import React from "react";
import Img1 from "../../assets/images/img-1.png";
import "./stepwalkthrough.scss";
function StepOverview() {
  return (
    <div className="right-section">
      <div className="step-overview-container">
        <div className="step">
          <div className="image-container">
            <img src={Img1} alt="" />
            <div className="step-no-container-mb">
                1
            </div>
          </div>
          <div className="step-desc">
            <div className="step-no-container">
              <div className="step-no">1</div>
            </div>
            <div className="step-content">
              <p>Dip the test strip in urine for 15 seconds.</p>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="image-container">
            <img src={Img1} alt="" />
            <div className="step-no-container-mb">
                2
            </div>
          </div>
          <div className="step-desc">
            <div className="step-no-container">
              <div className="step-no">2</div>
            </div>
            <div className="step-content">
              <p>Attach the Inito Fertility Monitor to your iPhone*.</p>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="image-container">
            <img src={Img1} alt="" />
            <div className="step-no-container-mb">
                3
            </div>
          </div>
          <div className="step-desc">
            <div className="step-no-container">
              <div className="step-no">3</div>
            </div>
            <div className="step-content">
              <p>Insert the test strip into the Inito Fertility Monitor.</p>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="image-container">
            <img src={Img1} alt="" />
            <div className="step-no-container-mb">
                4
            </div>
          </div>
          <div className="step-desc">
            <div className="step-no-container">
              <div className="step-no">4</div>
            </div>
            <div className="step-content">
              <p>Get personalized results on our App in 10 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOverview;
