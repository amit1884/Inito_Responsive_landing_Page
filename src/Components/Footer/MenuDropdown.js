import React, { useState } from "react";
import DownArrow from "../../assets/images/down-arrow.png";
import "./footer.scss";
function MenuDropDown({ data, customClass = "",children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`menudropdown-container ${customClass}`}>
      <div className="menudropdown-header" onClick={() => setOpen(!open)}>
        <div>{data?.title}</div>
        {!open && (
          <div className="open-menudropdown">
            <img src={DownArrow} alt="" />
          </div>
        )}
        {open && (
          <div className="close-menudropdown">
            {" "}
            <img src={DownArrow} alt="" />
          </div>
        )}
      </div>
      <div className={`menudropdown-body ${open ? "open-menudropdown" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default MenuDropDown;
