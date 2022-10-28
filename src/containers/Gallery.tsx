import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "../components/CarouselItem";

function Gallery() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-start bg-white  pt-[2%] pb-[5%] box-border ">
      <h1 className="text-[#004a19] text-[1.9rem] font-bold self-start ml-[13%] mb-[2%]">
        GALLERY
      </h1>
      <Carousel
        className="relative w-full h-[88%]"
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            <div
              className={`absolute z-[100] right-[5%] top-[42%] min-w-[70px] min-h-[70px] w-[5vw] h-[5vw] cursor-pointer ${
                hasNext ? "bg-[#f2f2f2]" : "bg-transparent"
              } rounded-[100%] flex items-center justify-center `}
              onClick={hasNext ? clickHandler : () => null}
            >
              <FaChevronRight
                color={hasNext ? "#9e9e9e" : "transparent"}
                size={30}
              />
            </div>
          );
        }}
        renderArrowPrev={(clickHandler, hasPrev, label) => {
          return (
            <div
              onClick={hasPrev ? clickHandler : () => null}
              className={`absolute z-[100] left-[5%] top-[42%]  min-w-[70px] min-h-[70px] w-[5vw] h-[5vw] rounded-[100%] cursor-pointer ${
                hasPrev ? "bg-[#f2f2f2]" : "bg-transparent"
              } flex items-center justify-center`}
            >
              <FaChevronLeft
                color={hasPrev ? "#9e9e9e" : "transparent"}
                size={30}
              />
            </div>
          );
        }}
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </div>
  );
}

export default Gallery;
