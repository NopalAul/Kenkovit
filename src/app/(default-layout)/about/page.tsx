import type { Metadata } from 'next'

import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-24 px-[5vw] md:px-[9vw]">
      {/* Section Container */}
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-36">
        
        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            {/* <h2 className="text-2xl font-bold text-purple1">Our Mission</h2> */}
            <h2 className="text-2xl md:text-3xl font-semibold text-purple1">Who We Are</h2>
            <p className="text-gray-700 mt-2">
              Kenkovit was founded to solve a common problem: the decline of collagen production that leads to visible signs of aging, like fine lines, loss of skin elasticity, and overall aging signs.   We set out to create a premium, science-based solution, helping people to nourish their healthy and beautiful life. 
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/model4.webp" alt="Our Mission" width={400} height={300} className="rounded-lg shadow-cardCombined" />
          </div>
        </div>

        {/* Who We Are */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple1">Our Mission</h2>
            <p className="text-gray-700 mt-2">
              At Kenkovit, we believe that beauty and health starts from within. Our mission is to help people achieve healthier, more radiant skin while supporting overall well-being. Aging is a natural process, however we believe everyone deserves to feel confident in their own life  at any age.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/images/model3.webp" alt="Who We Are" width={400} height={300} className="rounded-lg shadow-cardCombined" />
          </div>
        </div>

        {/* What We Value */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple1">What We Value</h2>
            <p className="text-gray-700 mt-2">
              We are committed to quality, innovation, and effectiveness. That’s why we use only carefully selected, high-quality ingredients to ensure real, visible results. We believe in transparency, excellence, and delivering the best for our customers.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/flower5.webp" alt="What We Value" width={300} height={400} className="rounded-lg shadow-cardCombined" />
          </div>
        </div>

        {/* Our Formula */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple1">Our Formula</h2>
            <p className="text-gray-700 mt-2">
              Kenkovit Beauty Collagen is designed for those who want to maintain youthful, glowing skin while supporting their body`&apos;`s natural vitality. Our product contains Hydrolyzed Marine Collagen and natural ingredients, known for its  superior quality and absorption. Combined with our expert formulator, Kenkovit provides the ultimate solution for beauty and wellness.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/images/formula.jpg" alt="Our Formula" width={400} height={300} className="rounded-lg shadow-cardCombined" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 flex flex-col items-center gap-4">
          <p className="text-gray-600">
            Discover new functional products with ultimate benefits for 
            <span className="text-purple1 font-semibold"> beautiful skin, nails, and hair.</span>
          </p>
          <Link href="/product">
            <button className="bg-purple1 text-white pl-4 pr-2 py-2 rounded-full shadow-md flex items-center justify-between mt-8">
              <div>
                See Our Products
              </div>
              <div className="rounded-full bg-white w-8 md:w-8 h-8 md:h-8 flex items-center justify-center ml-2 text-purple1 font-bold text-lg">
                <Image src="/images/Icon/arrow.svg" alt="Arrow" width={14} height={14} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"/>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
