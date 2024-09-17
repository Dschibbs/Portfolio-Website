import { storyblokEditable } from "@storyblok/react";
import Image from "next/legacy/image";

const CategorieTeaser = ({ blok }) => {
  console.log(blok)
  return (
    <a className="relative group" href={blok.link.cached_url}>
      <Image className="group-hover:scale-105 transition-all" src={blok.bild.filename} width={576} height={323} priority objectFit="cover" sizes="100vw"/>
      <span className="font-bold text-bg drop-shadow-[1px_1px_1px_rgb(0,0,0)] text-5xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" {...storyblokEditable(blok)}>{blok.titel}</span>
    </a>
  )
};

export default CategorieTeaser;
