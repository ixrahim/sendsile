import React from "react";
import "./style.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordion = ({ title, content, index, setActiveIndex, isActive }) => {
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
        onClick={() => handleItemClick(index)}
      >
        <div>
          <h5 className="font-[500] text-[15px] leading-[24.2px]">{title}</h5>
        </div>
        <div>{isActive ? <FaChevronUp /> : <FaChevronDown />}</div>
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
