import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center p-5 overflow-visible">
      <Link href="/" className="cursor-pointer mr-4">
        <Image
          className="hover:scale-105 transition-all"
          style={{ transformOrigin: 'center' }}
          src={"/max-logo.png"}
          width={195}
          height={107}
          alt="Max Logo"
          priority
        />
      </Link>

      {/* Regular Navigation for larger screens */}
      <ul className="hidden md:flex gap-10 font-medium text-xl uppercase">
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all">
          <Link href="/galerie">Galerie</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all">
          <Link href="/ueber-mich">Über Mich</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all">
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>

      {/* Burger Icon for mobile and tablet */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-0 bg-white shadow-md w-full md:hidden flex flex-col items-center space-y-5 py-5 font-medium text-lg bg-bg">
          <li className="cursor-pointer">
            <Link href="/galerie" onClick={() => setMenuOpen(false)}>
              Galerie
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/ueber-mich" onClick={() => setMenuOpen(false)}>
              Über Mich
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/kontakt" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
