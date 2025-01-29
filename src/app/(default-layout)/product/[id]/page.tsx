'use client';

import { useParams } from "next/navigation";
import products from "@/data/ProductData";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div className="flex items-center justify-center h-screen text-2xl font-bold">
      Product {id}
    </div>
  );
};

export default ProductDetail;
