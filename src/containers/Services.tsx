import React from "react";
import ServiceCard from "../components/ServiceCard";
import { images } from "../constants/constants";

function Services() {
  return (
    <section className="w-full min-h-[100vh] bg-white flex flex-col items-start justify-start px-[12%] box-border pt-[4%]">
      <h1 className="text-black font-light text-[1.9rem] tracking-wider">
        We <strong className="font-bold text-[#065524]">BEST</strong> in
      </h1>
      <h1 className="font-light text-[1.3rem] text-black tracking-wider mb-[3%]">
        SEE SERVICES
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 w-full h-[100%] sm:h-[80%] gap-x-[30px] gap-y-[40px] place-items-center ">
        <ServiceCard image={images[7]} data={"PLANNING"} />
        <ServiceCard
          image={images[2]}
          data={"CONTRACTING & CONSTRUCTION MANAGEMENT"}
        />
        <ServiceCard image={images[3]} data={"3D MODELLING"} />
        <ServiceCard image={images[4]} data={"INTERIOR DESIGING"} />
        <ServiceCard image={images[6]} data={"RENOVATION & EXPANSION"} />
        <ServiceCard image={images[1]} data={"GREEN BUILDING"} />
      </div>
    </section>
  );
}

export default Services;
