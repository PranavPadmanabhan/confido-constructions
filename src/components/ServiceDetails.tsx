import React from "react";

type props = {
  title: string;
  src: any;
  description: string;
};

function ServiceDetails({ title, description, src }: props) {
  return (
    <div className="text-white w-full flex flex-col items-center justify-start">
      <img src={src} alt="" className="w-[20%] min-w-[5vw]" />
      <h1 className="max-w-[30%] min-w-[9vw] my-2 text-center font-medium">
        {title}
      </h1>
      <p className="max-w-[70%] text-[0.6rem] text-center">{description}</p>
    </div>
  );
}

export default ServiceDetails;
