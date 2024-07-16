import React from "react";
import Question_line from "../../assets/images/question-line.png";
import "./faq.scss";
import { faqList } from "../../constants";
import Accordion from "../Accordion/Accordion";
function Faq() {
  return (
    <div className="faq">
      <div className="heading">
        <div className="show-in-same-line">
          <div>Your top </div>&nbsp;
          <div className="question-line-container">
            questions,
            <img src={Question_line} alt="" />
          </div>
        </div>
        <div>answered</div>
      </div>
      <div className="faq-list">
        {faqList?.map((faq, index) => {
          return (
            <Accordion data={faq} customClass="faq-container" key={faq?.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
