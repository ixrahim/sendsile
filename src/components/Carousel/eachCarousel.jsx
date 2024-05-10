import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../Layout/helpers";

const EachCarousel = ({ item, isNews }) => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-between bg-[#F7F7F7] py-[32px] px-[20px] rounded-[18px] max-h-[398px] h-[100%]">
          <div>
            <div className="mb-[16px]">
              <img src={item.icon} alt="" width="24px" />
            </div>
            <Title $fontSize="22px" $lineHeight="30.8px" $fontWeight="500">
              {item.title}
            </Title>
          </div>
          <div className="mt-[43px]">
            <img src={item.image} alt="" width="282px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCarousel;
