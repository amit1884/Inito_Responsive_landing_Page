import React from "react";
import Line from "../../assets/images/line-2.png";
import AppStore from "../../assets/images/appstore.png";
import "./stepwalkthrough.scss";
function StepLeftContent() {
  return (
    <div className="left-section">
      <div className="heading">
        <div className="same-line-text">
          <div>A</div>
          <div className="line-container">
            fertility lab <img src={Line} alt="" className="line" />
          </div>
          <div>at</div>
        </div>
        <div>your fingertips</div>
      </div>
      <div className="content">
        <p>
          Easy-to-read fertility diagnostic results directly on your iPhone¹, in
          just 10 minutes.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn-primary">Get the Inito Kit</button>
      </div>
      <div className="content-2">
        <p>
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </p>
      </div>
      <div className="appstore-container">
        <img src={AppStore} alt="" className="appstore-img" />
      </div>
    </div>
  );
}

export default StepLeftContent;
