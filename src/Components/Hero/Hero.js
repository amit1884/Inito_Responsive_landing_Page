import React from "react";
import HERO_IMG from "../../assets/images/phone_desk.png";
import PENDRIVE from "../../assets/images/pendrive-mb.png";
import PHONE from "../../assets/images/mobile-mb.png";
import Star from "../../assets/images/star.png";
import Img from '../../assets/images/line-4.png'
import Img2 from '../../assets/images/line-6.png'
import "./hero.scss";
function Hero() {
  return (
    <div className="hero-container-desk">
      <div className="text-area">
        <div className="hero-title">
          <span className="star-container">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </span>
          <span className="star-text">TRUSTED BY 20,000+ COUPLES</span>
        </div>
        <div className="hero-subtitle">
          <p>Track your fertility hormones at home, in 10 minutes</p>
        </div>
        <div className="hero-content">
          <p>
            Get accurate results of
            <b> Estrogen, LH, Progesterone metabolite PdG and FSH</b> with
            Inito, the all-in-one, FDA-registered fertility monitor.
          </p>
        </div>
        <div>
          <button className="btn-primary hero-btn">
            How does Inito works?
          </button>
        </div>
      </div>
      <div className="image-area">
        <div className="hero-img-container">
          <img src={HERO_IMG} alt="" className="desk-hero-img" />
          <img src={Img} alt="" className="desk-svg-1" />
          <img src={Img2} alt="" className="desk-svg-2" />
        </div>
        <img src={PENDRIVE} alt="" className="mb-hero-img pen-img" />
        <img src={PHONE} alt="" className="mb-hero-img phone-img" />
      </div>
      <button className="btn-primary mb-hero-btn">How does Inito work?</button>
    </div>
  );
}

export default Hero;
