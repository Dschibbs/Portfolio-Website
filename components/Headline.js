import { storyblokEditable } from "@storyblok/react";

const Headline = ({ blok }) => {
  return (
    <h2 className="mt-14 mb-9" {...storyblokEditable(blok)}>{blok.titel}</h2>
  )
};

export default Headline;
