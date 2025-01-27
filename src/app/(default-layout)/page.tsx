import HeroSection from "@/containers/Home/HeroSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-2 gap-4 p-10">
        <div className="bg-pink-200 p-6">
          <h2 className="text-xl font-bold mb-4">Subtitle</h2>
          <p className="text-sm">
            lorem daimasimapocac sac oasmpocsksa scooo aad asd aeda
            ca oac a cas casdcaea cascasca
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* <img
            src="/images/flower2.svg"
            alt="Flower"
            className="w-32 h-32"
          /> */}
          <Image 
            src="/images/flower2.svg"
            alt="Flower"
            width={128}
            height={128}
            className="w-32 h-32"
            />
        </div>
      </div>
    </>
  );
}
