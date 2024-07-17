import LOGO from "../../assets/images/logo-1.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Youtube from "../../assets/images/YouTube.png";
import "./footer.scss";
import { footerMenus } from "../../constants";
const DesktopFooter = () => {
  return (
    <>
      <div className="footer desktop-footer">
        <div className="main-footer">
          {footerMenus?.map((item, index) => {
            return (
              <div className="menu-list" key={item?.id}>
                <div className="menu-title">{item?.title}</div>
                {item?.menuItem?.map((menu, index) => {
                  return (
                    <div className="menu-item" key={menu.id}>
                      {menu?.menu}
                    </div>
                  );
                })}
              </div>
            );
          })}
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
        </div>
        <div className="bottom-footer">
          <div className="company-name">
            <img src={LOGO} alt="" />
          </div>
          <div className="copyright">Copyright 2023, Inito Inc.</div>
        </div>
      </div>
    </>
  );
};
export default DesktopFooter;
