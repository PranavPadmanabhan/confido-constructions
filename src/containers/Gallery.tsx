import React, { useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "../components/CarouselItem";
import { ImageViewContext } from "../contexts/ImageView";
import ImageView from "../components/ImageView";
import { images } from "../constants/constants";

function Gallery() {
  const { isExpanded, setIsExpanded } = useContext(ImageViewContext);
  const length =
    window.innerWidth < 600 ? images.length : (images.length - 2) / 3;

  console.log(length);

  return (
    <div id="gallery" className="relative w-full h-[50vh] sm:h-[100vh] flex flex-col items-center justify-start bg-white pt-0 sm:pt-[2%] pb-[5%] box-border ">
      <h1 className="text-[#004a19] text-[1.9rem] font-bold self-start ml-[13%] mb-[2%] mt-[2%] sm:mt-0 tracking-widest">
        GALLERY
      </h1>
      <Carousel
        className="carousel2 relative w-full h-[100%] sm:h-[88%]"
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        swipeable={false}
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            <div
              className={`absolute z-[100] right-[4%] sm:right-[5%] top-[38%] sm:top-[42%] min-w-[45px] min-h-[45px] sm:min-w-[70px] sm:min-h-[70px] w-[5vw] h-[5vw] cursor-pointer ${
                hasNext ? "bg-[#f2f2f2]" : "bg-transparent"
              } rounded-[100%] flex items-center justify-center `}
              onClick={hasNext ? clickHandler : () => null}
            >
              <FaChevronRight
                color={hasNext ? "#9e9e9e" : "transparent"}
                size={window.innerWidth < 600 ? 24 : 30}
              />
            </div>
          );
        }}
        renderArrowPrev={(clickHandler, hasPrev, label) => {
          return (
            <div
              onClick={hasPrev ? clickHandler : () => null}
              className={`absolute z-[100] left-[4%] sm:left-[5%] top-[38%] sm:top-[42%]  min-w-[45px] min-h-[45px] sm:min-w-[70px] sm:min-h-[70px] w-[5vw] h-[5vw] rounded-[100%] cursor-pointer ${
                hasPrev ? "bg-[#f2f2f2]" : "bg-transparent"
              } flex items-center justify-center`}
            >
              <FaChevronLeft
                color={hasPrev ? "#9e9e9e" : "transparent"}
                size={window.innerWidth < 600 ? 24 : 30}
              />
            </div>
          );
        }}
      >
        {Array(length)
          .fill("")
          .map((_, index) => {
            console.log(index);
            return (
              <CarouselItem
                title={"CONTEMPORARY STYLE 3200 SQ.FT"}
                image1={images[index]}
                image2={index - 2 < images.length ? images[index + 1] : null}
                image3={index - 2 < images.length ? images[index + 2] : null}
              />
            );
          })}
      </Carousel>
      {isExpanded && <ImageView />}
    </div>
  );
}

export default Gallery;
