import Image from "next/legacy/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/" className="cursor-pointer"><Image className="w-5 hover:scale-105 transition-all" src={"/max-logo.png"} width={195} height={107} priority /></Link>
      <ul className="flex gap-20 font-medium text-xl uppercase">
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"><Link href="/projekte">Projekte</Link></li>
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"><Link href="/ueber-mich">Über Mich</Link></li>
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
