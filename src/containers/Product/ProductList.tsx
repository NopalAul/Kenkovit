"use client";

import { useState } from "react";
import Select from "react-select";
import products from "@/data/ProductData";
import ProductCard from "@/components/Card/ProductCard";

const categoryOptions = [
  { value: "", label: "All Categories" },
  { value: "beauty", label: "Beauty" },
  { value: "health", label: "Health" },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // filtered products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 px-[5vw] md:px-[9vw] items-center">
      {/* Search & filter section */}
      <div className="w-full place-self-center max-w-[760px] flex flex-col md:flex-row justify-center items-center gap-2 mb-8 mx-32">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-300"
        />
        <Select
          value={categoryOptions.find(opt => opt.value === selectedCategory)}
          onChange={(selectedOption) => setSelectedCategory(selectedOption?.value || "")}
          options={categoryOptions}
          className="w-full md:w-1/3"
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: "#D6DADF",
              borderRadius: "8px",
              height: "42px",
              boxShadow: "none",
              "&:hover": { borderColor: "#f9a8d4", borderWidth: "2px" },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#f9a8d4" : "white",
              color: state.isFocused ? "white" : "#171717",
            }),
          }}
        />
      </div>

      {/* Product Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={product.id} className={`w-full ${index % 2 !== 0 ? "md:mt-10 md:mx-2" : ""}`}>
                <ProductCard id={product.id} />
              </div>
              ))
            ) : (
              <p className="pt-12 text-gray-500 text-center col-span-2">No products found.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
