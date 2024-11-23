import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const PhotoSpecialties = ({ blok }) => {
  return (
    <section 
      className="py-24 px-4 bg-gray-50"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">
            {blok.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {blok.description}
          </p>
        </div>

        {/* Spezialisierungen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.specialties.map((specialty, index) => (
            <div key={index} className="group">
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={specialty.image.filename}
                  alt={specialty.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"/>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-medium mb-2">
                {specialty.title}
              </h3>
              <p className="text-gray-600">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSpecialties;
