import Image from "next/legacy/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-10 my-auto bg-bg">
      <ul className="flex flex-row justify-center gap-2 uppercase font-bold text-2xl mb-14">
        <li><a href="#">Galerie,</a></li>
        <li><a href="#">Über Mich,</a></li>
        <li><a href="#">Kontakt,</a></li>
      </ul>
      <div className="w-52 h-[2px] bg-text flex justify-center items-center mb-14">
        <div className="w-1 h-[30px] bg-text"></div>
      </div>
      <p className="text-center mb-2 text-base"> 
        Alle Inhalte sind urheberrechtlich geschützt durch den Künstler. <br/> 
        Keine kommerzielle Nutzung ohne ausdrückliche schriftliche Genehmigung. <br/>
        © 2024 Max Stam
      </p>
      <Image className="w-7 aspect-square" src={"/max-logo-small.png"} width={161} height={161} priority />
    </footer>
  );
};

export default Footer;