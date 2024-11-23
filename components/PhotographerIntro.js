import { storyblokEditable, renderRichText } from "@storyblok/react";
import Image from "next/image";

const PhotographerIntro = ({ blok }) => {
  return (
    <section 
      className="py-24 px-4"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr,3fr] gap-12 items-center">
        {/* Porträt */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={blok.portrait.filename}
            alt="Portrait"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Name & Titel */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-3">
              {blok.name}
            </h2>
            <p className="text-xl text-gray-600">
              {blok.tagline}
            </p>
          </div>

          {/* Über mich Text */}
          <div className="prose prose-lg">
            {/* {renderRichText(blok.about)} */}
            {blok.about}
          </div>

          {/* Ausrüstung/Expertise */}
          {blok.expertise && (
            <div className="space-y-3">
              <h3 className="text-xl font-medium">Ausrüstung & Expertise</h3>
              <ul className="grid grid-cols-2 gap-2">
                {blok.expertise.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"/>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotographerIntro;
