import React from "react";
import { Carousel } from "react-responsive-carousel";
import ServiceDetails from "../components/ServiceDetails";
import cap from "../assets/ENGHELM.svg";
import protractor from "../assets/PROTACTOR.svg";
import brain from "../assets/BRAIN.svg";
import hand from "../assets/HAND.svg";

function About() {
  return (
    <section className="w-full h-[130vh] flex flex-col items-center justify-start  scrollbar-hide">
      <div className="relative w-full h-[32%] flex items-center justify-center">
        <div className="w-full h-full bg-home1 bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"></div>
        <div className="w-full h-full bg-headerBG bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"></div>
        <div className="w-full h-full bg-headerBG bg-no-repeat bg-cover bg-center shadow-img backdrop-brightness-75"></div>
        <div className="absolute w-full h-full bg-green-accent flex items-center justify-between px-[8%] box-border">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-white -mt-[15%] mb-[8%] text-[1.1rem] font-light">
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
      <div className="w-full h-[70%] bg-[#e0e1e0] flex items-center justify-between pl-[12%] box-border">
        <div className="w-[45%] h-full flex flex-col items-start justify-start">
          <h1 className="text-[1.9rem] text-black font-extralight my-[8%]">
            About{" "}
            <strong className="font-medium text-[#004f1e] ">CONFIDO</strong>
          </h1>
          <p className="text-black font-extralight text-[1.3rem]">
            CONFIDO Constructions was born to transform homes and offices into
            incredible places, it was designed with the spirit of improving
            people's lives. We as a builder with unique business culture and
            passion in commitment to our customers, you could enlighten your
            dream Project. We are here with dedicated workstyle and engineering
            capabilities for giving you customised design by ensuring maximum
            space utilisation.
          </p>
          <p className="text-black font-extralight text-[1.3rem] mt-5 mb-5">
            Our team experts mainly focus on the quality and also take care of
            preserving the nature by implementing environmental management
            practices where ever we do construction. We try to rise our sites
            efficiently with no mistakes and no wastages. We perform 100%
            quality checks on every project.
          </p>
        </div>
        <div className="w-[45%] h-full flex flex-col items-center justify-center">
          <Carousel
            className="w-[100%] h-[50vh] self-center mt-[15%] shadow-carousel-img"
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
            <div className="h-[50vh] w-[100%] bg-transparent bg-headerBG bg-no-repeat bg-cover"></div>
            <div className="h-[50vh] w-[100%] bg-transparent bg-headerBG bg-no-repeat bg-cover"></div>
            <div className="h-[50vh] w-[100%] bg-transparent bg-headerBG bg-no-repeat bg-cover"></div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default About;
