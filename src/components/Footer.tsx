import React from "react";
import logo from "../assets/LOGO_1.svg";
import whatsapp from "../assets/wht.svg";
import instagram from "../assets/inst.svg";
import linkedin from "../assets/link.svg";
import facebook from "../assets/fb.svg";
import home from "../assets/02.jpg";

function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${home})` }}
      className="relative w-full h-[90vh]  bg-white bg-no-repeat bg-center bg-cover shadow-header before:content-[''] before:absolute before:w-full before:h-full before:bg-medium-opacity backdrop-brightness-75 flex flex-col items-center justify-center"
    >
      <div className="z-[100] w-[85%] h-[85%] bg-transparent flex flex-col items-center justify-start">
        <div className="w-full h-[80%] flex flex-col sm:flex-row items-center justify-start sm:justify-center">
          <div className="w-[90%] sm:w-[50%] h-[60%] sm:h-full flex flex-col items-center sm:items-start justify-start sm:justify-between p-[3%] box-border ">
            <img src={logo} alt="" className="w-[50%] sm:w-[45%]" />
            <h1 className="text-white font-light text-[6vw] sm:text-[1.1rem] mt-[5%] mb-[6%] sm:mb-0 sm:-mt-[20%]">
              Confido means "TRUST"
            </h1>
            <p className="text-white font-light text-[4.3vw] sm:text-[1.1rem] max-w-[90%] text-center sm:text-left sm:max-w-[60%]">
              Get in touch with Confido to learn more about our services.
            </p>
          </div>
          <div className="w-[90%] sm:w-[50%] h-full flex flex-col items-center sm:items-end justify-start p-[2%] pt-[5%] box-border">
            <h1 className="text-white font-medium text-[5vw] sm:text-[1.75rem]">
              CONTACT US
            </h1>
            <div className="w-[30%] sm:w-[20%] h-[1px] bg-white my-3" />
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              +91 98476 98493
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              +91 96567 09729
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem] my-3">
              confidoconstructions@gmail.com
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              Paleri building,
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              Near Kozhumthumpadi temple
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              P.O Vellur, Payyanur
            </span>
            <span className="text-white font-light text-[4vw] sm:text-[1.1rem]">
              670 307
            </span>
          </div>
        </div>
        <div className="w-[95%] h-[1px] bg-white my-5" />
        <div className="w-[95%] h-[20%] flex flex-col items-center sm:items-end justify-center ">
          <h1 className="text-white font-light text-[1.1rem] mr-3">
            Follow us
          </h1>
          <div className="flex w-[70%] sm:w-[12%] h-[50%] items-center justify-between mt-[2%] sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100076315896623&ref=page_internal">
              <img
                src={facebook}
                alt=""
                className="w-[30px] h-[30px] sm:w-[25px] sm:h-[25px]"
              />
            </a>
            <a href="https://www.instagram.com/confido_constructions/">
              <img
                src={instagram}
                alt=""
                className="w-[30px] h-[30px] sm:w-[25px] sm:h-[25px]"
              />
            </a>
            <a href="https://www.linkedin.com/in/confido-constructions-728bba235/">
              <img
                src={linkedin}
                alt=""
                className="w-[30px] h-[30px] sm:w-[25px] sm:h-[25px]"
              />
            </a>
            <a href="https://wa.me/919656709729">
              <img
                src={whatsapp}
                alt=""
                className="w-[30px] h-[30px] sm:w-[25px] sm:h-[25px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
