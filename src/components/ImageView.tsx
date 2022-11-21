import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ImageViewContext } from "../contexts/ImageView";

function ImageView() {
  const { isExpanded, setIsExpanded, image, setImage } =
    useContext(ImageViewContext);

  return (
    <div className="fixed top-0 z-[1000] w-[100vw] h-[100vh] bg-transparent flex flex-col items-center justify-center">
      <div
        // style={{ backgroundImage: `url(${image})` }}
        className="w-[85%] h-[80%] object-fill relative rounded-lg  bg-gray-100 flex items-center justify-center"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-contain rounded-lg sm:object-fill"
        />
        <div
          onClick={() => setIsExpanded(false)}
          className="absolute -top-[20px] -right-[20px] w-[50px] h-[50px] rounded-[100%] bg-gray-200 flex items-center justify-center"
        >
          <FaPlus
            size={25}
            color="gray"
            onClick={() => setIsExpanded(false)}
            className="transform rotate-45"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageView;
