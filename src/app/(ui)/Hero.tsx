"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <section className=" m-auto grid  ">
      <div className="grid items-center  h-screen ">
        <div className="grid  gap-x-5 leading-none place-items-center md:place-items-start px-5">
          <h1 ref = {ref} className={`inter-custom lg:text-[200px] text-[70px] fadeInUp-animation md:leading-[105px]`}>
            ALEXEI 
          </h1>
         
          <h1 className="inter-custom lg:text-[200px] text-[70px] fadeInUp-animation ">
            GARBAN
          </h1>
        </div>
        <div className="md:grid justify-center md:justify-start  absolute bottom-2 w-full px-5">
          <p className="text-center md:text-md text-xs">
            Software engineer & music producer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
