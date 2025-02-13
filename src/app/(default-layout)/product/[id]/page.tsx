import type { Metadata } from 'next'

import ProductDetail from "@/containers/Product/ProductDetail";


export const metadata: Metadata = {
  title: 'Product Detail',
}

const ProductDetailPage = () => {

  return (
    <ProductDetail />
  );
};

export default ProductDetailPage;
