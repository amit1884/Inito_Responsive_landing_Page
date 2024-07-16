import React, { useState } from "react";
import Minus from "../../assets/images/Minus.png";
import Plus from "../../assets/images/Plus.png";
import "./accordion.scss";
function Accordion({ data, customClass = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-container ${customClass}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div>{data?.title}</div>
        {!open && (
          <div className="open-accordion">
            <img src={Plus} alt="" />
          </div>
        )}
        {open && (
          <div className="close-accordion">
            {" "}
            <img src={Minus} alt="" />
          </div>
        )}
      </div>
      <div className={`accordion-body ${open ? "open-accordion" : ""}`}>
        {data?.description}
      </div>
    </div>
  );
}

export default Accordion;
