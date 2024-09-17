import { storyblokEditable } from "@storyblok/react";

const Button = ({ link, text, secondary, blok }) => {
  return (
    <a className={`py-3 px-14 border border-text border-2 rounded-3xl font-bold text-xl hover:text-lg transition-all uppercase ${secondary && "bg-text text-bg"}`} href={link.cached_url} {...storyblokEditable(blok)}>{text}</a>
  )
};

export default Button;
