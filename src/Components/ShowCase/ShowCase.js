import React from "react";
import Comapny_1 from "../../assets/images/product-1.png";
import Comapny_2 from "../../assets/images/product-2.png";
import Comapny_3 from "../../assets/images/product-3.png";
import Comapny_4 from "../../assets/images/product-4.png";
import Comapny_5 from "../../assets/images/product-5.png";
import "./showcase.scss";
function ShowCase() {
  return (
    <div className="showcase-container">
      <div className="showcase-heading">
        <p>AS SEEN ON</p>
      </div>
      <div className="comapny-img-container">
        <div className="comapny-logo logo-1">
          <img src={Comapny_5} alt="" />
        </div>
        <div className="comapny-logo logo-2">
          <img src={Comapny_4} alt="" />
        </div>
        <div className="comapny-logo logo-3">
          <img src={Comapny_3} alt="" />
        </div>
        <div className="comapny-logo logo-4">
          <img src={Comapny_2} alt="" />
        </div>
        <div className="comapny-logo logo-5">
          <img src={Comapny_1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
