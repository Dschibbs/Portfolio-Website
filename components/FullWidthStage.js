import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const FullWidthStage = ({ blok }) => {
  return (
    <div 
      className="relative w-screen h-[60vh] -ml-[2.5rem] mt-11"
      {...storyblokEditable(blok)}
    >
      {/* Hintergrundbild */}
      <Image
        src={blok.backgroundImg.filename}
        layout="fill"
        objectFit="cover"
        priority
        alt={blok.title || "Stage Background"}
        className="z-0"
      />
      
      {/* Optionaler Overlay für besseren Kontrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content Container */}
      <div className="absolute -top-11 left-1/2 transform -translate-x-1/2 z-20 flex py-5 px-14 bg-bg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            {blok.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FullWidthStage;
