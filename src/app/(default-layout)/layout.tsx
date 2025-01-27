import "@/app/globals.css";
import { Poppins } from '@next/font/google';

import { type Metadata } from "next";

import Navbar from "@/components/Navigation/Navbar";

export const metadata: Metadata = {
  // metadataBase: new URL("https://sreitb.com"),
  title: {
    default: "Kenkovit",
    template: "%s | Kenkovit",
  },
  description: "Kenkovit Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
  variable: "--font-poppins",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
