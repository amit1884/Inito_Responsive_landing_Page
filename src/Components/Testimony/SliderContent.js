import React from "react";
import Star from "../../assets/images/star.png";
import './testimony.scss'
function SliderContent({ data }) {
  return (
    <div className="slide-container">
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <div className="content">
        <p>
          This is my favorite fertility monitor I’ve tried so far. I was
          cautious about ordering since there’s very little info or reviews
          around the internet, but it seems to be a very well made and reliable
          device. It’s totally fascinating to see my hormone levels on the
          chart! My LH levels don’t cooperate with standard ovulation strips (I
          never get a positive with standard strips), so it’s nice to see all
          the different hormones mapped out together.
        </p>
      </div>
    </div>
  );
}

export default SliderContent;
