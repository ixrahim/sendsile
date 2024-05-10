import React, { useState } from "react";
import "./style.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`accordion-item ${
        isActive ? "rounded-t-[10px]" : "rounded-[10px]"
      }`}
    >
      <div
        className={`accordion-title ${
          isActive ? "rounded-t-[10px]" : "rounded-[10px]"
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <h5 className="font-[500] text-[15px] leading-[24.2px]">{title}</h5>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          className={`accordion-content ${
            isActive ? "rounded-b-[10px]" : "rounded-[10px]"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
