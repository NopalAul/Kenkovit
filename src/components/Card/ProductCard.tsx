import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  bgColor: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, bgColor }) => {
  return (
    <div
      className={`w-[290px] h-[350px] p-6 rounded-2xl shadow-cardCombined ${bgColor} flex flex-col items-center justify-center`}
    >
      <Image src={image} alt={name} height={300} width={300} className="h-60 w-auto" />
      <h3 className="mt-4 text-center text-purple1 font-semibold">{name}</h3>
    </div>
  );
};

export default ProductCard;
