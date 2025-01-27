import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative w-full h-full">
        <Image 
            src="/images/sakura_bg.svg" 
            alt="Sakura Background" 
            fill={true}
            className="object-cover"
            objectFit="cover"
            // placeholder="blur"
        />
        <div className="absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[9vw]">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">
            Who said age will never lie? <br /> Lie your age now
          </h1>
          <Image 
            src="/images/model.svg"
            alt="Model"
            width={320}
            height={320}
            className="mx-auto rounded-lg"
            />
        </div>
      </div>
    </div>
  );
};
  
export default HeroSection;
  