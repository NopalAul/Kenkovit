"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const philosophy = [
  { src: "/images/Icon/leaves.svg", label: "Natural" },
  { src: "/images/Icon/halal.svg", label: "Halal" },
  { src: "/images/Icon/quality.svg", label: "Quality" },
  { src: "/images/Icon/beauty.svg", label: "Beauty" },
  { src: "/images/Icon/health.svg", label: "Health" },
];

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Image 
        src="/images/model.webp"
        alt="Model"
        width={1014}
        height={460}
        className="absolute z-10 bottom-36 top-[76vh] md:top-48 right-0 md:right-12"
        />
      {/* philosophy section */}
      <div className="flex justify-center items-center py-20 md:py-40 px-[5vw]">
        <div className="text-center">
          <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-2xl md:text-3xl font-medium text-purple1 mb-4">Kenkovit Philosophy</motion.h2>

          <div className="flex flex-wrap  justify-center md:justify-start gap-6 md:gap-20 mt-12 md:mt-20">
            {philosophy.map(({ src, label }, index) => (
              <motion.div 
              initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index) * 0.2 }}
            variants={fadeUp}
              key={label} 
              className="flex flex-col items-center">
                <div className="bg-pink1 p-4 md:p-6 rounded-full">
                  <Image src={src} alt={label} width={62} height={62} className="h-[50px] w-[50px]"/>
                </div>
                <span className="text-sm md:text-lg mt-2 md:mt-6 text-purple1">{label}</span>
              </motion.div>
            ))} 
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="z-10 w-3/4 md:w-1/2 flex flex-col bg-pink1 text-white justify-center px-[5vw] md:px-[11vw] py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-4">Kenkovit <br />
          Beauty & Health</h2>
          <p className="text-md">
          Unlock the secret to radiant beauty and lasting wellness. Experience visible transformation in few weeks with our premium formulations.
          </p>
        </div>
        <div className="w-1/4 md:w-1/2 flex bg-white justify-center items-center py-8">
            <Image 
              src="/images/flower3.svg"
              alt="Flower"
              width={450}
              height={450}
              // className="absolute right-[-100] md:right-0 md:relative md:w-100 md:h-100"
              />
        </div>
      </div>
    </>
  );
}
