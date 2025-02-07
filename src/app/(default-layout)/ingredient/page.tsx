"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/containers/Ingredient/HeroSection";

const ingredients = [
  {
    title: "Hydrolyzed Marine Collagen",
    content: `Kenkovit’s Hydrolyzed Marine Collagen is derived from deep-sea fish. 
      Its amino acid structure closely resembles type I collagen found in the human body, ensuring optimal compatibility. 
      Through an enzymatic process, the collagen is hydrolyzed into small molecules (3000–5000 kilodaltons), allowing for rapid and efficient absorption.
      Collagen is a critical protein—comprising approximately 70% of the skin’s dermis and nearly one-third of the body’s total protein—
      essential for maintaining skin elasticity, joint health, and overall vitality. However, natural aging reduces collagen levels, leading to sagging, wrinkles, and dry skin. 
      This ingredient helps replenish collagen, supporting cell regeneration and preserving your natural beauty.`,
  },
  {
    title: "Natural Astaxanthin",
    content: `Sourced from deep-sea red algae, Natural Astaxanthin is an exceptionally powerful antioxidant. 
      It protects cells from damage, combats premature aging, and helps prevent wrinkles. 
      Its robust antioxidant properties also support skin health by keeping your complexion vibrant and providing protection against harmful UV rays.`,
  },
  {
    title: "Vitamin C",
    content: `Vitamin C is vital for the synthesis of collagen and elastin, two proteins essential for firm and resilient skin. 
      As a potent antioxidant, it helps counteract the damaging effects of UV radiation. In addition, Vitamin C supports overall skin health by:
      - Promoting the formation of collagen and elastin
      - Preventing UV-induced skin damage
      - Neutralizing free radicals`,
  },
  {
    title: "Natural Vitamin E",
    content: `The natural form of Vitamin E used in Kenkovit Beauty Collagen® is more effective than its synthetic counterpart. 
      It protects cell membranes, aids in cell regeneration, and plays a critical role in preventing skin aging. Key functions include:
      - Anti-aging support by preventing premature skin aging
      - Acting as a powerful antioxidant to maintain a healthy, radiant complexion
      - Protecting and regenerating skin cell membranes
      
      Research has shown that the combined use of Vitamin C and Natural Vitamin E offers superior photoprotection, 
      helping to shield the skin from sun-induced damage.`,
  },
  {
    title: "Food Grade Alcohol",
    content: `Our formula includes food-grade ethanol (70%), which is safe, non-bitter, and non-irritating. 
      This ingredient effectively eliminates germs and bacteria while remaining gentle on the skin—making it ideal for use by the entire family, including children.`,
  },
];

export default function Ingredient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroSection />

      {/* Functional Ingredients */}
      <div className="flex flex-col items-center justify-center py-12 px-[9vw]">
        <div className="py-8">
          <h2 className="text-2xl font-semibold text-center text-purple1 mb-6">
            Functional Ingredients
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/images/Product/group1_shadow.png"
              alt="Kenkovit Products"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Ingredients List */}
          <div className="md:w-2/3 w-full mt-8 md:mt-0">
            <div className="space-y-6">
              {ingredients.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-3/4 flex justify-between items-center bg-purple1 text-white font-semibold py-3 px-4 rounded-full transition-all"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <Image
                      src="/images/Icon/chevron_right.svg"
                      alt="Chevron Icon"
                      width={12}
                      height={12}
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`flex items-start gap-4 transition-all duration-500 overflow-hidden ml-2 ${
                      openIndex === index ? "max-h-[500px] mt-3 border-l-2 border-purple1" : "max-h-0"
                    }`}
                  >
                    {/* <div
                      className={`w-[10px] bg-purple1 transition-all ${
                        openIndex === index ? "h-[full] max opacity-100" : "h-0 opacity-0"
                      }`}
                    /> */}
                    <p className="text-gray-700 text-md mx-2 px-2">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
