import Link from "next/link";

const NotFoundHero = () => {
  return (
    <div className="relative w-full h-[98vh] flex justify-center items-center overflow-x-hidden pb-14">
      <div className="absolute flex flex-col items-center text-center md:items-start md:text-left md:ml-[9vw] px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-purple1 mb-4">
          <span className="block">Lost in the beauty of the internet?</span>
          {/* <span>Make your own destiny.</span> */}
        </h1>

        <p className="mt-1 md:mt-4 text-sm md:text-lg font-normal md:mr-[48vw] max-w-[90%] md:max-w-[40vw]">
          This page doesn’t exist, but your journey doesn’t end here. 
        </p>
        {/* clickable go 'back home' */}
        <div className="flex items-center text-sm">
          <p>Go </p>
          <Link href="/">
            <p className="ml-1 text-md text-purple1 font-bold hover:underline cursor-pointer 
            ">Back Home.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundHero;
