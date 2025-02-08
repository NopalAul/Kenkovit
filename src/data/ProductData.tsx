const products = [
  {
    id: 1,
    category: "beauty",
    name: "Kenkovit Beauty Collagen",
    image: "/images/Product/beauty_collagen_shadow.svg",
    bgColor: "bg-white",
    description:
      "Premium beauty supplement formulated with Japan Marine Collagen, Astaxanthin, and Natural Vitamin E to nourish and revitalize your skin from within. Marine Collagen, sourced from deep-sea fish in Japan, halal-certified, and hydrolyzed for superior absorption (<5000 kDalton). Astaxanthin, a powerful antioxidant, 6000x stronger than Vitamin E, derived from purified Japanese marine algae and encapsulated to maintain its potency.",
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
    image: "/images/Product/beauty_bright_shadow.svg",
    bgColor: "bg-pink-100",
    description:
      "Premium beauty supplement formulated with Glutathione, Japan Marine Collagen, and Herbal Extracts to promote brighter, healthier skin.  Glutathione Reduced, a high-quality whitening agent proven by research from top global universities effectively lighten skin tone and improve skin clarity.  Marine Collagen, supports skin elasticity, hydration, and anti-aging benefits.",
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
    image: "/images/Product/choco_shadow.svg",
    bgColor: "bg-white",
    description:
      "The ultimate high-collagen drink, featuring hydrolyzed marine collagen sourced directly from Japan for its exceptional quality.  Enhanced with natural Vitamin E and Vitamin C, this product harnesses powerful antioxidants that work synergistically to regenerate cells and prevent damage. The advanced blend not only supports skin health but also benefits your nails, hair, and joints.",
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
    image: "/images/Product/moist_spray.svg",
    bgColor: "bg-pink-100",
    description:
      "Multifunctional hydrating mist designed to nourish, brighten, and prevent signs of aging. Its optimal humectant formula delivers intense moisture to your face, hands, and body. Infused with hydrolyzed marine collagen from halal-certified deep-sea Japanese fish, it ensures superior absorption, while its brightening agents (polypeptides) enhance your skin’s radiance for a revitalized look.",
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
    image: "/images/Product/perfumed_body_cream.svg",
    bgColor: "bg-white",
    description:
      "Specially formulated for those who desire soft, smooth skin with a luminous glow. Crafted with premium natural ingredients—including Organic Sea Butter, Cocoa Butter, Vegan Oil, and Essential Oils enriched with Natural Vitamin E—this cream quickly absorbs to prevent premature aging. Enhanced with imported whitening agents from Japan and Germany, it effectively brightens your skin.",
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
    image: "/images/Product/hand_sanitizer_shadow.svg",
    bgColor: "bg-pink-100",
    description:
      "Convenient hand cleanser designed to protect against germs, bacteria, and viruses. Formulated with 70% food-grade ethanol and enriched with aloe vera extract, it cleans effectively without leaving a sticky residue and dries quickly. Made with pure ethanol, this sanitizer is exceptionally safe for families, including children, and is proven to sanitize while moisturizing the skin.",
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
    image: "/images/Product/vitamin_c_e.svg",
    bgColor: "bg-white",
    description:
      "Vital supplement that combines two essential nutrients to support your overall health. Each capsule delivers a potent dose of Vitamin C (500 mg) to boost immune function   and promote collagen formation  Complemented by Vitamin E (400 IU), a powerful antioxidant that supports healthy skin and cell membranes, this combination is ideal for enhancing your body’s immune system.",
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
    image: "/images/Product/herba_bee_pollen.svg",
    bgColor: "bg-pink-100",
    description:
      "Unique blend of potent herbal extracts and  bee pollen designed to support digestive health, boost immunity, and provide a natural energy source. This formula features a synergistic mix of natural herbs, including turmeric, ginger, and Java turmeric combined with bee pollen. It harnesses high antioxidant properties to naturally booster your immune system and overall vitality.",
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
