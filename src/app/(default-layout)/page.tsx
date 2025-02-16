import HeroSection from "@/containers/Home/HeroSection";
import Home from "@/containers/Home/Home";
import ProductCarousel from "@/components/Carousel/ProductCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Home />
      <ProductCarousel />
    </>
  );
}
