import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full justify-between items-center p-4 bg-white">
      <Link href="/">
        {/* <img src="/images/logo_kenko.svg" alt="Kenkovit Logo" className="h-12" /> */}
        <Image 
            src="/images/logo_kenko.svg" 
            alt="Kenkovit Logo" 
            width={156} 
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
