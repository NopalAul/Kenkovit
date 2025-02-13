import type { Metadata } from 'next'

import ProductList from "@/containers/Product/ProductList";


export const metadata: Metadata = {
  title: 'Products',
}

const ProductPage = () => {

  return (
    <ProductList />
  );
};

export default ProductPage;
