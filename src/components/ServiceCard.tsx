import React from "react";
import home from "../assets/02.jpg";

type props = {
  data: any;
  image: any;
};

function ServiceCard({ data, image }: props) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative cursor-pointer overflow-hidden w-full min-h-[30vh] h-full max-h-[32vh] bg-white  bg-cover bg-no-repeat rounded-2xl shadow-service-img flex flex-col items-center justify-center text-white text-[1.3rem] backdrop-brightness-75`}
    >
      <div className="absolute top-0  bg-avg-opacity z-[100] w-full h-full flex items-center justify-center">
      <p className="tracking-widest text-center max-w-[60%]">{data}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
