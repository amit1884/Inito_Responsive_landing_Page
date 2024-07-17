import React from "react";
import LOGO from "../../assets/images/logo-1.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Youtube from "../../assets/images/YouTube.png";
import "./footer.scss";
import { footerMenus } from "../../constants";
import MenuDropDown from "./MenuDropdown";
function MobileFooter() {
  return (
    <>
      <div className="footer mb-footer">
        <div className="main-footer">
          <div className="social-container">
            <div className="social-icon">
              <img src={Facebook} alt="" />
            </div>
            <div className="social-icon">
              <img src={Instagram} alt="" />
            </div>
            <div className="social-icon">
              <img src={LinkedIn} alt="" />
            </div>
            <div className="social-icon">
              <img src={Youtube} alt="" />
            </div>
          </div>
          {footerMenus?.map((item, index) => {
            return (
              <MenuDropDown data={item} customClass="mb-dropdown">
                {item?.menuItem?.map((menu, index) => {
                  return (
                    <div className="menu-item" key={menu.id}>
                      {menu?.menu}
                    </div>
                  );
                })}
              </MenuDropDown>
            );
          })}
        </div>
        <div className="bottom-footer">
          <div className="company-name">
            <img src={LOGO} alt="" />
          </div>
          <div className="copyright">
            Copyright 2019. Samplytics Technologies Private Limited. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileFooter;
