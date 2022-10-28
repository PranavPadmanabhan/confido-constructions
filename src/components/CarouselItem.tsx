import React from "react";
import home1 from "../assets/01.jpg";
import home2 from "../assets/02.jpg";

type props = {
  image1?: any;
  image2?: any;
  image3?: any;
  title?: any;
};

function CarouselItem({ image1, image2, image3 }: props) {
  return (
    <div className="w-full h-[84vh] bg-transparent flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${home2})` }}
        className=" h-[93%] w-[42%] bg-transparent rounded-3xl mr-[3%] bg-no-repeat bg-center bg-cover shadow-carousel-item flex flex-col items-start backdrop-brightness-75 justify-end p-[2%] box-border"
      >
        <p className="text-white text-[1.4rem] max-w-[50%] text-left">
          CONTEMPORARY STYLE 3200 SQ.FT
        </p>
      </div>
      <div className="w-[28%] h-[93%] flex flex-col items-center justify-between bg-transparent ">
        <div
          style={{ backgroundImage: `url(${home1})` }}
          className="h-[48%] w-full rounded-3xl bg-transparent bg-no-repeat bg-center bg-cover backdrop-brightness-75"
        ></div>
        <div
          style={{ backgroundImage: `url(${home1})` }}
          className="h-[48%] w-full rounded-3xl bg-transparent bg-no-repeat bg-center bg-cover backdrop-brightness-75"
        ></div>
      </div>
    </div>
  );
}

export default CarouselItem;
