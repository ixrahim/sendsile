import React from "react";
import storesImg from "../../assets/svg/stores.svg";
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
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

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
              className="text-center"
              $fontSize="40px"
              $lineHeight="48px"
              $fontWeight="700"
            >
              Unlock the convenience of catering to loved ones
            </Title>
          </div>
          <div className="flex flex-row justify-center mb-12">
            <img src={storesImg} alt="stores available" />
          </div>
          <div className="grid grid-cols-6 py-12">
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
                maxW="335px"
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
                    $fontWeight="500"
                  >
                    Company
                  </Text>
                  <div>
                    {companyLinks.map((link) => {
                      return (
                        <a href={link.path} className="flex my-4">
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
                      <a href={link.path} className="flex my-4">
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
                      <a href={link.path} className="flex my-4">
                        <span className="text-base items-center font-medium gap-1 text-white cursor-pointer">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-12 justify-between">
            <div className="flex items-center">
              <div className="mr-[36px]">
                <Image src={footer_img1} alt="" />
              </div>
              <div>
                <Text $color="#fff" maxW="820px">
                  Lorem ipsum dolor sit amet consectetur. Sociis tincidunt
                  blandit sed feugiat ornare dictum cras. Adipiscing sit
                  pellentesque vehicula a viverra nullam risus. Congue elit
                  tincidunt id arcu nec mi massa. © Sendsile 2024. All Rights
                  Reserved.
                </Text>
              </div>
            </div>
            <div className="flex justify-center align-middle">
              <div className="flex py-[24px] px-[27px] bg-[#131618] border border-solid border-[#282C31] rounded-[10px]">
                <span className="pr-[16px]">
                  <FaInstagram />
                </span>
                <span className="pr-[16px]">
                  <FaFacebook />
                </span>
                <span className="pr-[16px]">
                  <FaXTwitter />
                </span>
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
      <div className="mt-[-100px]">
        <img src={footer_img2} alt="footer logo" />
      </div>
    </div>
  );
};

export default Footer;
