import React from "react";
import { Hero } from "./helper";
import { Button, Text } from "../Layout/helpers";
import list_img from "../../assets/png/list.png";

const Banner = () => {
  return (
    <div>
      <Hero className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <Text
            $fontSize="72px"
            $lineHeight="100px"
            color="#00070C"
            $fontWeight="500"
            className="mb-[16px]"
          >
            Bridging hearts across
            <br />
            <Text
              $fontSize="72px"
              $lineHeight="100px"
              $color="#FFA900"
              $fontWeight="300"
              className="mx-auto"
              $italic
            >
              miles
              <span style={{ color: "#000" }}>.</span>
            </Text>
          </Text>
          <Text
            className="text-center mb-[24px]"
            color="#36454F"
            $fontSize="20px"
            $fontWeight="400"
            $lineHeight="24px"
          >
            From doorstep deliveries to heartfelt services, Sendsile provides a
            hub to <br /> support loved ones with food, health and personal care
            services.
          </Text>
          <div>
            <Button
              $background="#000E25"
              className="bg-primary"
              $color="#fff"
              $maxW="100%"
            >
              Get started
            </Button>
          </div>
        </div>
      </Hero>
      <div className="mt-[100px] mb-[130px]">
        <img src={list_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
