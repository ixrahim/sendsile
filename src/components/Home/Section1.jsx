import React from "react";
import { Image, Text } from "../Layout/helpers";
import lotus from "../../assets/png/lotus.png";

const Section1 = () => {
  return (
    <div className="mb-[42px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Text
              $fontSize="52px"
              $lineHeight="62.4px"
              color="#00070C"
              $fontWeight="500"
              className="mr-6"
            >
              Sendsile has <br /> you covered
            </Text>
            <div>
              <img src={lotus} alt="" width="98px" />
            </div>
          </div>

          <div>
            <Text
              $fontSize="24px"
              $lineHeight="33.6px"
              color="#00070C"
              $fontWeight="400"
              className=""
            >
              In a world where distance separates hearts, we provide <br />{" "}
              fresh farm foods, meal plans and personalized care services <br />{" "}
              for your loved ones.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
