import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import SliderContent from "./SliderContent";
import "./testimony.scss";
function Testimony() {
  return (
    <div className="testimony">
      <div className="slider-container">
        <SlickSlider>
          <SliderContent />
          <SliderContent />
          <SliderContent />
        </SlickSlider>
      </div>
    </div>
  );
}

export default Testimony;
