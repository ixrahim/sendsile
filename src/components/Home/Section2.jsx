import React from "react";
import { Button, Text, Title } from "../Layout/helpers";
import { FaArrowRight } from "react-icons/fa";
import laundry from "../../assets/png/laundry.png";

const Section2 = () => {
  return (
    <div>
      <div className="container mx-auto py-[107px]">
        <div className="flex flex-row items-center justify-between">
          <Text
            $fontSize="17px"
            $lineHeight="23.8px"
            $fontWeight="400"
            $color="#36454F"
          >
            WHAT WE OFFER
          </Text>
          <hr style={{ width: "87%" }} />
        </div>

        <div className="flex flex-row justify-between py-[80px]">
          <div>
            <div className="bg-[#FEF5EA] py-[20px] px-[20px] rounded-[16px]">
              <Title $fontWeight="500" $fontSize="22px" $lineHeight="30.8px">
                Quality laundry services
              </Title>
              <div className="pt-[8px] pb-[24px]">
                <Text
                  $fontSize="17px"
                  $lineHeight="23.8px"
                  $fontWeight="400"
                  $color="#536878"
                >
                  Impeccable laundry services to keep your loved
                  <br /> ones fresh and comfortable.
                </Text>
              </div>
              <div className="flex items-center">
                <Text
                  $fontWeight="700"
                  $fontSize="17px"
                  $lineHeight="23.6px"
                  $background="transparent"
                  className=""
                  $color="#FFA900"
                  $maxW="100%"
                  $border="none"
                  $cursor="pointer"
                >
                  Learn more
                </Text>
                <FaArrowRight style={{ color: "#FFA900", marginLeft: "8px" }} />
              </div>
            </div>

            <div className="py-[40px] px-[20px]">
              <Text
                $fontSize="22px"
                $lineHeight="30.8px"
                $fontWeight="400"
                $color="#00070C"
              >
                Farm fresh delights
              </Text>
            </div>
            <div className="px-[20px]">
              <Text
                $fontSize="22px"
                $lineHeight="30.8px"
                $fontWeight="400"
                $color="#00070C"
              >
                Healthcare plans
              </Text>
            </div>
          </div>
          <div>
            <img src={laundry} alt="" width="650px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
