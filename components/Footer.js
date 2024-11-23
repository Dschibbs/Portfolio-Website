import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

const Footer = ({ blok }) => {
  // Fallback Werte falls keine Storyblok-Daten vorhanden sind
  const links = blok?.navigation || [
    { text: "Galerie", url: "/galerie" },
    { text: "Über Mich", url: "/ueber-mich" },
    { text: "Kontakt", url: "/kontakt" }
  ];
  
  const copyright = blok?.copyright || "© 2024 Max Stam";
  const legalText = blok?.legalText || "Alle Inhalte sind urheberrechtlich geschützt durch den Künstler. Keine kommerzielle Nutzung ohne ausdrückliche schriftliche Genehmigung.";
  const logoUrl = blok?.logo?.filename || "/max-logo-small.png";

  return (
    <footer className="bg-bg] py-16 px-4" {...storyblokEditable(blok)}>
      <div className="max-w-2xl mx-auto text-center space-y-5">
        {/* Navigation Links */}
        <nav className="text-sm tracking-wider">
          <ul className="flex justify-center gap-2">
            {links.map((link, index) => (
              <>
                <li key={link.url}>
                  <a href={link.url} className="hover:opacity-70">{link.text}</a>
                </li>
                {index < links.length - 1 && <li key={index}>, </li>}
              </>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-8 h-px bg-text" />
        </div>

        {/* Copyright Text */}
        <div className="space-y-1">
          <p className="text-sm">
            {legalText}
          </p>
          <p className="text-sm">
            {copyright}
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image 
            className="w-32 aspect-square" 
            src={logoUrl} 
            width={161} 
            height={161} 
            alt="Max Logo" 
            priority 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;