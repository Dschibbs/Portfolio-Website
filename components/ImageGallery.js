import { storyblokEditable } from "@storyblok/react";
import { Masonry } from 'react-masonry'
import Modal from "./Modal";

import { useState } from "react"

const ImageGallery = ({ blok }) => {

  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (item, index) => {
    setClickedImg(item.src.filename);
  };

  return (
    <>
      <Masonry>
        {blok.images.map((image, index) => (
          <div className="w-full md:w-1/2 lg:w-1/3" key={index}>
            <img {...storyblokEditable(blok.images[index])} className="h-auto w-auto cursor-pointer transition-all hover:scale-95" src={image.src.filename} alt="test" onClick={() => handleClick(image, index)} />
          </div>
        ))}
      </Masonry>
      {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
          />
        )}
    </>

  )
};

export default ImageGallery;
