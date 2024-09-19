import { storyblokEditable } from "@storyblok/react";
import { Masonry } from 'react-masonry'
import Modal from "./Modal";

import { useState } from "react"
import Image from "next/legacy/image";

const ImageGallery = ({ blok }) => {

  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (item, index) => {
    setClickedImg(item.src.filename);
  };

  console.log(blok)

  return (
    <>
      <Masonry>
        {blok.images.map((image, index) => {
          
          let dimensions = {
            width: image.src.filename.split('/')[5].split('x')[0],
            height: image.src.filename.split('/')[5].split('x')[1]
          }
          console.log("dimensions: ", dimensions.width, dimensions.height)
          return (
          <div className="w-full h-fit md:w-1/2 lg:w-1/3" key={index}>
            <Image {...storyblokEditable(blok.images[index])} className="cursor-pointer transition-all hover:scale-95" src={image.src.filename} alt="test" width={dimensions.width} height={dimensions.height} priority={true} objectFit="contain" onClick={() => handleClick(image, index)} />
          </div>
          );
        })}
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
