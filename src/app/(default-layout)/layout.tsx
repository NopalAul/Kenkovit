import "@/app/globals.css";
import { Poppins } from 'next/font/google';

import { type Metadata } from "next";

import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenkovit.com"),
  title: {
    default: "Kenkovit - Premium Beauty & Health Supplements",
    template: "%s | Kenkovit",
  },
  description: "Discover Kenkovit’s premium beauty collagen and health supplements. Achieve youthful skin, better wellness, and radiant beauty with our trusted products.",
  keywords: [
    "Kenkovit", "Kenkovit Beauty", "Collagen Supplement", "Health Supplements",
    "Skincare", "Anti-aging", "Beauty Products", "Wellness", "Hydrolyzed Collagen", "Kenkovit Company", "Collagen", "Hand Sanitizer", "Kenkovit Indonesia", "Astaxanthin"
  ],
  icons: [{ rel: "icon", url: "/kenkovit.ico" }],
  
  openGraph: {
    type: "website",
    url: "https://www.kenkovit.com",
    title: "Kenkovit - Premium Beauty & Health Supplements",
    description: "Discover Kenkovit’s premium beauty collagen and health supplements for a youthful and radiant glow.",
    siteName: "Kenkovit",
    images: [
      {
        url: "https://www.kenkovit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kenkovit - Beauty & Health Supplements",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@kenkovit",
    title: "Kenkovit - Premium Beauty & Health Supplements",
    description: "Kenkovit offers premium beauty collagen and health supplements for a youthful and radiant glow.",
    images: ["https://www.kenkovit.com/og-image.jpg"],
  },
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
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
