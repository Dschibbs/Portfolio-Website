import { storyblokEditable } from "@storyblok/react";
import Button from "./Button";
import Image from "next/legacy/image";

const Stage = ({ blok }) => {
  return (
    <div className="flex gap-10 items-center">
      <div className="w-[35%] flex flex-col gap-10">
        <h1 {...storyblokEditable(blok)}>{blok.titel}</h1>
        <p {...storyblokEditable(blok)}>{blok.text}</p>
        <div className="flex flex-row flex-wrap justify-between">
          <Button text={blok.button1[0].text} link={blok.button1[0].link} />
          <Button secondary text={blok.button2[0].text} link={blok.button2[0].link} />
        </div>
      </div>
      <div className="w-[65%]">
        <Image className="w-full h-20" src={blok.bild.filename} width={1283} height={714} />
      </div>
    </div>
  );
};

export default Stage;
