import React, { useState } from "react";
import { Text, Title } from "../Layout/helpers";
import { FaArrowRight } from "react-icons/fa";
import laundry from "../../assets/png/laundry.png";
import laundry2 from "../../assets/png/mobile_offer_img1.png";
import { offerList, section2data } from "./helper";

const Section2 = ({ isMobile }) => {
  const [current, setCurrent] = useState(0);
  const handleToggle = (e) => {
    const { id } = e.target;
    if (id === current) {
      return;
    } else {
      setCurrent(Number(id));
    }

    console.log(current);
    return;
  };
  console.log(section2data[current].image);
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
          <hr style={{ width: isMobile ? "56%" : "87%" }} />
        </div>

        {isMobile ? (
          <>
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
                  <div
                    className={
                      isMobile
                        ? "bg-[#FEF5EA] py-[20px] px-[20px] rounded-b-[16px]"
                        : "bg-[#FEF5EA] py-[20px] px-[20px] rounded-[16px]"
                    }
                  >
                    <Title
                      $fontWeight="500"
                      $fontSize="22px"
                      $lineHeight="30.8px"
                    >
                      {item.title}
                    </Title>
                    <div className="pt-[8px] pb-[24px]">
                      <Text
                        $fontSize="17px"
                        $lineHeight="23.8px"
                        $fontWeight="400"
                        $color="#536878"
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
          </>
        ) : (
          <>
            <div className={"flex flex-row justify-between py-[80px]"}>
              <div className="grow-0">
                {section2data.map((data, idx) => {
                  return (
                    <div
                      className={
                        current === idx
                          ? "bg-[#FEF5EA] py-[20px] px-[20px] rounded-[16px] max-w-[430px] mb-[40px] transition ease-in-out delay-200"
                          : "pt-[8px] mb-[40px] px-[20px] max-w-[430px] transition ease-in-out delay-200"
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
          </>
        )}
      </div>
    </div>
  );
};

export default Section2;
