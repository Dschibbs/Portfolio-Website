import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const ContactInfo = ({ blok }) => {
  return (
    <section 
      className="py-16 px-4"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Kontaktinformationen */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-medium mb-4">
              {blok.title}
            </h2>
            <p className="text-xl text-gray-600">
              {blok.description}
            </p>
          </div>

          {/* Kontaktdetails */}
          <div className="space-y-6">
            {/* Email */}
            {blok.email && (
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href={`mailto:${blok.email}`} className="text-gray-600 hover:text-black">
                    {blok.email}
                  </a>
                </div>
              </div>
            )}

            {/* Telefon */}
            {blok.phone && (
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <a href={`tel:${blok.phone}`} className="text-gray-600 hover:text-black">
                    {blok.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Standort */}
            {blok.location && (
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Standort</h3>
                  <p className="text-base text-gray-600">
                    {blok.location}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kontaktbild */}
        {blok.image && blok.image.filename && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={blok.image.filename}
              alt="Kontakt"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInfo;
