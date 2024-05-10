import React from "react";
import { Text, Title } from "../Layout/helpers";
import Accordion from "../Accordion";
import { accordionData } from "./helper";
import magic_wand_icon from "../../assets/png/magic_wand_icon.png";

const Section4 = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[76px] flex flex-col justify-between md:flex-row lg:flex-row">
        <div className={isMobile ? "mb-[40px] grow-0" : "grow-0"}>
          <div>
            <div className="flex flex-row lg:flex-col">
              <Title
                $fontSize={isMobile ? "24px" : "44px"}
                $lineHeight={isMobile ? "28.8px" : "52.8px"}
                $fontWeight="500"
                $color="#000000"
              >
                Some of the {!isMobile && <br />}
                things you may <br /> want to know
              </Title>
              {isMobile && (
                <img src={magic_wand_icon} alt="" width="40px" height="40px" />
              )}
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
          {accordionData.map((item) => {
            return (
              <div key={item.id}>
                <Accordion title={item.title} content={item.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
