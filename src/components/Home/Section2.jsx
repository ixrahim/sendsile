import React from "react";
import { Text, Title } from "../Layout/helpers";
import { FaArrowRight } from "react-icons/fa";
import laundry from "../../assets/png/laundry.png";
import laundry2 from "../../assets/png/mobile_offer_img1.png";
import { offerList } from "./helper";

const Section2 = ({ isMobile }) => {
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
              <div>
                <div className="bg-[#FEF5EA] py-[20px] px-[20px] rounded-[16px]">
                  <Title
                    $fontWeight="500"
                    $fontSize="22px"
                    $lineHeight="30.8px"
                  >
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
                    <FaArrowRight
                      style={{ color: "#FFA900", marginLeft: "8px" }}
                    />
                  </div>
                </div>

                <div>
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
              </div>
              <div>
                <img src={laundry} alt="" width="650px" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Section2;
