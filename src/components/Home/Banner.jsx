import React from "react";
import { Hero } from "./helper";
import { Button, Text, Title } from "../Layout/helpers";
import list_img from "../../assets/png/list.png";
import list_img_mobile from "../../assets/png/mobile_banner.png";

const Banner = ({ isMobile }) => {
  return (
    <div>
      <Hero className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <Title
            $fontSize={isMobile ? "40px" : "72px"}
            $lineHeight={isMobile ? "52px" : "100px"}
            color="#00070C"
            $fontWeight="500"
            className="mb-[16px] text-center"
          >
            Bridging hearts across
            {!isMobile && <br />}
            <Text
              $fontSize={isMobile ? "40px" : "72px"}
              $lineHeight={isMobile ? "52px" : "100px"}
              $color="#FFA900"
              $fontWeight="300"
              className="mx-auto"
              $italic
            >
              miles
              <span style={{ color: "#000" }}>.</span>
            </Text>
          </Title>
          <Text
            className="text-center mb-[24px]"
            $color="#36454F"
            $fontWeight="400"
            $fontSize={isMobile ? "17px" : "20px"}
            $lineHeight={isMobile ? "21.4px" : "24px"}
          >
            From doorstep deliveries to heartfelt services, Sendsile provides a
            hub to {!isMobile && <br />} support loved ones with food, health
            and personal care services.
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
      <div className="mt-[100px] mb-[130px]">
        <img src={isMobile ? list_img_mobile : list_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
