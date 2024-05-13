import React from "react";
import { Text } from "../Layout/helpers";
import lotus from "../../assets/png/lotus.png";

const Section1 = ({ isMobile }) => {
  return (
    <div className="mb-[42px]">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-col items-start lg:items-center lg:flex-row">
          <div
            className={
              "flex items-center xs:mb-[24px] sm:mb-[24px] md:mb-[24px]"
            }
          >
            <Text
              $fontSize={isMobile ? "24px" : "52px"}
              $lineHeight={isMobile ? "28.4px" : "62.4px"}
              color="#00070C"
              $fontWeight="500"
              className="xs:mr-6 lg:mr-6"
            >
              Sendsile has {!isMobile && <br />} you covered
            </Text>
            <div>
              <img
                src={lotus}
                alt=""
                // width={isMobile ? "41.7px" : ""}
                className="xs:w-[41.7px] sm:w-[41.7px] md:w-[41.7px] lg:w-[98px]"
              />
            </div>
          </div>

          <div>
            <Text
              $fontSize={isMobile ? "15px" : "24px"}
              $lineHeight={isMobile ? "21.7px" : "33.6px"}
              color="#00070C"
              $fontWeight="400"
              className=""
            >
              In a world where distance separates hearts, we provide <br />{" "}
              fresh farm foods, meal plans and personalized care services{" "}
              {!isMobile && <br />}
              for your loved ones.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
