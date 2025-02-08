import Image from "next/image";

import HeroSection from "@/containers/Home/HeroSection";
import ProductCarousel from "@/components/Carousel/ProductCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* model img */}
      <Image 
        src="/images/model.svg"
        alt="Model"
        width={1014}
        height={460}
        className="absolute z-10 bottom-36 md:top-48 right-0 md:right-12"
        />
      {/* under model section */}
      <div className="grid grid-cols-2">
        <div className="bg-pink1 p-32 text-white">
          <h2 className="text-xl font-bold mb-4">Subtitle</h2>
          <p className="text-sm">
            lorem daimasimapocac sac oasmpocsksa scooo aad asd aeda
            ca oac a cas casdcaea cascasca
          </p>
        </div>
        <div className="flex bg-white2 justify-center items-center py-32">
          <Image 
            src="/images/flower2.svg"
            alt="Flower"
            width={400}
            height={400}
            className="w-100 h-100"
            />
        </div>
      </div>

      {/* product carousel */}
      <ProductCarousel />
    </>
  );
}
