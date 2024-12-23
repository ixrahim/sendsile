import React, { useState } from "react";
import { Text, Title } from "../Layout/helpers";
import { FaArrowRight } from "react-icons/fa";

import laundry2 from "../../assets/png/mobile_offer_img1.png";
import { offerList, section2data } from "./helper";

const Section2 = ({ isMobile }) => {
  const [current, setCurrent] = useState(0);
  const handleToggle = (e) => {
    const { id } = e.target;
    if (id === current) {
      return;
    } else {
      return setCurrent(Number(id));
    }
  };
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
          <hr className="xs:w-[56%] sm:w-[57%] md:w-[58%] lg:w-[87%]" />
        </div>

        <div className="xs:block sm:block md:block lg:hidden">
          {offerList.map((item, index) => {
            return (
              <div
                className={index === 0 ? "mt-[40px] mb-[24px]" : "mb-[24px]"}
              >
                <div>
                  <img
                    src={laundry2}
                    alt=""
                    width="650px"
                    className="rounded-t-[16px]"
                  />
                </div>
                <div className="bg-[#FEF5EA] py-[20px] px-[20px] xs:rounded-b-[16px] sm:rounded-b-[16px] lg:rounded-[16px]">
                  <Title
                    $fontWeight="500"
                    className="xs:text-[17px] xs:leading-[21px] sm:text-[17px] md:text-[17px] lg:text-[22px] lg:leading-[30.8px]"
                  >
                    {item.title}
                  </Title>
                  <div className="pt-[8px] pb-[24px]">
                    <Text
                      $fontWeight="400"
                      $color="#536878"
                      className="xs:text-[15px] xs:leading-[21px] sm:text-[15px] md:text-[15px] lg:text-[17px] lg:leading-[23.8px]"
                    >
                      {item.content}
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
                    <FaArrowRight
                      style={{ color: "#FFA900", marginLeft: "8px" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:block">
          <div className={"flex flex-row justify-between py-[80px]"}>
            <div className="grow-0">
              {section2data.map((data, idx) => {
                return (
                  <div
                    className={
                      current === idx
                        ? "bg-[#FEF5EA] py-[20px] px-[20px] rounded-[16px] max-w-[430px] mb-[40px] transition ease-in-out delay-150 cursor-pointer"
                        : "pt-[8px] mb-[40px] px-[20px] max-w-[430px] transition ease-in-out delay-150 cursor-pointer"
                    }
                    onClick={(e) => handleToggle(e)}
                    id={idx}
                  >
                    <Title
                      $fontWeight="500"
                      $fontSize="22px"
                      $lineHeight="30.8px"
                      $maxW="fit-content"
                      style={{ pointerEvents: "none" }}
                    >
                      {data.title}
                    </Title>

                    {current === idx ? (
                      <>
                        {" "}
                        <Text
                          $fontSize="17px"
                          $lineHeight="23.8px"
                          $fontWeight="400"
                          $color="#536878"
                          $maxW="100%"
                          className="pt-[8px] pb-[24px] w-fit"
                        >
                          {data.content}
                        </Text>
                        <div className="flex items-center w-fit">
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
                            {data.ctaText}
                          </Text>
                          <FaArrowRight
                            style={{ color: "#FFA900", marginLeft: "8px" }}
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="relative">
              <div className="animate-blink before:rounded-[16px] before:block before:bg-[#00000020] before:absolute before:w-[100%] before:h-[90%]">
                <img
                  className="rounded-[16px]"
                  src={section2data[current].image}
                  alt=""
                  width="650px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
