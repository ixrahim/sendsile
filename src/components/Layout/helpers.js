import styled from "styled-components";
import _ from "lodash";

const Title = styled.h1`
  font-size: ${(props) => props.$fontSize || "32px"};
  font-weight: ${(props) => props.$fontWeight || "500"};
  line-height: ${(props) => props.$lineHeight || "38.4px"};
  color: ${(props) => props.$color || "#00070C"};
  max-width: ${(props) => props.$maxW || "100%"};
`;

const Text = styled.p`
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  line-height: ${(props) => props.$lineHeight || "16px"};
  color: ${(props) => props.$color || "#000"};
  width: ${(props) => props.$width || "fit-content"};
  text-decoration: ${(props) => (props.$underline ? "underline" : "")};
  max-width: ${(props) => props.$maxW || "100%"};
  cursor: ${(props) => props.$cursor || "none"};
  font-style: ${(props) => (props.$italic ? "italic" : "")};
`;

const FooterContainer = styled.footer`
  background: #191c1f;
  color: #fff;
  width: 100%;
`;

const Button = styled.button`
  padding: ${(props) => props.$padding || "10px 42px"};
  background: ${(props) => props.$background || "#fff"};
  border-radius: ${(props) => props.$borderRadius || "32px"};
  color: ${(props) => props.$color || "#000"};
  border: ${(props) => props.$border || "1px solid #5f5f5f"};
  max-width: ${(props) => props.$maxW || "126px"};
  margin: ${(props) => props.$margin || "0px 0px"};
  font-size: ${(props) => props.$fontSize || "18px"};
  font-weight: ${(props) => props.$fontWeight || "500"};
  line-height: ${(props) => props.$lineHeight || "30px"};
`;
const Navbar = styled.nav`
  height: 76px;
`;

const Image = styled.img`
  width: ${(props) => props.$width || ""};
  height: ${(props) => props.$height || ""};
`;

// copy
const companyLinks = [
  { name: "Vendor", id: _.uniqueId("footer-links"), path: "/" },
  { name: "FAQs", id: _.uniqueId("footer-links"), path: "/" },
  { name: "Privacy Policy", id: _.uniqueId("footer-links"), path: "/" },
  { name: "Terms of Use", id: _.uniqueId("footer-links"), path: "/" },
];
const exploreLinks = [
  { name: "Laundry", id: _.uniqueId("footer-links"), path: "/" },
  { name: "Groceries", id: _.uniqueId("footer-links"), path: "/" },
  { name: "Healthcare", id: _.uniqueId("footer-links"), path: "/" },
];
const contactLinks = [
  { name: "+234 801 234 5678", id: _.uniqueId("footer-links"), path: "/" },
  { name: "+234 801 234 5678", id: _.uniqueId("footer-links"), path: "/" },
  { name: "info@sendsile.com", id: _.uniqueId("footer-links"), path: "/" },
];

export {
  Title,
  Text,
  FooterContainer,
  Button,
  Navbar,
  companyLinks,
  exploreLinks,
  contactLinks,
  Image,
};
