import React from "react";
import { Text, Title } from "../Layout/helpers";
import bowl_icon from "../../assets/png/bowl_icon.png";
import clock_icon from "../../assets/png/clock_icon.png";
import snow_icon from "../../assets/png/snow_icon.png";
import card_img1 from "../../assets/png/card_img1.png";
import card_img2 from "../../assets/png/card_img2.png";
import card_img3 from "../../assets/png/card_img3.png";
import Carousel from "../Carousel";
import { carouselData } from "./helper";

const Section3 = ({ isMobile }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[76px] flex flex-col justify-center items-center">
        <div className="pb-[40px]">
          <div className="mb-[16px]">
            <Title
              // $fontSize={isMobile ? "24px" : "42px"}
              // $lineHeight={isMobile ? "21.8px" : "54.8px"}
              $fontWeight="500"
              className="text-center xs:text-[24px] sm:text-[24px] md:text-[24px] lg:text-[42px] xs:leading-[21.8px] sm:leading-[21.8px] md:leading-[21.8px] lg:leading-[54.8px]"
              $maxW="100%"
            >
              Request . Pay . Delivery
            </Title>
          </div>
          <Text
            $fontSize={isMobile ? "15px" : "18px"}
            $lineHeight={isMobile ? "21px" : "25.2px"}
            $fontWeight="400"
            $color="#36454F"
            className="text-center"
          >
            From doorstep deliveries to heartfelt services, Sendsile provides a
            hub to
            {!isMobile && <br />}
            support loved ones in Nigeria with for food, health and personal
            care servicess
          </Text>
        </div>

        <>
          <section className="container space-y-8 xs:block sm:block md:block lg:hidden">
            <Carousel context={carouselData} />
          </section>
        </>

        <div className="flex gap-x-[20px] xs:hidden sm:hidden md:hidden lg:block">
          <div>
            <div className="flex flex-col justify-between bg-[#F7F7F7] py-[32px] px-[20px] rounded-[18px] max-h-[398px] h-[100%]">
              <div>
                <div className="mb-[16px]">
                  <img src={bowl_icon} alt="" width="24px" />
                </div>
                <Title $fontSize="22px" $lineHeight="30.8px" $fontWeight="500">
                  Nourish your loved ones <br />
                  with the diversity they <br /> crave.
                </Title>
              </div>
              <div className="mt-[43px]">
                <img src={card_img1} alt="" width="282px" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between bg-[#000000] py-[32px] px-[20px] rounded-[18px] max-h-[398px] h-[100%]">
              <div>
                <div className="mb-[16px]">
                  <img src={snow_icon} alt="" width="24px" />
                </div>
                <Title
                  $fontSize="22px"
                  $lineHeight="30.8px"
                  $fontWeight="500"
                  $color="#fff"
                >
                  Diverse cross border <br /> payment options.
                </Title>
              </div>
              <div className="mt-[43px]">
                <img src={card_img2} alt="" width="282px" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between  bg-card-bg bg-cover py-[32px] px-[20px] rounded-[18px] max-h-[398px] h-[100%]">
              <div>
                <div className="mb-[16px]">
                  <img src={clock_icon} alt="" width="24px" />
                </div>
                <Title
                  $fontSize="22px"
                  $lineHeight="30.8px"
                  $fontWeight="500"
                  $color="#fff"
                >
                  Swift service delivery to <br />
                  your loved ones.
                </Title>
              </div>
              <div className="mt-[43px]">
                <img src={card_img3} alt="" width="282px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
