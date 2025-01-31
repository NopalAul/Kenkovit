"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 12;
      
      // console.log("Current Scroll:", currentScrollY, "Last Scroll:", lastScrollY, "Scroll Threshold:", scrollThreshold);

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsScrollingUp(false); // scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true); // scroll up
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
    <nav className={`fixed top-0 z-50 flex w-full justify-between items-center py-4 px-[9vw] transition-all duration-300 ${isAtTop ? "bg-transparent" : "bg-white shadow-md" 
    } ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}>
      <Link href="/">
        <Image 
            src="/images/logo_kenko.svg" 
            alt="Kenkovit Logo" 
            width={100} 
            height={78} 
            className="h-12"
        />
      </Link>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/product">Product</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
