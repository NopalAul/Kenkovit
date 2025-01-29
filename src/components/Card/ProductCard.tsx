import Image from "next/image";
import Link from "next/link";
import products from "@/data/ProductData";

interface ProductCardProps {
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id }) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  return (
    <Link href={`/product/${id}`} passHref>
      <div className={`cursor-pointer w-[290px] h-[350px] rounded-2xl shadow-cardCombined ${product.bgColor} flex flex-col items-center justify-between transition-transform hover:scale-105`}>
        <div className="px-6 pt-12">
          <Image src={product.image} alt={product.name} height={300} width={300} className="h-60 w-auto" />
        </div>
        <div className={`flex h-[40px] bg-purple1 w-full flex-col items-center justify-center px-4 rounded-b-2xl shadow-card`}>
          <h3 className="text-center font-medium text-white">{product.name}</h3>
          {/* <h4 className="text-white">{desc}</h4> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
