import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] flex justify-center items-center overflow-x-hidden">
      {/* Background Image */}
      <Image 
        src="/images/sakura_bg.webp" 
        alt="Sakura Background" 
        fill
        className="object-cover"
      />

      {/* Content Container */}
      <div className="absolute flex flex-col items-center text-center md:items-start md:text-left md:ml-[9vw] px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-purple1 mb-4">
          <span className="block md:mb-2 animate__animated animate__fadeInUp">Age is just a number.</span>
          <span className="animate__animated animate__fadeInUp delay-750">Make your own destiny.</span>
        </h1>

        <p className="mt-1 md:mt-4 text-sm md:text-lg font-normal md:mr-[48vw] max-w-[90%] md:max-w-[40vw] animate__animated animate__fadeInUp delay-1300">
          Nourish your skin, restore your glow, and embrace timeless beauty.
          Unlock the power of collagen and premium ingredients for a youthful, radiant, and healthy you.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
