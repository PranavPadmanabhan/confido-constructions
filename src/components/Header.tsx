import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/LOGO_1.svg";
import { FaBars } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import home from "../assets/02.jpg";
import home2 from "../assets/01.jpg";
import bg from "../assets/PERIYARAM.jpg"
import { Spinner } from "react-bootstrap";
import { LoaderContext } from "../contexts/LoadingContext";
import { images } from "../constants/constants";
// import Carousel from 'react-bootstrap/Carousel';


function Header() {
  const { loading, setLoading } = useContext(LoaderContext);

  const cacheImages = async () => {
    setLoading(true);
    const promises = images.map((src) => {
      return new Promise<void>(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises).then(() => {
      cacheImage();
    });
    setLoading(false);
  };

  const cacheImage = async () => {
    setLoading(true);
    await new Promise<void>(function (resolve, reject) {
      const img = new Image();
      img.src = home;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
    setLoading(false);
  };

  useEffect(() => {
    cacheImages();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${home})`,
      }}
      className={`relative h-[95vh] w-full ${
        !loading ? "bg-gray-200" : "bg-white"
      } bg-no-repeat bg-cover bg-center ${
        !loading ? "shadow-header" : "shadow-none"
      } pt-[3%] box-border before:content-[''] before:absolute before:w-full before:h-full before:top-0 ${
        !loading ? "before:bg-medium-opacity" : "before:bg-white"
      } backdrop-brightness-75 backdrop-contrast-125 flex flex-col items-center justify-start`}
    >
      <div className="w-full h-[15%] sm:h-[20%] flex items-center justify-between px-[8%] sm:px-[12%] box-border ">
        <img src={logo} alt="" className="z-[100] w-[35%]  sm:w-[18%]" />
        <div className="z-[100] w-[60%] h-full flex items-center justify-end sm:justify-between">
          <span className="hidden sm:block text-white text-[1.2rem] font-light">
            Home
          </span>
          <span className="hidden sm:block text-white text-[1.2rem] font-light">
            About Us
          </span>
          <span className="hidden sm:block text-white text-[1.2rem] font-light">
            Services
          </span>
          <span className="hidden sm:block text-white text-[1.2rem] font-light">
            Gallery
          </span>
          <span className="hidden sm:block text-white text-[1.2rem] font-light">
            Contact Us
          </span>
          <FaBars className="z-[100]" color="white" size={29} />
        </div>
      </div>
      <div className="w-full min-w-[30vw] h-[30vh] sm:h-[50vh]  flex flex-row items-center justify-center sm:justify-between px-[8%] sm:pl-[12%] box-border mt-[15%] sm:mt-0">
        <p className="z-[100] text-white text-[7.5vw] sm:text-[2.5rem] font-light max-w-[100%] sm:max-w-[45%] text-center sm:text-left tracking-wider">
          YOUR MOST
          <br /> <strong className="font-medium">TRUSTED</strong> BUILDING
          <br /> <strong className="font-medium">PARTNER</strong>
        </p>
        <Carousel 
          className="hidden  sm:flex   w-[50%] min-w-[300px] h-[20vh] self-center  justify-evenly items-center  py-6  box-border"
          autoPlay={true}
          
        
          infiniteLoop={true}
          showArrows={false}
          dynamicHeight={true}
          showStatus={false}
          swipeable={true}
          width={1900}
          showIndicators={true}
          
        >
          <p className="text-white font-light pb-10 box-border  ">
            "Home is where you feel loved,
            <br /> appreciated and safe"
          </p>
          <p className="text-white font-light pb-10 box-border  ">
            "Home is where you feel loved,
            <br /> appreciated and safe"
          </p>
          <p className="text-white font-light pb-10 box-border  ">
            "Home is where you feel loved,
            <br /> appreciated and safe"
          </p>
          <p className="text-white font-light pb-10 box-border">
            "Home is where you feel loved,
            <br /> appreciated and safe"
          </p>
        </Carousel>
      </div>
      <div className="w-full h-[30%] sm:h-[23%] flex flex-col sm:flex-row items-center justify-evenly sm:justify-between px-[8%] sm:px-[12%] box-border mt-[15%] sm:mt-0 ">
        <p className="z-[100] hidden sm:flex text-white font-light text-[7vw] text-center sm:text-[2rem] tracking-wider">
          BUILD&nbsp; YOUR &nbsp;
          <strong className="font-medium">DREAM HOME</strong>
          &nbsp; WITH&nbsp; US
        </p>
        <p className="z-[100] block sm:hidden text-white font-light text-[7vw] text-center sm:text-[2rem] tracking-wider">
          BUILD YOUR <strong className="font-medium">DREAM HOME</strong>
          &nbsp;WITH US
        </p>
        <button className="z-[100] bg-green-accent px-8  sm:px-6 py-2 rounded-[5px] text-white font-light">
          BUILD YOUR HOME
        </button>
      </div>
    </div>
  );
}

export default Header;
