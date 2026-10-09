export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  features: string[]
  specifications: {
    origin: string
    packaging: string
    shelfLife: string
    minimumOrder: string
  }
  isVisible: boolean
  isFeatured: boolean
  hasSpecialOffer: boolean
  specialOfferText?: string
  sortOrder: number
}

export const products: Product[] = [
  {
    id: 'fresh-apples',
    name: 'Premium Fresh Apples',
    category: 'Fresh Fruits',
    image: '/images/products/apples.jpg',
    description: 'Crisp, sweet, and nutritious apples sourced from the finest orchards. Perfect for export in refrigerated containers.',
    features: [
      'Hand-picked premium quality',
      'Optimal ripeness for long transport',
      'Refrigerated container shipping',
      'Multiple varieties available'
    ],
    specifications: {
      origin: 'Turkey, Poland, Italy',
      packaging: '18kg cartons, 1000kg bins',
      shelfLife: '6-8 months refrigerated',
      minimumOrder: '20 tons'
    },
    isVisible: true,
    isFeatured: true,
    hasSpecialOffer: false,
    sortOrder: 1
  },
  {
    id: 'organic-almonds',
    name: 'Organic Raw Almonds',
    category: 'Nuts & Seeds',
    image: '/images/products/almonds.jpg',
    description: 'Premium organic almonds with superior taste and nutritional value. Carefully processed and packaged for global distribution.',
    features: [
      'Certified organic',
      'Raw and unprocessed',
      'High protein content',
      'Vacuum sealed packaging'
    ],
    specifications: {
      origin: 'California, Spain',
      packaging: '10kg, 25kg vacuum bags',
      shelfLife: '18 months',
      minimumOrder: '10 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 3
  },
  {
    id: 'turmeric-powder',
    name: 'Pure Turmeric Powder',
    category: 'Spices & Herbs',
    image: '/images/products/turmeric.jpg',
    description: 'High-quality turmeric powder with rich color and potent curcumin content. Perfect for culinary and medicinal use.',
    features: [
      'High curcumin content',
      'Vibrant golden color',
      'Finely ground texture',
      'Laboratory tested purity'
    ],
    specifications: {
      origin: 'India, Myanmar',
      packaging: '25kg multi-layer bags',
      shelfLife: '36 months',
      minimumOrder: '5 tons'
    },
    isVisible: true,
    isFeatured: true,
    hasSpecialOffer: false,
    sortOrder: 4
  },
  {
    id: 'fresh-oranges',
    name: 'Valencia Oranges',
    category: 'Fresh Fruits',
    image: '/images/products/oranges.jpg',
    description: 'Juicy Valencia oranges with excellent sugar content and minimal seeds. Ideal for fresh consumption and juice production.',
    features: [
      'High juice content',
      'Sweet and tangy flavor',
      'Minimal seed variety',
      'Extended harvest season'
    ],
    specifications: {
      origin: 'Spain, Egypt, South Africa',
      packaging: '15kg cartons, 400kg bins',
      shelfLife: '4-6 weeks refrigerated',
      minimumOrder: '20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: true,
    specialOfferText: 'Early bird discount - 10% off',
    sortOrder: 5
  },
  {
    id: 'red-lentils',
    name: 'Red Split Lentils',
    category: 'Grains & Cereals',
    image: '/images/products/red-lentils.jpg',
    description: 'Premium red split lentils with excellent cooking properties and high protein content. Perfect for international markets.',
    features: [
      'Quick cooking variety',
      'High protein content',
      'Uniform size and color',
      'Machine cleaned and sorted'
    ],
    specifications: {
      origin: 'Turkey, Canada, Australia',
      packaging: '25kg, 50kg PP bags',
      shelfLife: '24 months',
      minimumOrder: '25 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 6
  },
  // Vegetables
  {
    id: 'onion',
    name: 'Fresh Onions',
    category: 'Vegetables',
    image: '/images/products/onion.jpg',
    description: 'High-quality fresh onions in red, yellow, and white varieties. Perfectly sized and packed for freshness.',
    features: [
      'Sizes: 40–80 mm',
      'Red, yellow, and white varieties',
      'Packed in 25 kg mesh bags',
      'Ideal for bulk export and long storage'
    ],
    specifications: {
      origin: 'India, Egypt, China',
      packaging: '25 kg mesh bags',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 7
  },
  {
    id: 'potato',
    name: 'Fresh Potatoes',
    category: 'Vegetables',
    image: '/images/products/potato.jpg',
    description: 'Premium potatoes, available washed or unwashed, sized between 45–75 mm, ideal for diverse culinary uses.',
    features: [
      'Sizes: 45–75 mm',
      'Washed or unwashed options',
      'Packed in 10 kg and 25 kg bags',
      'Sourced from leading potato producing countries'
    ],
    specifications: {
      origin: 'India, Pakistan, Netherlands',
      packaging: '10/25 kg bags',
      shelfLife: '',
      minimumOrder: '20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 8
  },
  {
    id: 'tomato',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    image: '/images/products/tomato.jpg',
    description: 'Varieties including beef, cherry, and Roma tomatoes, available loose or boxed in cartons for freshness.',
    features: [
      'Types: Beef, cherry, Roma',
      'Packed loose or boxed',
      '5–10 kg cartons',
      'Ideal for fresh consumption and processing'
    ],
    specifications: {
      origin: 'Iran, Jordan, Turkey',
      packaging: '5–10 kg cartons',
      shelfLife: '',
      minimumOrder: '18–19 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 9
  },
  {
    id: 'cucumber',
    name: 'Fresh Cucumbers',
    category: 'Vegetables',
    image: '/images/products/cucumber.jpg',
    description: 'Fresh long and short cucumbers, packed in cartons, sourced from multiple countries.',
    features: [
      'Varieties: long and short',
      'Fresh quality',
      'Packed in 5–10 kg cartons',
      'Ideal for salads and fresh markets'
    ],
    specifications: {
      origin: 'Egypt, Netherlands, India',
      packaging: '5–10 kg cartons',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 10
  },
  {
    id: 'carrot',
    name: 'Fresh Carrots',
    category: 'Vegetables',
    image: '/images/products/carrot.jpg',
    description: 'Fresh, cleaned carrots packed in cartons or jute bags, perfect for fresh markets and processing.',
    features: [
      'Fresh and cleaned',
      'Packed in 5–10 kg cartons or jute bags',
      'High quality and fresh',
      'Sourced from China and Australia'
    ],
    specifications: {
      origin: 'China, Australia',
      packaging: '5–10 kg cartons or jute bags',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 11
  },
  {
    id: 'garlic',
    name: 'Fresh Garlic',
    category: 'Vegetables',
    image: '/images/products/garlic.jpg',
    description: 'Fresh garlic bulbs in white and purple varieties, perfectly sized and packed for optimal freshness.',
    features: [
      'Bulb size: 4–6 cm',
      'White and purple varieties',
      'Packed in 10 kg mesh cartons',
      'Ideal for culinary and medicinal use'
    ],
    specifications: {
      origin: 'China, India',
      packaging: '10 kg mesh cartons',
      shelfLife: '',
      minimumOrder: '18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 12
  },
  {
    id: 'green-chili',
    name: 'Fresh Green Chili',
    category: 'Vegetables',
    image: '/images/products/green-chili.jpg',
    description: 'Fresh medium to spicy green chilies, packed for freshness and flavor.',
    features: [
      'Medium/spicy varieties',
      'Fresh quality',
      'Packed in 3–5 kg cartons',
      'Sourced from India, Jordan, Sri Lanka'
    ],
    specifications: {
      origin: 'India, Jordan, Sri Lanka',
      packaging: '3–5 kg cartons',
      shelfLife: '',
      minimumOrder: '15–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 13
  },
  {
    id: 'capsicum',
    name: 'Fresh Capsicum (Bell Pepper)',
    category: 'Vegetables',
    image: '/images/products/capsicum.jpg',
    description: 'Fresh green, red, and yellow bell peppers packed in trays to maintain quality and freshness.',
    features: [
      'Colors: green, red, yellow',
      'Packed in trays',
      'High quality and fresh',
      'Ideal for fresh consumption'
    ],
    specifications: {
      origin: 'Netherlands, Iran, Turkey',
      packaging: 'Trays',
      shelfLife: '',
      minimumOrder: '15–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 14
  },
  {
    id: 'green-peas',
    name: 'Fresh Green Peas',
    category: 'Vegetables',
    image: '/images/products/green-peas.jpg',
    description: 'Fresh or frozen IQF green peas, Class A quality packed in 5 kg bags.',
    features: [
      'Fresh or frozen IQF',
      'Class A quality',
      'Packed in 5 kg bags',
      'Sourced from China and Kenya'
    ],
    specifications: {
      origin: 'China, Kenya',
      packaging: '5 kg bags',
      shelfLife: '',
      minimumOrder: '16–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 15
  },
  {
    id: 'spinach',
    name: 'Fresh Spinach',
    category: 'Vegetables',
    image: '/images/products/spinach.jpg',
    description: 'Fresh sorted spinach packed in cartons or bundles for optimal freshness.',
    features: [
      'Fresh and sorted',
      'Packed in 2–5 kg cartons or bundles',
      'Ideal for fresh consumption',
      'Sourced from India and Kenya'
    ],
    specifications: {
      origin: 'India, Kenya',
      packaging: '2–5 kg cartons/bundles',
      shelfLife: '',
      minimumOrder: '15–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 16
  },
  {
    id: 'okra',
    name: 'Fresh Okra (Bhindi)',
    category: 'Vegetables',
    image: '/images/products/okra.jpg',
    description: 'Whole tender okra, packed in cartons to retain freshness and quality.',
    features: [
      'Whole and tender',
      'Packed in 5–7 kg cartons',
      'Fresh quality',
      'Sourced from India and Egypt'
    ],
    specifications: {
      origin: 'India, Egypt',
      packaging: '5–7 kg cartons',
      shelfLife: '',
      minimumOrder: '14–16 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 17
  },
  {
    id: 'cabbage',
    name: 'Fresh Cabbage',
    category: 'Vegetables',
    image: '/images/products/cabbage.jpg',
    description: 'Green and red cabbage with head sizes 1–2 kg, packed in netted packaging for freshness.',
    features: [
      'Colors: green and red',
      'Head size: 1–2 kg',
      'Netted packaging',
      'Ideal for fresh markets'
    ],
    specifications: {
      origin: 'Iran, India, Netherlands',
      packaging: 'Netted packaging',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 18
  },
  {
    id: 'cauliflower',
    name: 'Fresh Cauliflower',
    category: 'Vegetables',
    image: '/images/products/cauliflower.jpg',
    description: 'Single or bulk trimmed cauliflower heads, boxed for export and freshness.',
    features: [
      'Single or bulk heads',
      'Trimmed and boxed',
      'High quality',
      'Sourced from Jordan and Netherlands'
    ],
    specifications: {
      origin: 'Jordan, Netherlands',
      packaging: 'Boxes',
      shelfLife: '',
      minimumOrder: '15–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 19
  },
  {
    id: 'broccoli',
    name: 'Fresh Broccoli',
    category: 'Vegetables',
    image: '/images/products/broccoli.jpg',
    description: 'Green broccoli florets, chilled and packed in cartons to maintain freshness.',
    features: [
      'Green florets',
      'Chilled storage',
      'Packed in 5–7 kg cartons',
      'Sourced from Spain and Netherlands'
    ],
    specifications: {
      origin: 'Spain, Netherlands',
      packaging: '5–7 kg cartons',
      shelfLife: '',
      minimumOrder: '15–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 20
  },
  {
    id: 'eggplant',
    name: 'Fresh Eggplant',
    category: 'Vegetables',
    image: '/images/products/eggplant.jpg',
    description: 'Long and round fresh eggplants, packed in cartons for freshness and export.',
    features: [
      'Long and round varieties',
      'Fresh quality',
      'Packed in 5 kg cartons',
      'Sourced from India and Jordan'
    ],
    specifications: {
      origin: 'India, Jordan',
      packaging: '5 kg cartons',
      shelfLife: '',
      minimumOrder: '16–18 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 21
  },
  {
    id: 'sweet-corn',
    name: 'Frozen Sweet Corn',
    category: 'Vegetables',
    image: '/images/products/sweet-corn.jpg',
    description: 'Frozen IQF sweet corn packed in various pack sizes, sourced from USA, Thailand, and India.',
    features: [
      'Frozen IQF',
      'Pack sizes: 2.5–10 kg',
      'Premium frozen quality',
      'Ideal for food industry use'
    ],
    specifications: {
      origin: 'USA, Thailand, India',
      packaging: '2.5–10 kg packs',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 22
  },

  // Nuts & Seeds (additional)
  {
    id: 'cashew-nuts',
    name: 'Premium Cashew Nuts',
    category: 'Nuts & Seeds',
    image: '/images/products/cashew-nuts.jpg',
    description: 'High-grade cashew nuts from various countries, perfect for snacking and cooking.',
    features: [
      'Grades: W180, W210, W240, W320',
      'Moisture ≤ 5%',
      'Packaging: 50 lb tins or vacuum packs',
      'Ideal for snacks and sweets'
    ],
    specifications: {
      origin: 'India, Vietnam, Ivory Coast, Tanzania',
      packaging: '50 lb tins or vacuum packs',
      shelfLife: '',
      minimumOrder: '18–19 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 24
  },
  {
    id: 'walnuts',
    name: 'Premium Walnuts',
    category: 'Nuts & Seeds',
    image: '/images/products/walnuts.jpg',
    description: 'Light halves, broken, and in-shell walnuts for baking and retail, packed in cartons.',
    features: [
      'Types: Light halves, light broken, in-shell',
      'Size: 28mm+, 30mm+',
      'Packaging: 10 kg or 25 kg cartons',
      'Perfect for baking and cereals'
    ],
    specifications: {
      origin: 'USA, Ukraine, Chile, China',
      packaging: '10 kg or 25 kg cartons',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 25
  },
  {
    id: 'pistachios',
    name: 'Premium Pistachios',
    category: 'Nuts & Seeds',
    image: '/images/products/pistachios.jpg',
    description: 'Natural and salted pistachios, packed in vacuum or retail packaging.',
    features: [
      'Natural and salted',
      'Vacuum and retail pack',
      'Packaging: 25–50 lb cartons',
      'Great for snacks and cooking'
    ],
    specifications: {
      origin: 'Iran, USA, Turkey',
      packaging: '25–50 lb cartons',
      shelfLife: '',
      minimumOrder: '17–20 tons'
    },
    isVisible: true,
    isFeatured: true,
    hasSpecialOffer: false,
    sortOrder: 26
  },

  // Grains & Cereals (Rice)
  {
    id: 'long-grain-basmati-rice',
    name: 'Long Grain Basmati Rice',
    category: 'Grains & Cereals',
    image: '/images/products/long-grain-basmati-rice.jpg',
    description: 'Premium long grain basmati rice with excellent aroma and grain length, packed for export.',
    features: [
      'Grain length: 6.6–7.5 mm',
      'Aroma: Excellent',
      'Packaging: 50 kg polypropylene bags',
      'Ideal for export and bulk orders'
    ],
    specifications: {
      origin: 'India, Pakistan',
      packaging: '50 kg polypropylene bags',
      shelfLife: '',
      minimumOrder: '18–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: true,
    specialOfferText: '15% off on orders above 100 tons',
    sortOrder: 27
  },
  {
    id: 'short-grain-sella-rice',
    name: 'Short Grain Sella Rice',
    category: 'Grains & Cereals',
    image: '/images/products/short-grain-sella-rice.jpg',
    description: 'High-quality short grain sella rice, perfect for diverse culinary uses.',
    features: [
      'Grain length: 5.5–6.3 mm',
      'Packaging: 50 kg polypropylene bags',
      'Strong grain and good texture',
      'Bulk packaging suitable for industrial use'
    ],
    specifications: {
      origin: 'India, Pakistan',
      packaging: '50 kg polypropylene bags',
      shelfLife: '',
      minimumOrder: '15–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 28
  },
  {
    id: 'jasmine-rice',
    name: 'Jasmine Rice',
    category: 'Grains & Cereals',
    image: '/images/products/jasmine-rice.jpg',
    description: 'Fragrant jasmine rice from Thailand and Cambodia, packed in premium packaging.',
    features: [
      'Origin: Thailand, Cambodia',
      'Aromatic and long grain',
      'Packaging: 25/50 kg polypropylene bags',
      'Popular in Asian cuisines'
    ],
    specifications: {
      origin: 'Thailand, Cambodia',
      packaging: '25/50 kg polypropylene bags',
      shelfLife: '',
      minimumOrder: '15 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 29
  },

  // Cooking Oils
  {
    id: 'sunflower-oil',
    name: 'Sunflower Oil',
    category: 'Cooking Oils',
    image: '/images/products/sunflower-oil.jpg',
    description: 'High-quality sunflower oil for cooking, packed in bulk containers and bottles.',
    features: [
      'Refined sunflower oil',
      'Available in bulk and retail packaging',
      'Packaging: 1–20 L bottles, 180–220 L drums',
      'Shelf stable and premium quality'
    ],
    specifications: {
      origin: 'Ukraine, Argentina, Russia',
      packaging: '1–20 L bottles, 180–220 L drums',
      shelfLife: '',
      minimumOrder: '20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 30
  },
  {
    id: 'soybean-oil',
    name: 'Soybean Oil',
    category: 'Cooking Oils',
    image: '/images/products/soybean-oil.jpg',
    description: 'Pure soybean oil for culinary uses, available in various container sizes.',
    features: [
      'Refined soybean oil',
      'Packaging: 1–20 L bottles, 180–220 L drums',
      'Suitable for cooking and frying',
      'Stable shelf life'
    ],
    specifications: {
      origin: 'USA, Brazil, Argentina',
      packaging: '1–20 L bottles, 180–220 L drums',
      shelfLife: '',
      minimumOrder: '15–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 31
  },

  // Meat & Poultry
  {
    id: 'frozen-chicken',
    name: 'Frozen Chicken',
    category: 'Meat & Poultry',
    image: '/images/products/frozen-chicken.jpg',
    description: 'High-quality frozen chicken in bulk packaging, ideal for export and processing.',
    features: [
      'Bulk packaging: 10–20 kg cartons or 25–40 kg cartons',
      'Grade A quality',
      'Sourced from multiple countries',
      'Ideal for wholesale and processing'
    ],
    specifications: {
      origin: 'Brazil, USA, EU',
      packaging: '10–20 kg or 25–40 kg cartons',
      shelfLife: '',
      minimumOrder: '15–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 32
  },
  {
    id: 'frozen-beef',
    name: 'Frozen Beef',
    category: 'Meat & Poultry',
    image: '/images/products/frozen-beef.jpg',
    description: 'Frozen beef cuts packed in cartons, premium quality for export and processing.',
    features: [
      'Bulk packaging: 10–25 kg cartons',
      'Grade A quality',
      'Ideal for wholesale and industrial use'
    ],
    specifications: {
      origin: 'Brazil, Argentina, USA',
      packaging: '10–25 kg cartons',
      shelfLife: '',
      minimumOrder: '15 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 33
  },

  // Fish & Seafood
  {
    id: 'frozen-prawns',
    name: 'Frozen Prawns',
    category: 'Fish & Seafood',
    image: '/images/products/frozen-prawns.jpg',
    description: 'High-grade frozen prawns packed in 4–5 kg cartons, perfect for retail and wholesale.',
    features: [
      'Packed in 4–5 kg cartons',
      'IQF frozen',
      'Sourced from Vietnam, India, Bangladesh',
      'Fresh and premium quality'
    ],
    specifications: {
      origin: 'Vietnam, India, Bangladesh',
      packaging: '4–5 kg cartons',
      shelfLife: '',
      minimumOrder: '15 tons'
    },
    isVisible: true,
    isFeatured: true,
    hasSpecialOffer: false,
    sortOrder: 34
  },
  {
    id: 'frozen-fish-fillet',
    name: 'Frozen Fish Fillet',
    category: 'Fish & Seafood',
    image: '/images/products/frozen-fish-fillet.jpg',
    description: 'Frozen fish fillets in bulk packaging, suitable for retail and industrial use.',
    features: [
      'Bulk packaging in cartons',
      'IQF frozen',
      'Premium quality fillets',
      'Suitable for retail and food service'
    ],
    specifications: {
      origin: 'Vietnam, India, Bangladesh',
      packaging: '10–25 kg cartons',
      shelfLife: '',
      minimumOrder: '15–20 tons'
    },
    isVisible: true,
    isFeatured: false,
    hasSpecialOffer: false,
    sortOrder: 35
  }
]

export const categories = [
  'All Products',
  'Fresh Fruits',
  'Vegetables',
  'Nuts & Seeds',
  'Grains & Cereals',
  'Cooking Oils',
  'Spices & Herbs',
  'Meat & Poultry',
  'Fish & Seafood'
]

// Helper functions for product management
export const getVisibleProducts = () => products.filter(product => product.isVisible)
export const getFeaturedProducts = () => products.filter(product => product.isVisible && product.isFeatured)
export const getProductsByCategory = (category: string) => {
  if (category === 'All Products') return getVisibleProducts()
  return products.filter(product => product.isVisible && product.category === category)
}
export const getProductById = (id: string) => products.find(product => product.id === id)
export const getSpecialOfferProducts = () => products.filter(product => product.isVisible && product.hasSpecialOffer)
