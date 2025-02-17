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
      <div className="absolute flex flex-col items-center text-center md:items-start md:text-left md:ml-[17vw] px-6 w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-purple1 mb-4">
          <span className="block mb-2 animate__animated animate__fadeInUp">Unlock the Secrets of Ageless Beauty</span>
        </h1>

        <p className="mt-1 md:mt-4 text-sm md:text-lg font-normal max-w-[90%] md:max-w-[40vw] animate__animated animate__fadeInUp delay-500">
          Learn how collagen, astaxanthin, and essential vitamins work together to rejuvenate your skin, validated by clinical studies.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
