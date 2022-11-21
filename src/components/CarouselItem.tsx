import React, { useContext, useState } from "react";
import home1 from "../assets/01.jpg";
import home2 from "../assets/02.jpg";
import { ImageViewContext } from "../contexts/ImageView";

type props = {
  image1?: any;
  image2?: any;
  image3?: any;
  title: string;
};

function CarouselItem({ image1, image2, image3, title }: props) {
  const width = title.length < 30 ? "max-w-[50%]" : "max-w-[85%]";
  console.log(title.length);

  const { isExpanded, setIsExpanded, image, setImage } =
    useContext(ImageViewContext);
  return (
    <div className="w-full sm:mt-0 -mt-[15%] h-[60vh] sm:h-[84vh] bg-transparent flex items-center justify-center">
      <div
        onClick={() => {
          setImage(home2);
          setIsExpanded(true);
        }}
        style={{ backgroundImage: `url(${home2})` }}
        className="h-[65%] sm:h-[93%] w-[80%] sm:w-[42%] bg-transparent rounded-3xl mr-0 sm:mr-[3%] bg-no-repeat bg-center bg-cover shadow-carousel-item flex flex-col items-start backdrop-brightness-75 justify-end p-[5%] sm:p-[2%] box-border"
      >
        <p
          className={`text-white text-[4vw] sm:text-[1.4rem] ${width} text-left`}
        >
          {title}
        </p>
      </div>
      <div className="w-[28%] h-[93%] hidden sm:flex flex-col items-center justify-between bg-transparent ">
        <div
          onClick={() => {
            setImage(home1);
            setIsExpanded(true);
          }}
          style={{ backgroundImage: `url(${home1})` }}
          className="h-[48%] w-full rounded-3xl bg-transparent bg-no-repeat bg-center bg-cover backdrop-brightness-75"
        ></div>
        <div
          onClick={() => {
            setImage(home1);
            setIsExpanded(true);
          }}
          style={{ backgroundImage: `url(${home1})` }}
          className="h-[48%] w-full rounded-3xl bg-transparent bg-no-repeat bg-center bg-cover backdrop-brightness-75"
        ></div>
      </div>
    </div>
  );
}

export default CarouselItem;
