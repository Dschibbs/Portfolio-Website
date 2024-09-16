import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/" className="cursor-pointer"><Image className="w-5 hover:scale-105 transition-all" src={"/max-logo.png"} width={195} height={107} priority /></Link>
      <ul className="flex gap-20 font-medium text-xl uppercase">
        <li><Link href="/projekte">Projekte</Link></li>
        <li><Link href="/ueber-mich">Über Mich</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
