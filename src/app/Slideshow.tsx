"use client";
import next from "next";
import Link from "next/link";
import React, { useState } from "react";

type SlideProps = {
  image?: string[] | null;
  description?: string | null;
  name: string;
  client: string;
  url: string;
};

const handlePrevImage = (): void => {
    console.log("prev image")
}

const handleNextImage = (): void => {
    console.log("next image")
}

const Slideshow = ({ image, description, name, client, url }: SlideProps) => {
  const [newImage, setNewImage] = useState<number>(0);
  /* 
    const updateImage = () => {
        const totalImages : number = image?.length ?? 0
        setInterval(() => {
           
          if(newImage === totalImages){
            setNewImage(0)
          }else{
            setNewImage(newImage+1 )
          }
        
        }, 2000);
    }; */

  /*     updateImage() */

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-content-center">
      <div className="animate-pulse">
        <p className="text-[50px] text-white font-bold justify-center flex fadeInUp-animation ">
          recent WORK
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center items-center ">
        <Link href={url} target="_blank">
          <div className="group relative  overflow-hidden rounded-lg shadow-lg transition-all duration-300">
            <img
              src={image![newImage] ?? ""}
              alt={"newImage"}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-white text-center text-lg font-semibold">
                {name}
              </p>
              <p className="text-white text-center text-lg font-semibold">
                CLIENT: {client}
              </p>
            </div>
          </div>
        </Link>
                  
        {/* <div className="flex justify-center">
              <button className="text-3xl text-white font-bold" onClick={handlePrevImage}> ← </button>
              <button className="text-3xl text-white font-bold" onClick={handleNextImage}> → </button>
              </div> */}
      </div>
    </div>
  );
};

export default Slideshow;
