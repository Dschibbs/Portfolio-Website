import { storyblokEditable } from "@storyblok/react";
import Button from "./Button";
import Image from "next/legacy/image";

const Stage = ({ blok }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <div className="w-full lg:w-[35%] flex flex-col gap-6">
        <h1 {...storyblokEditable(blok)}>{blok.titel}</h1>
        <p {...storyblokEditable(blok)}>{blok.text}</p>
        <div className="flex gap-4">
          <Button text={blok.button1[0].text} link={blok.button1[0].link} />
          <Button secondary text={blok.button2[0].text} link={blok.button2[0].link} />
        </div>
      </div>
      <div className="w-full lg:w-[65%]">
        <Image className="w-full h-auto" src={blok.bild.filename} width={1283} height={714} />
      </div>
    </div>
  );
};

export default Stage;