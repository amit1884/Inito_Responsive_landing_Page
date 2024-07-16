import React, { useState } from "react";
import LOGO from "../../assets/images/logo-2.png";
import HamMenu from "../../assets/images/hamburger.png";
import "./navbar.scss";

const DeskTopNav = () => {
  return (
    <div className="desk-nav">
      <div className="brand-area">
        <img src={LOGO} alt="" />
      </div>
      <div className="menu-container">
        <div className="menu">About Us</div>
        <div className="menu">Blog</div>
        <div className="menu">FAQ</div>
        <div className="menu">Contact Us</div>
        <button className="btn-primary menu-btn">Try Inito</button>
      </div>
    </div>
  );
};
const MobileNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="mobile-nav">
      <div className="mb-nav-header">
        <div className="brand-area">
          <img src={HamMenu} alt="" onClick={() => setActive(true)} />
          <img className="logo" src={LOGO} alt="" />
        </div>
        <button className="btn-primary menu-btn">Try Inito</button>
      </div>
      <div className={`menu-container ${active ? "active" : ""}`}>
        <div className="cross-btn" onClick={() => setActive(false)}>
          X
        </div>
        <div className="menu">About Us</div>
        <div className="menu">Blog</div>
        <div className="menu">FAQ</div>
        <div className="menu">Contact Us</div>
      </div>
    </div>
  );
};
function Navbar() {
  return (
    <div>
      <DeskTopNav />
      <MobileNav />
    </div>
  );
}

export default Navbar;
