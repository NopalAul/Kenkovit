import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative w-full h-full">
        <Image 
            src="/images/sakura_bg.svg" 
            alt="Sakura Background" 
            fill={true}
            className="object-cover"
            objectFit="cover"
            // placeholder="blur"
        />
        <div className="absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[9vw] overflow-hidden">
          <h1 className="text-4xl font-bold text-purple1 mb-4">
            Who said age will never lie? <br /> Lie your age now
          </h1>
        </div>
      </div>
    </div>
  );
};
  
export default HeroSection;
  