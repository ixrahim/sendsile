import React, { useEffect } from "react";
import "./Carousel.css";
import EachCarousel from "./eachCarousel";

const Carousel = ({ context }) => {
  useEffect(() => {
    let sub = false;

    if (sub) {
      const track = document.querySelector(".carousel__track");

      const slides = Array.from(track.children);
      // const dotsNav = document.querySelector(".carousel__nav");
      // const dots = Array.from(dotsNav.children);
      const slideSize = slides[0].getBoundingClientRect();
      const slideWidth = slideSize.width;
      const setSlidePosition = (slide, idx) => {
        slide.style.left = slideWidth * idx + "px";
      };
      slides.forEach(setSlidePosition);

      const moveSlide = () => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const amountToMove = nextSlide.style.left;
        track.style.transform = "translateX(-" + amountToMove + ")";
        currentSlide.classList.remove(".current-slide");
        nextSlide.classList.add("current-slide");
      };

      setInterval(moveSlide, 2000);
    }
    return () => {
      sub = false;
    };
  }, []);
  return (
    <div className="">
      <div className="carousel">
        {/* <button className="carousel__button"></button> */}
        <div className="carousel__track-container">
          <ul className="carousel__track">
            <li className="carousel__slide current-slide">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {context.map((item, i) => {
                  return <EachCarousel key={i} item={item} isNews={false} />;
                })}
              </div>
            </li>
          </ul>
        </div>
        {/* <button className="carousel__button"></button> */}
        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
