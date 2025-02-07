const products = [
  {
    id: 1,
    category: "beauty",
    name: "Kenkovit Beauty Collagen",
    image: "/images/Product/beauty_collagen_shadow.png",
    bgColor: "bg-white",
    description:
      "Kenkovit Beauty Collagen is a premium beauty supplement formulated with Japan Marine Collagen, Astaxanthin, and Natural Vitamin E to nourish and revitalize your skin from within.",
    benefits: [
      "Anti-wrinkles & fine lines",
      "Anti-aging support",
      "Skin moisturizer & hydration",
      "Fades and prevents dark spots",
      "Promotes skin cell regeneration",
    ],
    ingredients: [
      "Marine Collagen – 300 mg",
      "Astaxanthin – 2000 mcg",
      "Natural Vitamin E – 55 IU",
    ],
    specifications: [
      "30 capsules per bottle",
      "Each capsule contains 300 mg of high-quality collagen",
    ],
    usage:
      "Take 2-4 capsules daily (600-1200 mg of collagen) for optimal results. Safe for pregnant and breastfeeding women.",
  },
  {
    id: 2,
    category: "beauty",
    name: "Kenkovit Beauty Bright",
    image: "/images/Product/beauty_bright_shadow.png",
    bgColor: "bg-pink-100",
    description:
      "Kenkovit Beauty Bright is a premium beauty supplement formulated with Glutathione, Japan Marine Collagen, and Herbal Extracts to promote brighter, healthier skin.",
    benefits: [
      "Brightens and evens skin tone",
      "Reduces wrinkles & fine lines",
      "Anti-aging support",
      "Skin moisturizer & hydration",
      "Fades and prevents dark spots",
      "Promotes skin cell regeneration",
    ],
    ingredients: [
      "Hibiscus Sabdariffa Flos Extract – 500 mg",
      "Marine Collagen – 200 mg",
      "Glutathione Reduced – 200 mg",
    ],
    specifications: [
      "30 capsules per bottle",
      "Each capsule contains 200 mg of high-quality collagen",
      "Each capsule contains 200 mg of premium Glutathione Reduced",
    ],
    usage:
      "Take 2-4 capsules daily for optimal results. Safe for pregnant and breastfeeding women.",
  },
  {
    id: 3,
    category: "beauty",
    name: "Kenkovit Creamy Chocolate",
    image: "/images/Product/choco_shadow.png",
    bgColor: "bg-white",
    description:
      "Kenkovit Creamy Chocolate Drink is a high-collagen supplement featuring hydrolyzed marine collagen from Japan. Enriched with Vitamin E and Vitamin C, it promotes skin, nail, hair, and joint health.",
    benefits: [
      "Anti-Aging: Helps prevent premature aging",
      "Anti-Wrinkle: Reduces wrinkles and fine lines",
      "Skin Moisturization: Deeply hydrates the skin",
      "Brightening: Prevents and reduces dark spots",
      "Cell Regeneration: Promotes healthy skin cell turnover",
    ],
    ingredients: [
      "Marine Collagen: 2500 mg",
      "Natural Vitamin E: 100 mg",
      "Vitamin C: 100 IU",
    ],
    specifications: ["1 box contains 6 sachets (25 grams each)"],
    usage: "Consume 1 sachet daily for optimal results. Safe for pregnant and breastfeeding women.",
  },
  {
    id: 4,
    category: "beauty",
    name: "Kenkovit Moist Spray",
    image: "/images/Product/moist_spray.png",
    bgColor: "bg-pink-100",
    description:
      "Kenkovit Moist Spray is a multifunctional hydrating mist designed to nourish, brighten, and combat signs of aging. Infused with hydrolyzed marine collagen and brightening polypeptides.",
    benefits: [
      "Hydration: Provides lasting moisture",
      "Anti-Aging: Helps prevent early signs of aging",
      "Makeup Setting: Setting spray for prolonged makeup wear",
    ],
    ingredients: ["Marine Collagen", "Brightening Agent (Polypeptide)"],
    specifications: ["1 bottle (60 ml)"],
    usage: "Spray twice daily as a moisturizer or makeup setting spray.",
  },
  {
    id: 5,
    category: "beauty",
    name: "Kenkovit Perfumed Body Cream",
    image: "/images/Product/perfumed_body_cream.png",
    bgColor: "bg-white",
    description:
      "Kenkovit Perfumed Body Cream is a luxurious moisturizer with Organic Sea Butter, Cocoa Butter, Vegan Oil, and Vitamin E. It deeply hydrates, brightens, and prevents premature aging.",
    benefits: [
      "Hydration: Deeply moisturizes the skin",
      "Brightening: Enhances skin tone and clarity",
      "Anti-Aging: Helps prevent early signs of aging",
      "Cell Regeneration: Supports the renewal of skin cells",
    ],
    ingredients: [
      "Organic Sea Butter",
      "Cocoa Butter",
      "Vegan Oil",
      "Essential Oils",
      "Vitamin E",
    ],
    specifications: ["1 bottle (100 ml)"],
    usage: "Apply after bathing or before bedtime, reapply in dry conditions.",
  },
  {
    id: 6,
    category: "health",
    name: "Kenkovit Hand Sanitizer",
    image: "/images/Product/hand_sanitizer_shadow.png",
    bgColor: "bg-pink-100",
    description:
      "Kenkovit Hand Sanitizer is a food-grade hand cleanser with 70% ethanol and aloe vera extract. It effectively kills bacteria while keeping hands soft and hydrated.",
    benefits: [
      "Bactericidal: Kills 99.9% of bacteria, viruses, and germs",
      "Premium Food-Grade Formula: 70% ethanol, non-irritating and safe",
      "Moisturizing: Contains aloe vera extract to hydrate the skin",
      "Quick Drying: Dries rapidly without stickiness",
      "Family Safe: Gentle enough for everyday use",
    ],
    ingredients: ["Food-Grade Ethanol (70%)", "Aloe Vera Extract"],
    specifications: [
      "Available in 1L, 250ml, or 60ml (spray/flip bottle)",
      "Fragrances: Apple, Strawberry, Orange",
    ],
    usage:
      "Spray onto the palms as needed or directly onto surfaces for disinfection.",
  },
  {
    id: 7,
    category: "health",
    name: "Kenkovit Vitamin C & E",
    image: "/images/Product/vitamin_c_e.png",
    bgColor: "bg-yellow-100",
    description:
      "Kenkovit Vitamin C & E combines essential nutrients to boost immunity, support collagen production, and enhance skin health.",
    benefits: [
      "Boosts Immunity: Strengthens the body’s natural defenses",
      "Supports Collagen Formation: Promotes skin health and elasticity",
      "Prevents Canker Sores: Reduces mouth ulcers",
      "Enhances Skin Health: Protects cells and maintains skin integrity",
    ],
    ingredients: ["Vitamin C – 500 mg", "Vitamin E – 400 IU"],
    specifications: ["1 bottle contains 30 capsules"],
    usage: "Take one capsule daily for optimal benefits.",
  },
  {
    id: 8,
    category: "health",
    name: "Kenkovit Herba Bee Pollen",
    image: "/images/Product/herba_bee_pollen.png",
    bgColor: "bg-orange-100",
    description:
      "Kenkovit Herba Bee Pollen is a blend of herbal extracts and bee pollen to support digestive health, boost immunity, and provide natural energy.",
    benefits: [
      "Enhances Immune Function: Boosts natural defenses",
      "Natural Energy Source: Provides essential nutrients",
      "Supports Digestive Health: Prevents digestive discomfort",
      "Antioxidant Protection: Neutralizes free radicals",
    ],
    ingredients: ["Bee Pollen", "Turmeric", "Ginger", "Java Turmeric"],
    specifications: ["1 bottle contains 30 capsules"],
    usage: "Take one capsule daily for optimal benefits.",
  },
];

export default products;
