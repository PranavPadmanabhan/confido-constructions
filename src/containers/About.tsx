import React from "react";
import { Carousel } from "react-responsive-carousel";
import ServiceDetails from "../components/ServiceDetails";
import cap from "../assets/ENGHELM.svg";
import protractor from "../assets/PROTACTOR.svg";
import brain from "../assets/BRAIN.svg";
import hand from "../assets/HAND.svg";
import home1 from "../assets/01.jpg";
import home2 from "../assets/02.jpg";
import { images } from "../constants/constants";
import "../App.css"

function About() {
  return (
    <section id="about" className="w-full h-auto sm:h-[130vh] flex flex-col items-center justify-start  scrollbar-hide">
      <div id="container" className="relative w-full h-[105vh] sm:h-[32%] flex flex-col sm:flex-row items-center justify-center">
        <div id="img1"
          style={{ backgroundImage: `url(${home1})` }}
          className="w-full h-full  bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"
        ></div>
        <div id="img1"
          style={{ backgroundImage: `url(${home2})` }}
          className="w-full h-full  bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"
        ></div>
        <div id="img1"
          style={{ backgroundImage: `url(${home1})` }}
          className="w-full h-full  bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"
        ></div>
        <div id="img1" className="absolute w-full h-full backdrop-contrast-200 bg-green-accent flex flex-col sm:flex-row items-center justify-evenly sm:justify-between px-[8%] box-border">
          <div className="w-full h-[30%] sm:h-full flex flex-col items-center justify-center ">
            <h1 id="text3" className="text-white mt-0 sm:-mt-[15%] mb-[3%] sm:mb-[8%] text-[1.1rem] font-light">
              WHY CHOOSE <strong className="font-medium">CONFIDO </strong>?
            </h1>
            <ServiceDetails
              title="ENGINEERS & ARCHITECTS"
              src={cap}
              description={
                "Our engineers and architects are passionate about meeting the needs of the clients."
              }
            />
          </div>
          <ServiceDetails
            title="DESIGN & LANDSCAPE"
            src={protractor}
            description={
              "The art and science of understanding people's behavior to create functional space"
            }
          />
          <ServiceDetails
            title="PROJECT MANAGEMENT"
            src={brain}
            description={
              "Each step of the construction process will be monitored by our experts in close communication with workers"
            }
          />
          <ServiceDetails
            title="WASTE MANAGEMENT"
            src={hand}
            description={
              "We endeavour to eliminate process wastage through lean construction"
            }
          />
        </div>
      </div>
      <div id="details" className="w-full h-[100vh] sm:h-[70%] bg-[#e0e1e0] flex flex-col sm:flex-row items-center justify-between pl-[4%] sm:pl-[12%] box-border">
        <div className="w-full sm:w-[45%] h-full flex flex-col items-start justify-start">
          <h1 className="text-[1.9rem] text-black font-extralight my-[8%]">
            About{" "}
            <strong className="font-medium text-[#004f1e] ">CONFIDO</strong>
          </h1>
          <p id="text4" className="text-black font-extralight text-[4vw] sm:text-[1.2rem]">
            CONFIDO Constructions was born to transform homes and offices into
            incredible places, it was designed with the spirit of improving
            people's lives. We as a builder with unique business culture and
            passion in commitment to our customers, you could enlighten your
            dream Project. We are here with dedicated workstyle and engineering
            capabilities for giving you customised design by ensuring maximum
            space utilisation.
          </p>
          <p id="text4" className="text-black font-extralight text-[4vw] sm:text-[1.2rem] mt-5 mb-5">
            Our team experts mainly focus on the quality and also take care of
            preserving the nature by implementing environmental management
            practices where ever we do construction. We try to rise our sites
            efficiently with no mistakes and no wastages. We perform 100%
            quality checks on every project.
          </p>
        </div>
        <div className="w-[90%] sm:w-[45%] h-full flex flex-col items-center justify-center">
          <Carousel
            className="carousel w-[100%] h-[25vh] sm:h-[50vh] self-center mt-0 sm:mt-[15%] shadow-carousel-img"
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            dynamicHeight={true}
            showStatus={false}
            swipeable={true}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const dotStyle = {
                marginLeft: 15,
                color: "white",
                cursor: "pointer",
                fontSize: 40,
              };
              const style = isSelected
                ? { ...dotStyle, color: "#004f1e" }
                : { ...dotStyle };
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                >
                  &#x2022;
                </span>
              );
            }}
          >
            {/* <div
              style={{ backgroundImage: `url(${home2})` }}
              className="h-[25vh] sm:h-[50vh] w-[100%] bg-transparent bg-no-repeat bg-cover"
            ></div>
            <div
              style={{ backgroundImage: `url(${home1})` }}
              className="h-[25vh] sm:h-[50vh] w-[100%] bg-transparent bg-no-repeat bg-cover"
            ></div> */}

            {images.slice(0, 5).map((img, i) => (
              <div
               id="carouse-item"
                style={{ backgroundImage: `url(${img})` }}
                className="carousel-item h-[25vh] sm:h-[50vh] w-[100%] bg-transparent bg-no-repeat bg-cover "
              ></div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default About;
