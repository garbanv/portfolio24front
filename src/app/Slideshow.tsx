"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import React, { useState } from "react";

type SlideProps = {
  image?: string[] ;
  description?: string | null;
  name: string;
  client: string;
  url: string;
  technologies:string[];
}[]

/* const handlePrevImage = (): void => {
    console.log("prev image")
}

const handleNextImage = (): void => {
    console.log("next image")
} */

const Slideshow = (props: { slides: SlideProps }) => {
  const { slides } = props;
  /* const [newImage, setNewImage] = useState<number>(0); */
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });



  return (
    <div className="grid items-center justify-center bg-black ">
      <div className="animate-pulse py-10">
        <p
          className={`text-[50px]  font-bold justify-center text-white flex fadeInUp-animation ${
            inView ? "slide-top" : ""
          }`}
          ref={ref}
        >
          recent WORK
        </p>
      </div>
      <div className="max-w-screen-xl grid md:grid-cols-2 grid-cols-1 gap-x-5 md:px-0 px-5 justify-center items-center justify-content-center   ">
       {slides.map((element,index)=>{
        return (
        <div
        key={index}
          ref={ref}
          className={`relative  overflow-hidden  shadow-lg transition-all duration-300 ${
            inView ? "slide-top" : ""
          }`}
        >
          
          <Link href={element.url} target="_blank">
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80 transition-all duration-500"></div>
            <img
              src={element?.image && element?.image.length > 0 ? element?.image[0] : ''}
              alt={"newImage"}
              className=" w-full cursor-pointer h-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-50 group-hover:blur-sm"
            />
          </Link>
          <div className="relative -top-14 left-5">
            <h3 className="text-white font-bold  rounded-md ">{element.name}</h3>
            <span className="text-xs text-white ">{element.client}</span>
          </div>
        </div>)
       })} 

     
      </div>
    </div>
  );
};

export default Slideshow;
