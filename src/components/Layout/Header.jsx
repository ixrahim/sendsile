import React, { useEffect, useState } from "react";
import logo from "../../assets/png/sendsile.png";
import menu_icon from "../../assets/png/menu_icon.png";
import _ from "lodash";
import { FaChevronDown } from "react-icons/fa6";
import { Button, Navbar } from "./helpers";
import blur from "../../assets/png/navbar_blur.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/", name: "Home", id: _.uniqueId("centered-link-") },
    {
      path: "#",
      name: "Services",
      id: _.uniqueId("centerd-link-"),
      action: "",
    },
    { path: "/", name: "Contacts", id: _.uniqueId("centerd-link-") },
  ];
  const handleScroll = () => {};
  useEffect(() => {
    let sub;
    sub = true;

    if (sub) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sub = false;
    };
  });

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className="flex justify-center relative">
      <div
        className={`bg-white w-full z-[100] fixed top-[130px] container transition-all py-4`}
        style={{
          height: isOpen ? "220px" : "0",
          top: isOpen ? "76px" : "-300px",
        }}
      >
        {navLinks.map((link, idx) => {
          return (
            <a
              href={link.path}
              className={`${
                idx === 1 ? "flex items-center gap-1 py-4" : "py-4 flex"
              }`}
              key={link.id}
            >
              <span>{link.name}</span>
              {idx === 1 && <FaChevronDown width="159px" height="29px" />}
            </a>
          );
        })}
      </div>
      <img src={blur} alt="blurred" className="absolute" />
      <Navbar className="flex justify-between items-center fixed top-0 w-full  z-10 xs:px-[16px] lg:px-[100px] backdrop-blur-sm container">
        <div className="login_container">
          <img src={logo} alt="a logo" className="logo cursor-pointer" />
        </div>
        <div className="xs:hidden md:hidden lg:flex">
          {navLinks.map((link, idx) => {
            return (
              <a
                href={link.path}
                className="text-white flex mx-4"
                key={link.id}
              >
                <span
                  className="text-base items-center font-[500] gap-1 text-[#36454F]"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "22.4px",
                  }}
                >
                  {link.name}
                  {idx === 1 && <FaChevronDown width="159px" height="29px" />}
                </span>
              </a>
            );
          })}
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => handleToggleMenu()}
        >
          <img
            src={menu_icon}
            alt=""
            width="32px"
            className="pointer-events-none"
          />
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:flex">
          <Button
            className="bg-primary"
            $fontSize="15px"
            $lineHeight="21px"
            $fontWeight="700"
          >
            Login
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
