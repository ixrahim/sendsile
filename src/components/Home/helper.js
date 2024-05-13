import styled from "styled-components";
import _ from "lodash";
import card_img1 from "../../assets/png/card_img1.png";
import card_img2 from "../../assets/png/card_img2.png";
import card_img3 from "../../assets/png/card_img3.png";
import bowl_icon from "../../assets/png/bowl_icon.png";
import clock_icon from "../../assets/png/clock_icon.png";
import snow_icon from "../../assets/png/snow_icon.png";
import laundry from "../../assets/png/laundry.png";
import laundry2 from "../../assets/png/mobile_offer_img1.png";
import laundry3 from "../../assets/png/laundry3.png";
import laundry4 from "../../assets/png/laundry4.png";

const Hero = styled.div`
  padding-top: 200px;
`;

const accordionData = [
  {
    id: _.uniqueId("accordion-"),
    title: "What services does Sendsile offer? ",
    content: `Sendsile is a care platform that allows you to send a variety of items, including food, health products, and laundry services, to your loved ones in Africa. Our mission is to simplify the process of caring for your family and friends, no matter the distance.`,
  },
  {
    id: _.uniqueId("accordion-"),
    title: "How does Sendsile service work? ",
    content: `On our platform, you can curate a personalized list of items you wish to send, from farm fresh food to essential health supplies or freshly laundered clothes. We'll then provide you with the prices for your selected items, and upon confirmation, you can securely make your payment. Your order will be processed promptly, ensuring your loved ones receive their items conveniently.`,
  },
  {
    id: _.uniqueId("accordion-"),
    title: "How do I pay for the services on Sendsile? ",
    content: `Sendsile will offer multiple convenient payment options, including debit cards and mobile wallets with payments made in dollars or pounds. Choose the payment method that suits you best during the payment process.`,
  },
  {
    id: _.uniqueId("accordion-"),
    title: "How can I track my orders?",
    content: `Once you are done signing up and logging in, you can track order status in real-time through our website after placing the order. You'll receive notifications at every stage of the delivery process, keeping you informed until your order reaches you.`,
  },
  {
    id: _.uniqueId("accordion-"),
    title: "What should I do if I encounter an issue with my order?",
    content: `If you encounter any issues with your order, such as late delivery or incorrect items, please contact our customer support team immediately. We are here to assist you and resolve any concerns you may have.`,
  },
  {
    id: _.uniqueId("accordion-"),
    title: "What delivery areas are covered by Sendsile? ",
    content: `Currently, our delivery services cover Nigeria, specifically Lagos State. However, we have plans to extend our reach to additional regions in the near future.`,
  },
];

const offerList = [
  {
    title: "Quality laundry services",
    content: `Impeccable laundry services to keep your loved ones fresh and comfortable.`,
  },
  {
    title: "Farm fresh delights",
    content:
      "Fresh produce directly from local vendors, ensuring quality meals for your loved ones.",
  },
  {
    title: "Healthcare plans",
    content:
      "Ensure your loved ones maintain a lifestyle anchored in optimal health and well-being.",
  },
];

const carouselData = [
  {
    image: card_img1,
    title: "Nourish your loved ones with the diversity they crave.",
    icon: bowl_icon,
  },
  {
    image: card_img2,
    title: "Diverse cross border payment options.",
    icon: snow_icon,
  },
  {
    image: card_img3,
    title: "Swift service delivery to your loved ones.",
    icon: clock_icon,
  },
];

const section2data = [
  {
    index: 0,
    title: "Quality laundry services",
    content: `Impeccable laundry services to keep your loved ones fresh and comfortable.`,
    ctaText: "Learn more",
    cta: () => {},
    image: laundry,
  },
  {
    index: 1,
    title: "Farm fresh delights",
    content: `Impeccable laundry services to keep your loved ones fresh and comfortable.`,
    ctaText: "Learn more",
    cta: () => {},
    image: laundry3,
  },
  {
    index: 2,
    title: "Healthcare plans",
    content: `Impeccable laundry services to keep your loved ones fresh and comfortable.`,
    ctaText: "Learn more",
    cta: () => {},
    image: laundry4,
  },
];

export { Hero, accordionData, offerList, carouselData, section2data };
