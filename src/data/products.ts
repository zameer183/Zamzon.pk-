import { Product, Category } from '@/types'

// Categories - updated with proper subcategories
export const categories: Category[] = [
  {
    id: 'electronics',
    name: { en: 'Electronics', ur: 'الیکٹرانکس' },
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
    subcategories: [
      { id: 'cameras', name: { en: 'Cameras', ur: 'کیمرے' }, slug: 'cameras', image: '' },
      { id: 'audio', name: { en: 'Audio', ur: 'آڈیو' }, slug: 'audio', image: '' },
      { id: 'accessories', name: { en: 'Accessories', ur: 'لوازمات' }, slug: 'accessories', image: '' }
    ]
  },
  {
    id: 'beauty',
    name: { en: 'Beauty & Care', ur: 'خوبصورتی اور دیکھ بھال' },
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    subcategories: [
      { id: 'makeup', name: { en: 'Makeup', ur: 'میک اپ' }, slug: 'makeup', image: '' },
      { id: 'fragrance', name: { en: 'Fragrance', ur: 'خوشبو' }, slug: 'fragrance', image: '' }
    ]
  },
  {
    id: 'shoes',
    name: { en: 'Shoes', ur: 'جوتے' },
    slug: 'shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    subcategories: [
      { id: 'women-shoes', name: { en: 'Women\'s Shoes', ur: 'خواتین کے جوتے' }, slug: 'women-shoes', image: '' },
      { id: 'men-shoes', name: { en: 'Men\'s Shoes', ur: 'مردوں کے جوتے' }, slug: 'men-shoes', image: '' },
      { id: 'slippers', name: { en: 'Slippers', ur: 'چپل' }, slug: 'slippers', image: '' }
    ]
  },
  {
    id: 'clothing',
    name: { en: 'Clothing', ur: 'کپڑے' },
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
    subcategories: [
      { id: 'women-clothing', name: { en: 'Women\'s Clothing', ur: 'خواتین کے کپڑے' }, slug: 'women-clothing', image: '' }
    ]
  }
]

// New products - updated with all new products from zamzon pictures
export const products: Product[] = [
  // Electronics - Cameras
  {
    id: '1',
    name: { en: 'Mini Camera SQ11', ur: 'منی کیمرا SQ11' },
    description: {
      en: 'Delivery free • Material: ABS Plastic • Color: Black • Package Includes: 1 x Camera • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: اے بی ایس پلاسٹک • رنگ: کالا • پیکیج میں شامل ہے: 1 x کیمرا • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1950,
    originalPrice: 2500,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/products/mini-camera-sq11-1.jpg',
      '/products/mini-camera-sq11-2.jpg',
      '/products/mini-camera-sq11-3.jpg'
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.3,
    reviewCount: 12,
    tags: ['camera', 'mini', 'spy'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon'
  },
  {
    id: '2',
    name: { en: 'Mini Camera A9', ur: 'منی کیمرا A9' },
    description: {
      en: 'Delivery free • Material: Plastic • Product Feature: Mini, Clear Vision, Lightweight Design, Long Range, Adjustable Focus, Durable Build • Color: Black • Package Includes: 1 x Camera • Model Number: 9 • Battery Capacity: 1800 mAh • Standby Time: 12 Hours • Voltage: 9 A • Weight: 460 Gram • Length: 3 Inches • Width: 2.5 Inches • Height: 3 Inches • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur due to lighting/monitor.',
      ur: 'فری ڈیلیوری • مواد: پلاسٹک • پروڈکٹ فیچر: منی، واضح وژن، ہلکا پھلکا ڈیزائن، طویل رینج، ایڈجسٹ ایبل فوکس، پائیدار تعمیر • رنگ: کالا • پیکیج میں شامل ہے: 1 x کیمرا • ماڈل نمبر: 9 • بیٹری کی گنجائش: 1800 ایم اے ایچ • اسٹینڈ بائی وقت: 12 گھنٹے • وولٹیج: 9 اے • وزن: 460 گرام • لمبائی: 3 انچ • چوڑائی: 2.5 انچ • اونچائی: 3 انچ • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1499,
    originalPrice: 2000,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/products/mini-camera-a9-1.jpg',
      '/products/mini-camera-a9-2.jpg',
      '/products/mini-camera-a9-3.jpg'
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.4,
    reviewCount: 18,
    tags: ['camera', 'mini', 'security'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon'
  },
  {
    id: '3',
    name: { en: '360 View Security Camera', ur: '360 ڈگری سیکیورٹی کیمرا' },
    description: {
      en: 'Delivery free • Material: Metal • Product Feature: Mini, Lightweight Design, Long Range, Clear Vision • Color: White • Package Includes: 1 x 360 View Security Camera • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: دھات • پروڈکٹ فیچر: منی، ہلکا پھلکا ڈیزائن، طویل رینج، واضح وژن • رنگ: سفید • پیکیج میں شامل ہے: 1 x 360 ویو سیکیورٹی کیمرا • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ س�� ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 3499,
    originalPrice: 4200,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/products/security-camera-360-1.jpg',
      '/products/security-camera-360-2.jpg',
      '/products/security-camera-360-3.jpg'
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.5,
    reviewCount: 20,
    tags: ['camera', 'security', '360'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon'
  },
  {
    id: '4',
    name: { en: 'Bluetooth M10', ur: 'بلوٹوتھ M10' },
    description: {
      en: 'Delivery free • Material: ABS Plastic • Connectivity Tech: Bluetooth • Bluetooth Version: Bluetooth 5.1 • Product Feature: Long-Lasting Battery With Fast Charge, Smart Touch, Power On/Off, Answer, Redial, Hang Up, Play, Pause, Next Track • Package Includes: 1 x Earbuds, 1 x Charger Cable • Battery Capacity: 800 mAh • Call Time: 4 Hours • Standby Time: 72 Hours • Voltage: 5 Volts • Watts: 5 Watt • Weight: 200 Kgs • Length: 10 Inches • Width: 6 Inches • Height: 3 Inches • Pack Of 1 • Color: Black • Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.',
      ur: 'فری ڈیلیوری • مواد: اے بی ایس پلاسٹک • کنیکٹیو��ٹی ٹیک: بلوٹوتھ • بلوٹوتھ ورژن: بلوٹوتھ 5.1 • پروڈکٹ فیچر: طویل بیٹری لائف کے ساتھ تیز چارج، سمارٹ ٹچ، پاور آن/آف، جواب، ریڈائل، ہینگ اپ، پلے، پاز، اگلا ٹریک • پیکیج میں شامل ہے: 1 x ایئربڈز، 1 x چارجر کیبل • بیٹری کی گنجائش: 800 ایم اے ایچ • کال کا وقت: 4 گھنٹے • اسٹینڈ بائی وقت: 72 گھنٹے • وولٹیج: 5 وولٹ • واٹس: 5 واٹ • وزن: 200 کلوگرام • لمبائی: 10 انچ • چوڑائی: 6 انچ • اونچائی: 3 انچ • پیک آف 1 • رنگ: کالا • نوٹ: براہ کرم مناسب استعمال اور حفاظتی احتیاطی تدابیر کے لیے صارف دستی میں دی گئی ہدایات پر عمل کریں۔'
    },
    price: 1400,
    originalPrice: 1800,
    category: 'electronics',
    subcategory: 'audio',
    images: [
      '/products/bluetooth-m10-1.jpg',
      '/products/bluetooth-m10-2.jpg',
      '/products/bluetooth-m10-3.jpg'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.2,
    reviewCount: 15,
    tags: ['bluetooth', 'audio', 'wireless'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Audio'
  },
  {
    id: '5',
    name: { en: 'Tripod Stand', ur: 'ٹرائی پوڈ اسٹینڈ' },
    description: {
      en: 'Delivery free • Material: ABS Plastic • Color: Black • Package Includes: 1 x Tripod Stand • Note: Please follow usage instructions in manual.',
      ur: 'فری ڈیلیوری • مواد: اے بی ایس پلاسٹک • رنگ: کالا • پیکیج میں شامل ہے: 1 x ٹرائی پوڈ اسٹینڈ • نوٹ: براہ کرم استعمال کی ہدایات پر عمل کریں۔'
    },
    price: 999,
    originalPrice: 1200,
    category: 'electronics',
    subcategory: 'accessories',
    images: [
      '/products/tripod-stand-1.jpg',
      '/products/tripod-stand-2.jpg',
      '/products/tripod-stand-3.jpg'
    ],
    inStock: true,
    stockQuantity: 30,
    rating: 4.0,
    reviewCount: 8,
    tags: ['tripod', 'camera', 'stand'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon'
  },
  // Beauty Products
  {
    id: '6',
    name: { en: '4 in 1 Makeup', ur: '4 ان 1 میک اپ' },
    description: {
      en: 'Delivery free • Choose from a variety of eye shadow shades in a single palette • Create endless eye makeup looks from subtle to dramatic • Blendable formula for seamless transitions • Buildable foundation coverage • 1 × Pen liner • 1 × Mascara • 1 × Foundation • 1 × Lip and cheek Tint • Package Includes: 1 x 4 in-1 Makeup Deal • Disclaimer: Always patch test before use and read warning labels.',
      ur: 'فری ڈیلیوری • ایک ہی پیلیٹ میں مختلف آئی شڈو شیڈز میں سے انتخاب ک��یں • نازک سے ڈرامائی تک لامحدود آئی میک اپ لکس بنائیں • سیملیس ٹرانزیشن کے لیے بلینڈ ایبل فارمولا • بلڈ ایبل فاؤنڈیشن کوریج • 1 × پین لائنر • 1 × مسکارا • 1 × فاؤنڈیشن • 1 × لپ اینڈ چیک ٹنٹ • پیکیج میں شامل ہے: 1 x 4 ان 1 میک اپ ڈیل • ڈس کلیمر: استعمال سے پہلے ہمیشہ پیچ ٹیسٹ کریں اور وارننگ لیبلز پڑھیں۔'
    },
    price: 1499,
    originalPrice: 2000,
    category: 'beauty',
    subcategory: 'makeup',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 45,
    rating: 4.4,
    reviewCount: 25,
    tags: ['makeup', 'kit', '4in1', 'beauty'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Beauty'
  },
  {
    id: '7',
    name: { en: '6 in 1 Makeup', ur: '6 ان 1 میک اپ' },
    description: {
      en: 'Delivery free • Essence Extreme Mascara (Long Lasting, Volumizing) • Tint (Used for lips, cheeks, and eyes) ��� Sunisa BB CC Foundation (Lightweight full coverage) • Highly pigmented formula • Mythical radiance glow • Apply to high points or mix into foundation for glow.',
      ur: 'فری ڈیلیوری • ایسنس ایکسٹریم مسکارا (طویل دیرپا، والیومائزنگ) • ٹنٹ (ہونٹوں، گالوں اور آنکھوں کے لیے استعمال ہوتا ہے) • سنیسا بی بی سی سی فاؤنڈیشن (ہلکی مکمل کوریج) • ہائی پگمنٹڈ فارمولا • مائتھیکل ریڈیئنس گلو • ہائی پوائنٹس پر لگائیں یا گلو کے لیے فاؤنڈیشن میں مکس کریں۔'
    },
    price: 1365,
    originalPrice: 1800,
    category: 'beauty',
    subcategory: 'makeup',
    images: [
      'https://images.unsplash.com/photo-1631214540115-4d4aba346def?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1609205002927-8c69c0b6a332?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1616683693484-3fd7169a5cc3?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.6,
    reviewCount: 30,
    tags: ['makeup', 'kit', '6in1', 'premium'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Beauty'
  },
  {
    id: '8',
    name: { en: '5 Perfume', ur: '5 پرفیوم' },
    description: {
      en: 'Delivery free • Fragrance: Lavender, Bergamot, Vanilla, Lemon, Grapefruit, Rose, Jasmine, Peppermint, Eucalyptus, Orange Blossom, Ylang-Ylang, Amber • Material: Liquid • Product Feature: Long Lasting, Pocket Perfume • Top Notes: Lavender, Lemon, Rose, Peppermint, Orange Blossom • Middle Notes: Bergamot, Grapefruit, Jasmine, Eucalyptus, Ylang Ylang • Base Notes: Vanilla, Amber • Gender: Unisex • Package Includes: 5 x Tester Perfumes',
      ur: 'فری ڈیلیوری • خوشبو: لیونڈر، برگموٹ، ونیلا، لیموں، گریپ فروٹ، گلاب، چنبیلی، پودینہ، یوکلپٹس، اورنج بلاسم، ایلنگ ایلنگ، امبر • مواد: مائع • پروڈکٹ فیچر: لمبی دیرپا، جیب پرفیوم • ٹپ نوٹس: لیونڈر، لیموں، گلاب، پودینہ، اورنج بلاسم • مڈل نوٹس: برگموٹ، گریپ فروٹ، چنبیلی، یوکلپٹس، ایلنگ ایلنگ • بیس نوٹس: ونیلا، امبر • جنڈر: یونیسیکس • پیکیج میں شامل ہے: 5 x ٹیسٹر پرفیومز'
    },
    price: 1115,
    originalPrice: 1500,
    category: 'beauty',
    subcategory: 'fragrance',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571605495719-16ef4b7b7f2e?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.3,
    reviewCount: 20,
    tags: ['perfume', 'set', '5pcs', 'unisex'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Fragrance'
  },
  {
    id: '9',
    name: { en: 'Unisex Long Lasting 100 ml', ur: 'یونیسیکس لمبی دیرپا 100 مل' },
    description: {
      en: 'Delivery free • Material: Liquid • Gender Type: Unisex • Package Includes: 1 x Perfume • Main Accords: Fruity, Sweet, Leather, Smoky, Woody • Note: For external use only. Patch test before regular use, Discontinue if irritation occurs. Avoid contact with eyes.',
      ur: 'فری ڈیلیوری • مواد: مائع • جنڈر ٹائپ: یونیسیکس • پیکیج میں شامل ہے: 1 x پرفیوم • مین اکارڈز: فروٹی، میٹھا، لیدر، دھواں، ووڈی • نوٹ: صرف بیرونی استعمال کے لیے۔ باقاعدہ استعمال سے پہلے پیچ ٹیسٹ کریں، اگر جلن ہو تو استعمال بند کر دیں۔ آنکھوں سے رابطہ سے بچیں۔'
    },
    price: 1225,
    originalPrice: 1500,
    category: 'beauty',
    subcategory: 'fragrance',
    images: [
      '/products/perfume-unisex.jpg',
      'https://images.unsplash.com/photo-1594736797933-d0c3c3d1f052?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.5,
    reviewCount: 35,
    tags: ['perfume', 'unisex', 'long-lasting', '100ml'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Fragrance'
  },
  // Shoes
  {
    id: '10',
    name: { en: 'Womens PU Flats', ur: 'خواتین کے پی یو فلیٹس' },
    description: {
      en: 'Delivery free • Material: PU • Pattern: Handmade • Gender: Women\'s • Available Sizes: 7, 8, 9, 10, 11 • Package Includes: 1 x Chappal Pair • Note: Slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: پی یو • پیٹرن: ہینڈ میڈ • جنڈر: خواتین • دس��یاب سائز: 7، 8، 9، 10، 11 • پیکیج میں شامل ہے: 1 x چپل جوڑا • نوٹ: مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1275,
    originalPrice: 1600,
    category: 'shoes',
    subcategory: 'women-shoes',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.2,
    reviewCount: 15,
    tags: ['shoes', 'flats', 'women', 'pu'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Footwear'
  },
  {
    id: '11',
    name: { en: 'Walking Shoes for Men', ur: 'مردوں کے لیے واکنگ شوز' },
    description: {
      en: 'Delivery free • Material: Rexene • Pattern: Printed • Gender: Men\'s • Available Sizes: 6, 7, 8, 9, 10, 11 • Size Chart: Size Chart Attached • Color: Golden Black • Package Includes: 1 x Walking Shoes For Men • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: ریکسین • پیٹرن: پرنٹڈ • جنڈر: مرد • دستیاب سائز: 6، 7، 8، 9، 10، 11 • سائز چارٹ: سائز چارٹ منسلک • رنگ: گولڈن بلیک • پیکیج میں شامل ہے: 1 x مردوں کے لیے واکنگ شوز • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1665,
    originalPrice: 2000,
    category: 'shoes',
    subcategory: 'men-shoes',
    images: [
      '/products/walking-shoes-goldenblack.jpg',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.3,
    reviewCount: 22,
    tags: ['shoes', 'walking', 'men', 'golden-black'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Footwear'
  },
  {
    id: '12',
    name: { en: 'Mens Casual PU Leather Slide Slippers', ur: 'مردانہ کیژول پی یو لیتر سلائیڈ چپل' },
    description: {
      en: 'Delivery free • Material: PU Leather • Pattern: Plain • Gender: Men\'s • Product Feature: Casual • Available Sizes: 7, 8, 9, 10 • Size Chart: Size Chart Attached • Color: Grey • Package Includes: 1 x Slide Slippers • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: پی یو لیتر • پیٹرن: سادہ • جنڈر: مرد • پروڈکٹ فیچر: کیژول • دستیاب سائز: 7، 8، 9، 10 • سائز چارٹ: سائز چارٹ منسلک • رنگ: سرمئی • پیکیج میں شامل ہے: 1 x سلائیڈ چپل • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1685,
    originalPrice: 2000,
    category: 'shoes',
    subcategory: 'slippers',
    images: [
      '/products/slide-slippers-grey.jpg',
      '/products/slide-slippers-men.jpg'
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.1,
    reviewCount: 18,
    tags: ['slippers', 'men', 'pu-leather', 'grey', 'casual'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Footwear'
  },
  {
    id: '13',
    name: { en: 'Mens Rubber Slide Slippers', ur: 'مردانہ ربڑ سلائیڈ چپل' },
    description: {
      en: 'Delivery free • Material: Rubber • Pattern: Textured • Gender: Men\'s • Casual Wear, Outdoor • Available Sizes: 6, 7, 8, 9, 10, 11 • Package Includes: 1 x Slide Slippers Pair • Note: Slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • مواد: ربڑ • پیٹرن: ٹیکسچرڈ • جنڈر: مرد • کیژول وئیر، آؤٹ ڈور • دستیاب سائ��: 6، 7، 8، 9، 10، 11 • پیکیج میں شامل ہے: 1 x سلائیڈ چپل جوڑا • نوٹ: مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1285,
    originalPrice: 1600,
    category: 'shoes',
    subcategory: 'slippers',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.0,
    reviewCount: 25,
    tags: ['slippers', 'men', 'rubber', 'casual', 'outdoor'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Footwear'
  },
  // Women's Clothing
  {
    id: '14',
    name: { en: '3 Pcs Womens Unstitched Fancy', ur: '3 پیس خواتین کا نا سلایا ہوا فینسی' },
    description: {
      en: 'Delivery free • Fabric: Organza • Shirt Front: Heavy Embroidered With Gota Work • Neckline: Heavy Embroidered • Back: Plain • Trouser: Plain • Dupatta: Heavy Embroidered Organza • Cuttings: Shirt: 2.5 Gazz, Trouser: 2.5 Gazz, Dupatta: 2.5 Gazz • Season: All Season • Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • فابریک: اورگنزا • شرٹ فرنٹ: ہیوی ایmbroidered وِد گوٹا ورک • نیک لائن: ہیوی ایmbroidered • بیک: سادہ • ٹراؤزر: سادہ • دوپٹہ: ہیوی ایmbroidered اورگنزا • کٹنگز: شرٹ: 2.5 گز، ٹراؤزر: 2.5 گز، دوپٹہ: 2.5 گز • سیزن: آل سیزن • پیکیج میں شامل ہے: 1 x شرٹ، 1 x ٹراؤزر، 1 x دوپٹہ • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 1999,
    originalPrice: 2500,
    category: 'clothing',
    subcategory: 'women-clothing',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 30,
    rating: 4.3,
    reviewCount: 20,
    tags: ['clothing', 'women', 'unstitched', 'fancy', 'organza'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Fashion'
  },
  {
    id: '15',
    name: { en: 'Suit Set – 5 Pcs with Dupatta', ur: 'سوٹ سیٹ – 5 پیس دوپٹے کے ساتھ' },
    description: {
      en: 'Delivery free • Shirt Fabric: Cotton Lawn • Pattern: Embroidered • Shirt Front Pattern: Embroidered • Daman: Embroidered • Shirt Back Pattern: Plain • Trouser Fabric: Cotton Lawn • Trouser Pattern: Embroidered • Dupatta Fabric: Chiffon • Dupatta Pattern: Embroidered • Number Of Pieces: 5 Pcs • Khussa Sizes: 6, 8, 9 • Color: Purple • Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta, 1 x Khussa Pair • Shirt Cutting: 2.5 Meter • Trouser Cutting: 2.5 Gazz • Dupatta Cutting: 2.5 Gazz • Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.',
      ur: 'فری ڈیلیوری • شرٹ فابریک: کپٹن لان • پیٹرن: ایmbroidered • شرٹ فرنٹ پیٹرن: ایmbroidered • دامن: ایmbroidered • شرٹ بیک پیٹرن: سادہ • ٹراؤزر فابریک: کپٹن لان • ٹراؤزر پیٹرن: ایmbroidered • دوپٹہ فابریک: چیفون • دوپٹہ پیٹرن: ایmbroidered • پیسز کی تعداد: 5 پیس • خسہ سائز: 6، 8، 9 • رنگ: جامنی • پیکیج میں شامل ہے: 1 x شرٹ، 1 x ٹراؤزر، 1 x دو��ٹہ، 1 x خسہ جوڑا • شرٹ کٹنگ: 2.5 میٹر • ٹراؤزر کٹنگ: 2.5 گز • دوپٹہ کٹنگ: 2.5 گز • نوٹ: دستی پیمائش کی وجہ سے 1-3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔'
    },
    price: 3500,
    originalPrice: 4200,
    category: 'clothing',
    subcategory: 'women-clothing',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop'
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 25,
    tags: ['clothing', 'women', 'suit', '5pcs', 'embroidered', 'purple'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Fashion'
  }
]
