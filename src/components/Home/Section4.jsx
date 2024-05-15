import React, { useState } from "react";
import { Text, Title } from "../Layout/helpers";
import Accordion from "../Accordion";
import { accordionData } from "./helper";
import magic_wand_icon from "../../assets/png/magic_wand_icon.png";

const Section4 = ({ isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[76px] flex flex-col justify-between md:flex-row lg:flex-row">
        <div className={isMobile ? "mb-[40px] grow-0" : "mb-[40px] grow-0"}>
          <div>
            <div className="flex flex-row xs:justify-between sm:justify-between lg:flex-row">
              <Title
                $fontWeight="500"
                $color="#000000"
                className="xs:text-[24px] xs:leading-[28.8px] xs:mb-[16px] sm:text-[24px] sm:leading-[28.8px] sm:mb-[16px] lg:text-[44px] lg:leading-[52.8px] "
              >
                Some of the <br className="xs:hidden sm:hidden lg:block" />
                things you may <br /> want to know
              </Title>

              <img
                src={magic_wand_icon}
                alt=""
                width="40px"
                height="40px"
                className="xs:block sm:block md:block lg:block"
              />
            </div>
            <div>
              <Text
                $fontSize={isMobile ? "15px" : "18px"}
                $lineHeight={isMobile ? "21px" : "25.2px"}
                $fontWeight="500"
                $color="#36454F"
              >
                Explore answers without the need to pose <br /> the questions.
              </Text>
            </div>
          </div>
        </div>
        <div className="grow max-w-[720px]">
          {accordionData.map((item, index) => {
            return (
              <div key={item.id}>
                <Accordion
                  title={item.title}
                  content={item.content}
                  index={index}
                  isActive={activeIndex === index}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
