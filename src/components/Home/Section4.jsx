import React from "react";
import { Text, Title } from "../Layout/helpers";
import Accordion from "../Accordion";
import { accordionData } from "./helper";

const Section4 = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[76px] flex flex-row justify-between">
        <div className="grow-0">
          <div>
            <Title
              $fontSize="44px"
              $lineHeight="52.8px"
              $fontWeight="500"
              $color="#000000"
            >
              Some of the <br />
              things you may <br /> want to know
            </Title>
            <div>
              <Text
                $fontSize="18px"
                $lineHeight="25.2px"
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
              <div>
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
