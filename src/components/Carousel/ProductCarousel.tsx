"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import ProductCard from "@/components/Card/ProductCard";
import products from "@/data/ProductData";

const ProductCarousel = () => {
  return (
    <div className="relative flex items-center justify-between w-full py-12 px-[9vw] bg-white2">
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
          <button className="bg-purple1 text-white px-6 py-3 rounded-full shadow-md flex items-center">
            See More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;
