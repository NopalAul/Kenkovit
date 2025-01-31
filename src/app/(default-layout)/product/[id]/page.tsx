'use client';

import { useParams } from "next/navigation";
import products from "@/data/ProductData";
import Image from "next/image";

const ProductDetail = () => {
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
    <div className="pt-40">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row items-center justify-center px-[9vw] pb-20">
        {/* Text Section */}
        <div className="max-w-lg text-left">
          <h1 className="flex flex-col">
            <span className="text-2xl text-purple1 font-semibold">{product.name.split(" ")[0]}</span>{" "}
            <span className="text-4xl bg-text-gradient text-transparent bg-clip-text font-bold h-12">
              {product.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-gray-700 mt-8 mr-12">{product.description}</p>
        </div>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={350}
          height={350}
          className="mt-6 md:mt-0"
        />
      </div>

      {/* Benefits, Ingredients & Model Image Section */}
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/4 relative flex">
          <Image
            src="/images/model2.svg"
            alt="Model"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-3/4 bg-purple1 text-white p-8 flex flex-col pr-[9vw]">
          <div className="flex flex-col md:flex-row gap-10 flex-grow">
            {/* Benefits */}
            <div className="flex-1">
              <h2 className="text-2xl font-medium border-b border-white pb-2 mb-4">Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="flex-1">
              <h2 className="text-2xl font-medium border-b border-white pb-2 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-medium border-b border-white pb-2 mb-4">Usage</h2>
            <p className="mt-2">{product.usage}</p>
          </div>

        </div>
      </div>
      <div className="p-28"></div>
    </div>
  );
};

export default ProductDetail;
