import { storyblokEditable } from "@storyblok/react";

const Headline = ({ blok }) => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h2 
        className="text-3xl md:text-4xl tracking-wide mb-4 text-center"
        {...storyblokEditable(blok)}
      >
        {blok.titel}
      </h2>
      <div className="flex items-center gap-3">
        <div className="w-12 h-px bg-text opacity-50"></div>
      </div>
    </div>
  );
};

export default Headline;
