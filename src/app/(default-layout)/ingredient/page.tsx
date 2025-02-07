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
      <div className="flex flex-col items-center justify-center py-12 px-[5vw] md:px-[9vw]">
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
                    className={`w-full md:w-4/5 flex justify-between items-center bg-purple1 text-white font-semibold py-3 px-4 rounded-full transition-all ${
                      openIndex === index ? "" : "transition-transform hover:scale-101"
                    }`}
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
                    className={`flex items-start gap-4 transition-all duration-500 overflow-hidden ml-2 md:w-4/5 ${
                      openIndex === index ? "max-h-[500px] mt-3 border-l-2 border-purple1" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-700 text-md mx-2 px-2">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    {/* Clinical Studies Section */}
      <div className="py-12 px-[5vw] md:px-[9vw]">
        <h2 className="text-2xl font-semibold text-center text-purple1 py-8 md:mb-10">
          Clinical Studies
        </h2>

        {/* Hydrolyzed Marine Collagen */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-purple1 mb-4 rounded-l-full px-6 py-2 border-b-4 border-purple1">
              Hydrolyzed Marine Collagen
            </h3>
            <p className="text-gray-700">
              Clinical research has demonstrated that Hydrolyzed Marine Collagen significantly enhances skin collagen synthesis compared to other collagen sources.
              In a study by Matsumoto et al. (Journal of New Technology & Medicine), 25 women with dry and rough skin experienced notable improvements after
              consuming hydrolyzed collagen. The study reported:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Increased skin moisture levels</li>
              <li>Enhanced skin viscoelasticity</li>
              <li>Improved skin smoothness</li>
              <li>Reduction in wrinkles and roughness</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/images/Ingredient/clinical.png"
              alt="Hydrolyzed Marine Collagen Study"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Vitamin C & E */}
        <div className="flex flex-col md:flex-row items-center my-20">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/images/Ingredient/vitamin.png"
              alt="Vitamin C & E Study"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-purple1 mb-4 rounded-l-full px-6 py-2 border-b-4 border-purple1">Vitamin C & E</h3>
            <p className="text-gray-700">
              Dr. Kim, a researcher at the University of California, Los Angeles (UCLA), published findings in the Journal of the American Academy of Dermatology highlighting the critical roles of Vitamins C and E:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Vitamin C: Essential for collagen and elastin formation, its antioxidant properties help prevent UV-induced skin damage.</li>
              <li>Vitamin E: Acts as a potent antioxidant, protecting cell membranes and significantly contributing to the prevention of skin aging.</li>
            </ul>
            <p className="text-gray-700 mt-2">
            Multiple studies confirm that the combination of Vitamins C and E is highly effective in preventing sun-related skin damage, making it an excellent strategy for photoprotection therapy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}