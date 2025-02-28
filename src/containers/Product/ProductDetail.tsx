'use client';

import { useParams } from "next/navigation";
import products from "@/data/ProductData";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));

  // If product is not found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-40">
      {/* Product Header */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center px-[5vw] md:px-[9vw] pb-2 md:pb-20">
        {/* Text Section */}
        <div className="max-w-lg text-left mb-8">
          <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeLeft}
          className="flex flex-col">
            <span className="text-lg md:text-2xl text-purple1 font-semibold">{product.name.split(" ")[0]}</span>{" "}
            <span className="mt-[-2] text-2xl md:text-4xl bg-text-gradient text-transparent bg-clip-text font-bold h-12">
              {product.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeLeft}
          className="text-gray-700 md:mt-6 md:mr-8 text-sm">{product.description}</motion.p>
        </div>

        {/* Product Image */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        >
          <Image
            src={product.image}
            alt={product.name}
            height={350}
            width={350}
            className="ml-8 md:ml-0 h-[40vh] md:h-[400px] w-[auto] md:h-full"
          />
        </motion.div>
      </div>

      {/* Benefits, Ingredients, Specification & Model Image Section */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={fadeUp}
      className="flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/4 relative flex">
          <Image
            src="/images/model2.webp"
            alt="Model"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-3/4 bg-purple1 text-white py-8 px-[5vw] md:p-8 flex flex-col pr-[9vw]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-grow">
            {/* Benefits */}
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-medium border-b border-white pb-2 mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              {/* Ingredients */}
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-medium border-b border-white pb-2 mb-4">Key Ingredients</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              {/* Specification */}
              <div className="flex-1 mt-6">
                <h2 className="text-lg md:text-2xl font-medium border-b border-white pb-2 mb-4">Specification</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {product.specifications.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Usage Section */}
          <div className="mt-8">
            <h2 className="text-lg md:text-2xl font-medium border-b border-white pb-2 mb-4">Usage</h2>
            <p className="mt-2 text-sm">{product.usage}</p>
          </div>

        </div>
      </motion.div>
      {/* <div className="p-28"></div> */}
    </div>
  );
};

export default ProductDetail;
