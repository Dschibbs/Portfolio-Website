import { storyblokEditable } from "@storyblok/react";

const Button = ({ link, text, secondary, blok }) => {
  return (
    <a className={`flex justify-center w-full py-3 px-14 border border-text border-2 rounded-3xl font-bold text-xl hover:border-textHover hover:text-textHover transition-all uppercase ${secondary && "bg-text hover:bg-textHover text-bg hover:text-bg"}`} href={link.cached_url} {...storyblokEditable(blok)}>{text}</a>
  )
};

export default Button;
