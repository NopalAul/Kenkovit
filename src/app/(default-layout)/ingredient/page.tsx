import type { Metadata } from 'next'


import HeroSection from "@/containers/Ingredient/HeroSection";
import FunctionalIngredient from "@/containers/Ingredient/FunctionalIngredient";


export const metadata: Metadata = {
  title: 'Key Ingredient',
}

export default function Ingredient() {

  return (
    <>
      <HeroSection />
      <FunctionalIngredient />
    </>
  );
}