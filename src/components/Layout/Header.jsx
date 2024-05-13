import React from "react";
import logo from "../../assets/png/sendsile.png";
import menu_icon from "../../assets/png/menu_icon.png";
import _ from "lodash";
import { FaChevronDown } from "react-icons/fa6";
import { Button, Navbar } from "./helpers";

const Header = () => {
  const navLinks = [
    { path: "/", name: "Home", id: _.uniqueId("centered-link-") },
    {
      path: "/",
      name: "Services",
      id: _.uniqueId("centerd-link-"),
      action: "",
    },
    { path: "/", name: "Contacts", id: _.uniqueId("centerd-link-") },
  ];
  return (
    <div>
      <Navbar className="flex justify-between items-center fixed top-0 w-full bg-[#FFFCF7] z-10 xs:px-[16px] lg:px-[100px]">
        <div className="login_container">
          <img src={logo} alt="a logo" className="logo" />
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
        <div className="lg:hidden">
          <img src={menu_icon} alt="" width="32px" />
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:flex">
          <Button className="bg-primary">Login</Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
