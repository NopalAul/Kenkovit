"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import ProductCard from "@/components/Card/ProductCard";
import products from "@/data/ProductData";

const ProductCarousel = () => {
  return (
    <div className="relative flex flex-col items-center justify-between w-full py-12 px-[9vw] bg-white2">
      {/* Title */}
      <div className="text-3xl font-normal text-purple1 mt-6 mb-6">
        <h2>Our Products</h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        {/* Carousel */}
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="h-[60vh] w-[60vw]"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="flex items-center justify-center">
                <ProductCard id={product.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* "See More" Button */}
        <div className="w-full h-full flex items-center justify-center">
          <Link href="/product">
            <button className="bg-purple1 text-white pl-4 pr-2 py-2 rounded-full shadow-md flex items-center justify-between">
              <div>
                See More
              </div>
              <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center ml-2 text-purple1 font-bold text-lg">
                →
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
