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
      <div
        className={`cursor-pointer w-[290px] h-[350px] p-6 rounded-2xl shadow-cardCombined ${bgColor} flex flex-col items-center justify-center transition-transform hover:scale-105`}
      >
        <Image src={image} alt={name} height={300} width={300} className="h-60 w-auto" />
        <h3 className="mt-4 text-center font-semibold">{name}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
