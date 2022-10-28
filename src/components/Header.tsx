import React from "react";
import logo from "../assets/LOGO_1.svg";
import { FaBars } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

function Header() {
  return (
    <div className="relative h-[95vh] w-full bg-gray-200 bg-headerBG bg-no-repeat bg-cover bg-center shadow-header pt-[3%] box-border before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:bg-medium-opacity backdrop-brightness-75 backdrop-contrast-125">
      <div className="w-full h-[20%] flex items-center justify-between px-[12%] box-border">
        <img src={logo} alt="" className="z-[100] w-[18%]" />
        <div className="z-[100] w-[50%] h-full flex items-center justify-between">
          <span className="text-white text-[1.2rem] font-light">Home</span>
          <span className="text-white text-[1.2rem] font-light">About Us</span>
          <span className="text-white text-[1.2rem] font-light">Services</span>
          <span className="text-white text-[1.2rem] font-light">Gallery</span>
          <span className="text-white text-[1.2rem] font-light">
            Contact Us
          </span>
          <FaBars className="z-[100]" color="white" size={29} />
        </div>
      </div>
      <div className="w-full h-[50vh] flex items-center justify-between px-[12%] box-border">
        <p className="z-[100] text-white text-[2.5rem] font-light max-w-[45%] text-left tracking-wider">
          YOUR MOST
          <br /> <strong className="font-medium">TRUSTED</strong> BUILDING
          <br /> <strong className="font-medium">PARTNER</strong>
        </p>
        <Carousel
          className="w-[40%] h-[20%] self-center"
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          dynamicHeight={true}
          showStatus={false}
          swipeable={true}
        >
          <div className="h-[15vh] w-[100%] bg-transparent">
            <p className="text-semi-transparent text-[1.2rem] font-normal">
              "Home is where you feel loved,
              <br /> appreciated and safe"
            </p>
          </div>
          <div className="h-[15vh] w-[100%] bg-transparent">
            <p className="text-semi-transparent text-[1.2rem] font-normal">
              "Home is where you feel loved,
              <br /> appreciated and safe"
            </p>
          </div>
          <div className="h-[15vh] w-[100%] bg-transparent">
            <p className="text-semi-transparent text-[1.2rem] font-normal">
              "Home is where you feel loved,
              <br /> appreciated and safe"
            </p>
          </div>
        </Carousel>
      </div>
      <div className="w-full h-[23%] flex items-center justify-between px-[12%] box-border">
        <p className="z-[100] text-white font-light text-[2rem] tracking-wider">
          BUILD&nbsp; YOUR <strong className="font-medium">DREAM HOME</strong>
          &nbsp; WITH&nbsp; US
        </p>
        <button className="z-[100] bg-green-800 px-6 py-2 rounded-[5px] text-white font-light">
          BUILD YOUR HOME
        </button>
      </div>
    </div>
  );
}

export default Header;
