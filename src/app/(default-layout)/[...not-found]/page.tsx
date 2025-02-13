import Image from "next/image";
import NotFoundHero from "@/components/NotFound/NotFoundHero";


export default function HomePage() {
  return (
    <>
      <NotFoundHero />
      {/* model img */}
      <Image 
        src="/images/flower6.webp"
        alt="Model"
        width={700}
        height={580}
        className="absolute z-[-1] bottom-36 md:top-40 right-0 md:right-16"
        />
    </>
  );
}
