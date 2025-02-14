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
      <div className={`cursor-pointer max-w-[250px] w-[full] md:w-[290px] md:h-[350px] rounded-2xl shadow-card2 md:shadow-cardCombined ${product.bgColor} flex flex-col items-center justify-between transition-transform hover:scale-105`}>
        <div className="md:px-6 px-auto pt-4 w-full md:pt-12 flex items-center justify-center">
          <Image src={product.image} alt={product.name} height={300} width={300} className="ml-3 md:ml-4 h-[200px] md:h-60 w-auto" />
        </div>
        <div className={`flex h-[50px] md:h-[40px] bg-purple1 w-full flex-col items-center justify-center px-4 rounded-b-xl md:rounded-b-2xl shadow-card3 md:shadow-card `}>
          <h3 className="text-center text-sm md:text-md font-normal md:font-medium text-white">{product.name}</h3>
          {/* <h4 className="text-white">{desc}</h4> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
