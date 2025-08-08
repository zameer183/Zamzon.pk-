import { Product, Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'electronics',
    name: { en: 'Electronics', ur: 'الیکٹرانکس' },
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
    subcategories: [
      { id: 'cameras', name: { en: 'Cameras', ur: 'کیمرے' }, slug: 'cameras', image: '' },
      { id: 'audio', name: { en: 'Audio', ur: 'آڈیو' }, slug: 'audio', image: '' },
      { id: 'accessories', name: { en: 'Accessories', ur: 'لوازمات' }, slug: 'accessories', image: '' },
    ]
  },
  {
    id: 'beauty',
    name: { en: 'Beauty & Care', ur: 'خوبصورتی اور دیکھ بھال' },
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    subcategories: [
      { id: 'makeup', name: { en: 'Makeup', ur: 'میک اپ' }, slug: 'makeup', image: '' },
      { id: 'fragrance', name: { en: 'Fragrance', ur: 'خوشبو' }, slug: 'fragrance', image: '' },
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
      { id: 'slippers', name: { en: 'Slippers', ur: 'چپل' }, slug: 'slippers', image: '' },
    ]
  },
  {
    id: 'clothing',
    name: { en: 'Clothing', ur: 'کپڑے' },
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
    subcategories: [
      { id: 'women-clothing', name: { en: 'Women\'s Clothing', ur: 'خواتین کے کپڑے' }, slug: 'women-clothing', image: '' },
    ]
  }
]

// New products structure - ready for your product details
export const products: Product[] = [
  // Electronics - Cameras
  {
    id: '1',
    name: { en: 'Mini Camera SQ11', ur: 'منی کیمرا SQ11' },
    description: { en: 'Delivery free\n• Material: ABS Plastic\n• Color: Black\n• Package Includes: 1 x Camera\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• مواد: اے بی ایس پلاسٹک\n• رنگ: کالا\n• پیکیج میں شامل ہے: 1 x کیمرا\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1950,
    originalPrice: 2500,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 1 Name Mini Camera SQ 11 (3).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 1 Name Mini Camera SQ 11 (4).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 1 Name Mini Camera SQ 11 (5).jpg'
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
    description: { en: 'Delivery free\n• Material: Plastic\n• Product Feature: Mini, Clear Vision, Lightweight Design, Long Range, Adjustable Focus, Durable Build\n• Color: Black\n• Package Includes: 1 x Camera\n• Model Number: 9\n• Battery Capacity: 1800 mAh\n• Standby Time: 12 Hours\n• Voltage: 9 A\n• Weight: 460 Gram\n• Length: 3 Inches\n• Width: 2.5 Inches\n• Height: 3 Inches\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur due to lighting/monitor.', ur: 'فری ڈیلیوری\n• مواد: پلاسٹک\n• پروڈکٹ فیچر: منی، واضح وژن، ہلکا پھلکا ڈیزائن، طویل رینج، ایڈجسٹ ایبل فوکس، پائیدار تعمیر\n• رنگ: کالا\n• پیکیج میں شامل ہے: 1 x کیمرا\n• ماڈل نمبر: 9\n• بیٹری کی گنجائش: 1800 ایم اے ایچ\n• اسٹینڈ بائی وقت: 12 گھنٹے\n• وولٹیج: 9 اے\n• وزن: 460 گرام\n• لمبائی: 3 انچ\n• چوڑائی: 2.5 انچ\n• اونچائی: 3 انچ\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1499,
    originalPrice: 2000,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 2 Name Mini Camera A9 (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 2 Name Mini Camera A9 (2).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 2 Name Mini Camera A9 (3).jpg'
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
    description: { en: 'Delivery free\n• Material: Metal\n• Product Feature: Mini, Lightweight Design, Long Range, Clear Vision\n• Color: White\n• Package Includes: 1 x 360 View Security Camera\n• Note: Minor size or color difference possible due to measurement or lighting.', ur: 'فری ڈیلیوری\n• مواد: دھات\n• پروڈکٹ فیچر: منی، ہلکا پھلکا ڈیزائن، طویل رینج، واضح وژن\n• رنگ: سفید\n• پیکیج میں شامل ہے: 1 x 360 ویو سیکیورٹی کیمرا\n• نوٹ: چھوٹے سائز یا رنگ میں فرق ممکن ہے پیمائش یا روشنی کی وجہ سے۔' },
    price: 3499,
    originalPrice: 4200,
    category: 'electronics',
    subcategory: 'cameras',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 3 Name 360 View Security Camera (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 3 Name 360 View Security Camera (2).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/Electronic Products 3 Name 360 View Security Camera (3).jpg'
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
    description: { en: 'Delivery free • Material: ABS Plastic • Connectivity Tech: Bluetooth • Bluetooth Version: Bluetooth 5.1 • Product Feature: Long-Lasting Battery With Fast Charge, Smart Touch, Power On/Off, Answer, Redial, Hang Up, Play, Pause, Next Track • Package Includes: 1 x Earbuds, 1 x Charger Cable • Battery Capacity: 800 mAh • Call Time: 4 Hours • Standby Time: 72 Hours • Voltage: 5 Volts • Watts: 5 Watt • Weight: 200 Kgs • Length: 10 Inches • Width: 6 Inches • Height: 3 Inches • Pack Of 1 • Color: Black • Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.', ur: 'فری ڈیلیوری • مواد: اے بی ایس پلاسٹک • کنیکٹیویٹی ٹیک: بلوٹوتھ • بلوٹوتھ ورژن: بلوٹوتھ 5.1 • پروڈکٹ فیچر: طویل بیٹری لائف کے ساتھ تیز چارج، سمارٹ ٹچ، پاور آن/آف، جواب، ریڈائل، ہینگ اپ، پلے، پاز، اگلا ٹریک • پیکیج میں شامل ہے: 1 x ایئربڈز، 1 x چارجر کیبل • بیٹری کی گنجائش: 800 ایم اے ایچ • کال کا وقت: 4 گھنٹے • اسٹینڈ بائی وقت: 72 گھنٹے • وولٹیج: 5 وولٹ • واٹس: 5 واٹ • وزن: 200 کلوگرام • لمبائی: 10 انچ • چوڑائی: 6 انچ • اونچائی: 3 انچ • پیک آف 1 • رنگ: کالا • نوٹ: براہ کرم مناسب استعمال اور حفاظتی احتیاطی تدابیر کے لیے صارف دستی میں دی گئی ہدایات پر عمل کریں۔' },
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
    description: { en: 'Professional tripod stand for cameras and phones', ur: 'کیمرے اور فون کے لیے پروفیشنل ٹرائی پوڈ اسٹینڈ' },
    price: 1200,
    originalPrice: 1500,
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
    name: { en: '4 in 1 Makeup Kit', ur: '4 ان 1 میک اپ کٹ' },
    description: { en: 'Complete 4 in 1 makeup kit with all essentials', ur: 'تمام ضروری اشیاء کے ساتھ مکمل 4 ان 1 میک اپ کٹ' },
    price: 2200,
    originalPrice: 2800,
    category: 'beauty',
    subcategory: 'makeup',
    images: [
      '/products/makeup-4-in-1-kit-1.jpg',
      '/products/makeup-4-in-1-kit-2.jpg',
      '/products/makeup-4-in-1-kit-3.jpg'
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.4,
    reviewCount: 25,
    tags: ['makeup', 'kit', 'beauty'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Beauty'
  },
  {
    id: '7',
    name: { en: '6 in 1 Makeup Kit', ur: '6 ان 1 میک اپ کٹ' },
    description: { en: 'Premium 6 in 1 makeup kit with advanced features', ur: 'ایڈوانس فیچرز کے ساتھ پریمیم 6 ان 1 میک اپ کٹ' },
    price: 3200,
    originalPrice: 4000,
    category: 'beauty',
    subcategory: 'makeup',
    images: [
      '/products/makeup-6-in-1-kit-1.jpg',
      '/products/makeup-6-in-1-kit-2.jpg',
      '/products/makeup-6-in-1-kit-3.jpg'
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 30,
    tags: ['makeup', 'kit', 'premium'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Beauty'
  },
  {
    id: '8',
    name: { en: '5 Perfume Set', ur: '5 پرفیوم سیٹ' },
    description: { en: 'Collection of 5 premium perfumes in one set', ur: 'ایک سیٹ میں 5 پریمیم پرفیومز کا مجموعہ' },
    price: 2500,
    originalPrice: 3200,
    category: 'beauty',
    subcategory: 'fragrance',
    images: [
      '/products/perfume-set-1.jpg',
      '/products/perfume-set-2.jpg'
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.3,
    reviewCount: 20,
    tags: ['perfume', 'set', 'fragrance'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Fragrance'
  },
  {
    id: '9',
    name: { en: 'Unisex Long Lasting Perfume 100ml', ur: 'یونیسیکس لمبی دیر تک چلنے والا پرفیوم 100مل' },
    description: { en: 'Long-lasting unisex perfume in 100ml bottle', ur: '100مل بوتل میں لمبی دیر تک چلنے والا یونیسیکس پرفیوم' },
    price: 1225,
    originalPrice: 1500,
    category: 'beauty',
    subcategory: 'fragrance',
    images: [
      '/products/unisex-long-lasting-perfume-1.jpg',
      '/products/unisex-long-lasting-perfume-2.jpg'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.5,
    reviewCount: 35,
    tags: ['perfume', 'unisex', 'long-lasting'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Fragrance'
  },

  // Shoes
  {
    id: '10',
    name: { en: 'Women\'s PU Flats', ur: 'خواتین کے پی یو فلیٹس' },
    description: { en: 'Comfortable PU flats for women in elegant design', ur: 'خوبصورت ڈیزائن میں خواتین کے لیے آرام دہ پی یو فلیٹس' },
    price: 1800,
    originalPrice: 2200,
    category: 'shoes',
    subcategory: 'women-shoes',
    images: [
      '/products/womens-pu-flats-1.jpg',
      '/products/womens-pu-flats-2.jpg',
      '/products/womens-pu-flats-3.jpg'
    ],
    inStock: true,
    stockQuantity: 30,
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
    description: { en: 'Delivery free\n• Material: Rexene\n• Pattern: Printed\n• Gender: Men\'s\n• Available Sizes: 6, 7, 8, 9, 10, 11\n• Size Chart: Size Chart Attached\n• Color: Golden Black\n• Package Includes: 1 x Walking Shoes For Men\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• مواد: ریکسین\n• پیٹرن: پرنٹڈ\n• جنس: مرد\n• دستیاب سائز: 6، 7، 8، 9، 10، 11\n• سائز چارٹ: سائز چارٹ منسلک\n• رنگ: گولڈن بلیک\n• پیکیج میں شامل ہے: 1 x واکنگ شوز برائے مرد\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1665,
    originalPrice: 3000,
    category: 'shoes',
    subcategory: 'men-shoes',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 2 name Walking shoes for men (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 2 name Walking shoes for men (2).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 2 name Walking shoes for men (3).jpg'
    ],
    inStock: true,
    stockQuantity: 40,
    rating: 4.3,
    reviewCount: 22,
    tags: ['shoes', 'walking', 'men', 'comfortable'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Footwear'
  },
  {
    id: '12',
    name: { en: 'Men\'s Casual PU Leather Slide Slippers', ur: 'مردانہ کیژول پی یو لیتر سلائیڈ چپل' },
    description: { en: 'Delivery free\n• Material: PU Leather\n• Pattern: Plain\n• Gender: Men\'s\n• Product Feature: Casual\n• Available Sizes: 7, 8, 9, 10\n• Size Chart: Size Chart Attached\n• Color: Grey\n• Package Includes: 1 x Slide Slippers\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• مواد: پی یو لیتر\n• پیٹرن: سادہ\n• جنس: مرد\n• پروڈکٹ فیچر: کیژول\n• دستیاب سائز: 7، 8، 9، 10\n• سائز چارٹ: سائز چارٹ منسلک\n• رنگ: سرمئی\n• پیکیج میں شامل ہے: 1 x سلائیڈ چپل\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1685,
    originalPrice: 1500,
    category: 'shoes',
    subcategory: 'slippers',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 3 name mens casual pu leather slide slippers (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 3 name mens casual pu leather slide slippers (2).jpg'
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.1,
    reviewCount: 18,
    tags: ['slippers', 'men', 'pu-leather', 'casual'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Footwear'
  },
  {
    id: '13',
    name: { en: 'Men\'s Rubber Slide Slippers', ur: 'مردانہ ربڑ سلائیڈ چپل' },
    description: { en: 'Delivery free\n• Material: Rubber\n• Pattern: Textured\n• Gender: Men\'s\n• Casual Wear, Outdoor\n• Available Sizes: 6, 7, 8, 9, 10, 11\n• Package Includes: 1 x Slide Slippers Pair\n• Note: Slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• مواد: ربڑ\n• پیٹرن: ٹیکسچرڈ\n• جنس: مرد\n• کیژول پہننے، آؤٹ ڈور\n• دستیاب سائز: 6، 7، 8، 9، 10، 11\n• پیکیج میں شامل ہے: 1 x سلائیڈ چپل جوڑا\n• نوٹ: مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1285,
    originalPrice: 1200,
    category: 'shoes',
    subcategory: 'slippers',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 4 name mens Rubber slide slippers (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/shoes products 4 name mens Rubber slide slippers (2).jpg'
    ],
    inStock: true,
    stockQuantity: 50,
    rating: 4.0,
    reviewCount: 25,
    tags: ['slippers', 'men', 'rubber', 'comfortable'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Footwear'
  },

  // Women's Clothing
  {
    id: '14',
    name: { en: '3 Pcs Women\'s Stitched Crinkal Chiffon', ur: '3 پیس خواتین کا سلایا ہوا کrinkal چیفون' },
    description: { en: 'Elegant 3-piece stitched crinkal chiffon outfit for women', ur: 'خواتین کے لیے خوبصورت 3 پیس سلایا ہوا کrinkal چیفون لباس' },
    price: 4500,
    originalPrice: 5500,
    category: 'clothing',
    subcategory: 'women-clothing',
    images: [
      '/products/womens-stitched-crinkal-chiffon-1.jpg',
      '/products/womens-stitched-crinkal-chiffon-2.jpg',
      '/products/womens-stitched-crinkal-chiffon-3.jpg'
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.5,
    reviewCount: 30,
    tags: ['clothing', 'women', 'chiffon', 'stitched'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Fashion'
  },
  {
    id: '15',
    name: { en: '3 Pcs Women\'s Unstitched Fancy', ur: '3 پیس خواتین کا نا سلایا ہوا فینسی' },
    description: { en: 'Delivery free\n• Fabric: Organza\n• Shirt Front: Heavy Embroidered With Gota Work\n• Neckline: Heavy Embroidered\n• Back: Plain\n• Trouser: Plain\n• Dupatta: Heavy Embroidered Organza\n• Cuttings: Shirt: 2.5 Gazz, Trouser: 2.5 Gazz, Dupatta: 2.5 Gazz\n• Season: All Season\n• Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• کپڑا: آرگنزا\n• شرٹ فرنٹ: بھاری کشیدہ کاری کے ساتھ گوٹا ورک\n• گردن: بھاری کشیدہ کاری\n• پیچھے: سادہ\n• پتلون: سادہ\n• دوپٹہ: بھاری کشیدہ کاری آرگنزا\n• کٹنگ: شرٹ: 2.5 گز، پتلون: 2.5 گز، دوپٹہ: 2.5 گز\n• موسم: تمام موسم\n• پیکیج میں شامل ہے: 1 x شرٹ، 1 x پتلون، 1 x دوپٹہ\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 1999,
    originalPrice: 4500,
    category: 'clothing',
    subcategory: 'women-clothing',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/womens clothes products 2 name 3 pcs womens unstitched fancy (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/womens clothes products 2 name 3 pcs womens unstitched fancy (2).jpg'
    ],
    inStock: true,
    stockQuantity: 30,
    rating: 4.3,
    reviewCount: 20,
    tags: ['clothing', 'women', 'unstitched', 'fancy'],
    isNewArrival: true,
    isFeatured: false,
    brand: 'Zamzon Fashion'
  },
  {
    id: '16',
    name: { en: '5 Pcs Suit Set with Dupatta', ur: '5 پیس سوٹ سیٹ دوپٹے کے ساتھ' },
    description: { en: 'Delivery free\n• Shirt Fabric: Cotton Lawn\n• Pattern: Embroidered\n• Shirt Front Pattern: Embroidered\n• Daman: Embroidered\n• Shirt Back Pattern: Plain\n• Trouser Fabric: Cotton Lawn\n• Trouser Pattern: Embroidered\n• Dupatta Fabric: Chiffon\n• Dupatta Pattern: Embroidered\n• Number Of Pieces: 5 Pcs\n• Khussa Sizes: 6, 8, 9\n• Color: Purple\n• Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta, 1 x Khussa Pair\n• Shirt Cutting: 2.5 Meter\n• Trouser Cutting: 2.5 Gazz\n• Dupatta Cutting: 2.5 Gazz\n• Note: There might be an error of 1–3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.', ur: 'فری ڈیلیوری\n• شرٹ کپڑا: کاٹن لان\n• پیٹرن: کشیدہ کاری\n• شرٹ فرنٹ پیٹرن: کشیدہ کاری\n• دامن: کشیدہ کاری\n• شرٹ بیک پیٹرن: سادہ\n• پتلون کپڑا: کاٹن لان\n• پتلون پیٹرن: کشیدہ کاری\n• دوپٹہ کپڑا: شیفون\n• دوپٹہ پیٹرن: کشیدہ کاری\n• ٹکڑوں کی تعداد: 5 ٹکڑے\n• کھسہ سائز: 6، 8، 9\n• رنگ: جامنی\n• پیکیج میں شامل ہے: 1 x شرٹ، 1 x پتلون، 1 x دوپٹہ، 1 x کھسہ جوڑا\n• شرٹ کٹنگ: 2.5 میٹر\n• پتلون کٹنگ: 2.5 گز\n• دوپٹہ کٹنگ: 2.5 گز\n• نوٹ: دستی پیمائش کی وجہ سے 1–3 سینٹی میٹر کی غلطی ہو سکتی ہے، اور مختلف روشنی اور مانیٹر کے اثرات کی وجہ سے ہلکے رنگ کے فرق ہو سکتے ہیں۔' },
    price: 3500,
    originalPrice: 6500,
    category: 'clothing',
    subcategory: 'women-clothing',
    images: [
      '/mnt/data/zamzon_pictures/zamzon pictures/womens clothes products 3 name suit set -5 pcs with dupatta (1).jpg',
      '/mnt/data/zamzon_pictures/zamzon pictures/womens clothes products 3 name suit set -5 pcs with dupatta (2).jpg'
    ],
    inStock: true,
    stockQuantity: 20,
    rating: 4.6,
    reviewCount: 25,
    tags: ['clothing', 'women', 'suit', 'dupatta'],
    isNewArrival: true,
    isFeatured: true,
    brand: 'Zamzon Fashion'
  }
]
