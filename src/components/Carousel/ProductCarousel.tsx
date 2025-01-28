"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Kenkovit Beauty Collagen",
    image: "/images/Product/beauty_collagen.png",
    bgColor: "bg-white",
  },
  {
    id: 2,
    name: "Kenkovit Beauty Bright",
    image: "/images/Product/beauty_bright.png",
    bgColor: "bg-pink-100",
  },
  {
    id: 3,
    name: "Kenkovit Choco",
    image: "/images/Product/choco.jpg",
    bgColor: "bg-white",
  },
];

const ProductCarousel = () => {
  return (
    <div className="relative flex items-center justify-between w-full py-12 px-[9vw] bg-white2">
      {/* Carousel */}
      <div>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            }}
            className="h-[60vh] w-[60vw]"
        >
            {products.map((product) => (
            <SwiperSlide key={product.id} className="flex items-center justify-center">
                <div className={`w-[290px] h-[350px] p-6 rounded-2xl shadow-cardCombined ${product.bgColor} flex flex-col items-center justify-center`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    height={300}
                    width={300}
                    className="h-60 w-auto"
                />
                <h3 className="mt-4 text-center font-semibold">{product.name}</h3>
                </div>
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
