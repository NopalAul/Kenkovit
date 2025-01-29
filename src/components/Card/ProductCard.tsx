import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, bgColor }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className={`cursor-pointer w-[290px] h-[350px] rounded-2xl shadow-cardCombined ${bgColor} flex flex-col items-center justify-between transition-transform hover:scale-105`}>
        <div className="px-6 pt-12">
          <Image src={image} alt={name} height={300} width={300} className="h-60 w-auto" />
        </div>
        {/* <h3 className="mt-4 text-center font-semibold">{name}</h3> */}
        <div className={`flex h-[40px] bg-purple1 w-full flex-col items-center justify-center px-4 rounded-b-2xl shadow-card`}>
          <h3 className="text-center font-medium text-white">{name}</h3>
          {/* <h4 className="text-white">{desc}</h4> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
