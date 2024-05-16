import React from "react";
import storesImg from "../../assets/svg/stores.svg";
import store_mobile from "../../assets/png/store_mobile.png";
import footer_img1 from "../../assets/png/footer_heart.png";
import footer_img2 from "../../assets/png/footer-img2.png";
import {
  Text,
  FooterContainer,
  Title,
  Button,
  companyLinks,
  exploreLinks,
  contactLinks,
} from "./helpers";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";

const Image = styled.img`
  width: 69px;
  height: 54px;
`;

const Footer = () => {
  return (
    <div className="bg-[#191c1f]">
      <FooterContainer>
        <div className="container pt-12">
          <div className="max-w-[554px] mx-auto mb-7">
            <Title
              $color="#fff"
              className="text-center xs:text-[24px] sm:text-[24px] md:text-[24px] lg:text-[40px] xs:leading-[28px] md:leading-[28px] lg:leading-[48px]"
              $fontWeight="700"
            >
              Unlock the convenience of catering to loved ones
            </Title>
          </div>
          <div className="flex flex-row justify-center mb-12">
            <img
              src={store_mobile}
              alt="stores available"
              className="xs:block xs:w-[138px] sm:block sm:w-[138px] md:block md:w-[138px] lg:hidden cursor-pointer"
            />
            <img
              src={storesImg}
              alt="stores available"
              className="xs:hidden sm:hidden md:hidden lg:block cursor-pointer"
            />
          </div>
          <div
            className={
              "xs:flex sm:flex md:flex lg:grid xs:flex-col sm:flex-col md:flex-col lg:py-12"
            }
          >
            <div className="xs:block sm:block md:block lg:hidden">
              <div>
                <Title
                  className="col-span-2 text-left mb-[24px] mt-[48px]"
                  $color="#fff"
                  $fontSize="24px"
                  $lineHeight="31px"
                  $fontWeight="700"
                >
                  Ready when you are
                </Title>
              </div>
              <div className="mb-[24px]">
                <Text
                  $color="#fff"
                  $fontSize="15px"
                  $lineHeight="21px"
                  $fontWeight="500"
                >
                  Take care of your family, anywhere you are in the world.
                  Experience the peace that comes with ensuring your loved ones
                  are well catered for with Sendsile.
                </Text>
              </div>
              <div className="mb-[24px]">
                <Button
                  $borderRadius="32px"
                  $background="#202426"
                  $border="1px solid #74767E"
                  $maxW="fit-content"
                  $color="#fff"
                >
                  Try Sendsile today
                </Button>
              </div>
              <div className="grid grid-cols-2 text-white">
                <div className="col-span-1 mb-[40px]">
                  <Text
                    $color="#fff"
                    $fontSize="15px"
                    $lineHeight="21px"
                    $fontWeight="500"
                  >
                    Company
                  </Text>
                  <div>
                    {companyLinks.map((link) => {
                      return (
                        <a href={link.path} className="flex my-4" key={link.id}>
                          <span className="text-base items-center font-medium gap-1 text-white cursor-pointer">
                            {link.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-1">
                  <Text
                    $color="#fff"
                    $fontSize="15px"
                    $lineHeight="21px"
                    $fontWeight="500"
                  >
                    Explore
                  </Text>

                  {exploreLinks.map((link) => {
                    return (
                      <a href={link.path} className="flex my-4" key={link.id}>
                        <span className="text-base items-center font-medium gap-1 text-white cursor-pointer">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
                <div className="col-span-1">
                  <Text
                    $color="#fff"
                    $fontSize="15px"
                    $lineHeight="21px"
                    $fontWeight="500"
                  >
                    Contact us
                  </Text>
                  {contactLinks.map((link) => {
                    return (
                      <a href={link.path} className="flex my-4" key={link.id}>
                        <span className="text-base items-center font-medium gap-1 text-white cursor-pointer">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center mt-[55px]">
                <div className="mr-[36px]">
                  <Image
                    src={footer_img1}
                    alt=""
                    width="40px"
                    height="40px"
                    className="xs:block sm:block md:hidden lg:hidden w-[40px] object-contain"
                  />
                  <Image
                    src={footer_img1}
                    alt=""
                    width="40px"
                    height="40px"
                    className="xs:hidden sm:hidden md:block lg:block object-contain"
                  />
                </div>
                <div>
                  <Text $color="#fff">
                    Lorem ipsum dolor sit amet consectetur. Sociis tincidunt
                    blandit sed feugiat ornare dictum cras. Adipiscing sit
                    pellentesque <br /> vehicula a viverra nullam risus. Congue
                    elit tincidunt id arcu nec mi massa. © Sendsile 2024. All
                    Rights Reserved.
                  </Text>
                </div>
              </div>
              <div className="pt-[24px]">
                <div className="flex py-[24px] px-[27px] bg-[#131618] border border-solid border-[#282C31] rounded-[10px] w-fit">
                  <span className="pr-[16px]">
                    <BsInstagram />
                  </span>
                  <span className="pr-[16px]">
                    <FaFacebookF />
                  </span>
                  <span className="pr-[16px]">
                    <BsTwitterX />
                  </span>
                  <span>
                    <BsLinkedin />
                  </span>
                </div>
              </div>
            </div>

            <div className="xs:hidden sm:hidden md:hidden lg:grid lg:grid-cols-6">
              <div className="col-span-2">
                <Title
                  className="col-span-2 text-left mb-5"
                  $color="#fff"
                  $fontSize="36px"
                  $lineHeight="48px"
                  $fontWeight="700"
                >
                  Ready when <br /> you are
                </Title>
                <Text
                  $color="#fff"
                  $fontSize="15px"
                  $lineHeight="21px"
                  $fontWeight="500"
                  className="col-span-2 text-left mb-4"
                  $maxW="335px"
                >
                  Take care of your family, anywhere you are in the world.
                  Experience the peace that comes with ensuring your loved ones
                  are well catered for with Sendsile.
                </Text>
                <Button
                  $borderRadius="32px"
                  $background="#202426"
                  $border="1px solid #74767E"
                  $maxW="fit-content"
                  $color="#fff"
                >
                  Try Sendsile today
                </Button>
              </div>
              <div></div>
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-white">
                  <div className="col-span-1">
                    <Text
                      $color="#fff"
                      $fontSize="15px"
                      $lineHeight="21px"
                      $fontWeight="700"
                    >
                      Company
                    </Text>
                    <div>
                      {companyLinks.map((link) => {
                        return (
                          <a
                            href={link.path}
                            className="flex my-4"
                            key={link.id}
                          >
                            <span className="text-[15px] leading-[21px] items-center font-[400] gap-1 text-[#E5E9EE] cursor-pointer">
                              {link.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <Text
                      $color="#fff"
                      $fontSize="15px"
                      $lineHeight="21px"
                      $fontWeight="700"
                    >
                      Explore
                    </Text>

                    {exploreLinks.map((link) => {
                      return (
                        <a href={link.path} className="flex my-4" key={link.id}>
                          <span className="text-[15px] leading-[21px] items-center font-[400] gap-1 text-[#E5E9EE] cursor-pointer">
                            {link.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                  <div className="col-span-1">
                    <Text
                      $color="#fff"
                      $fontSize="15px"
                      $lineHeight="21px"
                      $fontWeight="700"
                    >
                      Contact us
                    </Text>
                    {contactLinks.map((link) => {
                      return (
                        <a href={link.path} className="flex my-4" key={link.id}>
                          <span className="text-[15px] leading-[21px] items-center font-[400] gap-1 text-[#E5E9EE] cursor-pointer">
                            {link.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-row mt-[55px] xs:hidden sm:hidden md:hidden lg:flex justify-between">
              <div className="flex items-center flex-row">
                <div className="mr-[36px]">
                  <Image
                    src={footer_img1}
                    alt=""
                    width="40px"
                    height="40px"
                    className="xs:block sm:block md:hidden lg:hidden w-[40px] object-contain"
                  />
                  <Image
                    src={footer_img1}
                    alt=""
                    width="40px"
                    height="40px"
                    className="xs:hidden sm:hidden md:block lg:block object-contain"
                  />
                </div>
                <div>
                  <Text $color="#fff">
                    Lorem ipsum dolor sit amet consectetur. Sociis tincidunt
                    blandit sed feugiat ornare dictum cras. Adipiscing sit
                    pellentesque <br /> vehicula a viverra nullam risus. Congue
                    elit tincidunt id arcu nec mi massa. © Sendsile 2024. All
                    Rights Reserved.
                  </Text>
                </div>
              </div>
              <div className="">
                <div className="flex py-[24px] px-[27px] bg-[#131618] border border-solid border-[#282C31] rounded-[10px] w-fit">
                  <span className="pr-[16px]">
                    <BsInstagram />
                  </span>
                  <span className="pr-[16px]">
                    <FaFacebookF />
                  </span>
                  <span className="pr-[16px]">
                    <BsTwitterX />
                  </span>
                  <span>
                    <BsLinkedin />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
      <div className="mt-[35px]">
        <img src={footer_img2} alt="footer logo" />
      </div>
    </div>
  );
};

export default Footer;
