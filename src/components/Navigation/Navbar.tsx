"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Ingredient", path: "/ingredient" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 12;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      }

      setIsAtTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full justify-between items-center py-4 px-[9vw] transition-all duration-300 ${
        (isAtTop && !menuOpen) ? "bg-transparent" : "bg-white shadow-lg2"
      } ${(isScrollingUp || menuOpen) ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo_kenko.svg"
          alt="Kenkovit Logo"
          width={100}
          height={78}
          className="h-12"
        />
      </Link>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-10 text-md font-medium">
        {menu.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`transition-all duration-300 ${
                pathname === path ? "text-purple1 font-semibold" : "text-gray-700"
              } hover:text-purple1`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative"
      >
        <div
          className={`w-6 h-[2px] bg-black rounded-full transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-[2px] bg-black rounded-full transition-all duration-300 my-1 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-[2px] bg-black rounded-full transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>


      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full rounded-b-3xl bg-white shadow-lg2 transition-all duration-300 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 py-12 text-lg font-medium">
          {menu.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`block w-full text-center transition-all duration-300 ${
                  pathname === path ? "text-purple1 font-semibold" : "text-gray-700"
                } hover:text-purple1`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
