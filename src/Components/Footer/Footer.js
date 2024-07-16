import React from "react";
import LOGO from "../../assets/images/logo-1.png";
import Facebook from '../../assets/images/Facebook.png'
import Instagram from '../../assets/images/Instagram.png'
import LinkedIn from '../../assets/images/LinkedIn.png'
import Youtube from '../../assets/images/YouTube.png'
import "./footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="menu-list">
          <div className="menu-title">Comapny</div>
          <div className="menu-item">About Us</div>
          <div className="menu-item">Careers</div>
          <div className="menu-item">Blog</div>
          <div className="menu-item">Contact Us</div>
        </div>
        <div className="menu-list">
          <div className="menu-title">Support</div>
          <div className="menu-item">FAQ</div>
          <div className="menu-item">Terms</div>
          <div className="menu-item">Privacy Policy</div>
          <div className="menu-item">Return & Warranty</div>
        </div>
        <div className="menu-list">
          <div className="menu-title">Get In Touch</div>
          <div className="menu-item">+1 815-369-0989</div>
          <div className="menu-item">help@inito.com</div>
          <div className="menu-item">
            355 Bryant Street, Suite 403,
            <br /> San Francisco 94017
          </div>
        </div>
        <div className="social-container">
          <div className="social-icon"><img src={Facebook} alt=""/></div>
          <div className="social-icon"><img src={Instagram} alt=""/></div>
          <div className="social-icon"><img src={LinkedIn} alt=""/></div>
          <div className="social-icon"><img src={Youtube} alt=""/></div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="company-name">
          <img src={LOGO} alt="" />
        </div>
        <div className="copyright">Copyright 2023, Inito Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
