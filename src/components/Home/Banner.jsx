import React from "react";
import { Hero } from "./helper";
import { Button, Text, Title } from "../Layout/helpers";
import list1 from "../../assets/png/list1.png";
import list2 from "../../assets/png/list2.png";
import list3 from "../../assets/png/list3.png";
import list4 from "../../assets/png/list4.png";
import "./style.css";

const Banner = () => {
  return (
    <div>
      <Hero className="container mx-auto backdrop-blur-sm">
        <div className="flex justify-center flex-col items-center">
          <Title
            color="#00070C"
            $fontWeight="500"
            className="mb-[16px] text-center xs:text-[40px] xs:leading-[52px] sm:text-[40px] sm:leading-[52px] lg:text-[72px] lg:leading-[100px] "
          >
            Bridging hearts across{" "}
            <br className="xs:hidden sm:hidden lg:block" />
            <Text
              $color="#FFA900"
              $fontWeight="300"
              className="mb-[16px] text-center xs:text-[40px] xs:leading-[52px] sm:text-[40px] sm:leading-[52px] lg:text-[72px] lg:leading-[100px] mx-auto xs:inline sm:inline lg:inline"
              $italic
            >
              miles
              <span style={{ color: "#000" }}>.</span>
            </Text>
          </Title>
          <Text
            className="text-center mb-[24px] xs:text-[17px] xs:leading-[21.4px] sm:text-[17px] sm:leading-[21.4px] lg:text-[20px] lg:leading-[24px]"
            $color="#36454F"
            $fontWeight="400"
          >
            From doorstep deliveries to heartfelt services, Sendsile provides a
            hub to <br className="xs:hidden sm:hidden lg:block" /> support loved
            ones with food, health and personal care services.
          </Text>
          <div>
            <Button
              $background="#000E25"
              className="bg-primary"
              $color="#fff"
              $maxW="100%"
              $fontSize="15px"
              $fontWeight="700"
              $lineHeight="21px"
            >
              Get started
            </Button>
          </div>
        </div>
      </Hero>
      <div className="w-full overflow-hidden mt-[100px] mb-[130px]">
        <div className="flex w-fit gap-[18px] justify-center">
          <div className="flex w-max flex-nowrap custom_marquee">
            <img
              src={list1}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list2}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list3}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list4}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] "
            />
          </div>
          <div className="flex w-max flex-nowrap custom_marquee">
            <img
              src={list1}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list2}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list3}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] mr-4"
            />
            <img
              src={list4}
              alt=""
              className=" xs:max-h-[300px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
