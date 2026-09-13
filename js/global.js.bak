/* ============================================================
   ADWA SUPPLEMENTS — CORE APPLICATION SCRIPT
   Bilingual E-Commerce, Telebirr/CBE Payments & Admin Suite
   ============================================================ */

/* ---------- Bilingual Localization Dictionary ---------- */
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_shop: "Shop",
    nav_about: "About",
    nav_contact: "Contact",
    nav_admin: "Admin",
    nav_cart: "Cart",
    hero_eyebrow: "Ethiopian-made · Naturally Powerful",
    hero_title_1: "Strength like ",
    hero_title_2: "Adwa",
    hero_title_3: ". Every day.",
    hero_lead: "Supplements and cosmetics rooted in rich Ethiopian botanicals — formulated for the resilience and energy of modern life.",
    hero_btn_shop: "Shop Bestsellers",
    hero_btn_story: "Our Heritage",
    hero_badge_natural: "100% Botanicals",
    hero_badge_delivery: "Addis Delivery",
    hero_badge_tested: "Lab Certified",
    hero_tag_title: "Tikur Azmud Immunity",
    hero_tag_sub: "Signature Ethiopian Formula",
    cat_browse_eyebrow: "Browse Catalog",
    cat_browse_title: "Shop by Category",
    best_eyebrow: "Loved by Customers",
    best_title: "Bestselling Botanicals",
    best_sub: "Our most re-ordered supplements and cosmetics, trusted across Ethiopia.",
    view_all: "View All",
    promo_badge: "Seasonal Offer",
    promo_title: "New Season Wellness — Up to 20% Off",
    promo_desc: "Nourish your body and restore vitality with natural highlands botanicals. Free delivery in Addis Ababa on orders above 1,500 ETB.",
    promo_btn: "Shop the Sale",
    story_eyebrow: "Our Heritage",
    story_title: "Born from a legacy of resilience",
    story_p1: "Adwa Supplements takes its name from the 1896 Battle of Adwa — the iconic victory where unity, strength, and belief in one's own land proved that greatness is forged from within.",
    story_p2: "Every tincture, capsule, and balm we craft honors that spirit: locally-sourced moringa, black cumin (tikur azmud), pure highland honey, and cold-pressed botanical oils built for everyday champions.",
    story_amharic: "የኢትዮጵያ ጥንካሬ በእያንዳንዱ ምርት ውስጥ",
    story_btn: "Read Our Full Story",
    newsletter_title: "Join the Adwa Circle",
    newsletter_sub: "Receive seasonal wellness tips, traditional botanical insights, and exclusive subscriber promotions.",
    subscribe: "Subscribe",
    search_placeholder: "Search products or categories…",
    filters_title: "Filters",
    filter_category: "Category",
    filter_price: "Max Price",
    filter_rating: "Rating",
    reset_filters: "Reset Filters",
    in_stock: "In Stock",
    out_of_stock: "Out of Stock",
    add_to_cart: "Add to Cart",
    cart_title: "Your Shopping Bag",
    cart_empty: "Your bag is currently empty",
    cart_empty_sub: "Discover our natural supplements and revitalizing cosmetics.",
    start_shopping: "Start Shopping",
    order_summary: "Order Summary",
    subtotal: "Subtotal",
    delivery_fee: "Delivery",
    total: "Total",
    proceed_checkout: "Proceed to Checkout",
    checkout_title: "Checkout",
    delivery_address: "Delivery Information",
    full_name: "Full Name",
    phone_number: "Phone Number",
    city: "City",
    subcity: "Subcity / Area",
    address_detail: "Detailed Address & Landmarks",
    delivery_method: "Delivery Option",
    delivery_std: "Standard Delivery (2–4 Days, 100 ETB)",
    delivery_exp: "Express Delivery (Next Day, Addis Only, 250 ETB)",
    payment_method: "Payment Method",
    pay_telebirr: "Telebirr Mobile Wallet",
    pay_cbe: "CBE Birr / Commercial Bank of Ethiopia",
    pay_cod: "Cash on Delivery",
    place_order: "Complete Order",
    pm_telebirr_title: "Telebirr Mobile Payment",
    pm_cbe_title: "CBE Birr Payment",
    pm_merchant_id: "Merchant Code",
    pm_account_num: "Account Number",
    pm_scan_qr: "Scan QR code or use the code above in your banking app",
    pm_enter_ref: "Enter SMS Transaction Reference ID:",
    pm_confirm_btn: "Verify & Complete Order",
    confirm_title: "Order Confirmed!",
    confirm_sub: "Thank you for choosing Adwa Supplements. Your order has been registered and is being prepared with care.",
    order_number: "Order Number",
    customer: "Customer",
    est_delivery: "Estimated Delivery"
  },
  am: {
    nav_home: "መነሻ",
    nav_shop: "ሱቅ",
    nav_about: "ስለ እኛ",
    nav_contact: "ያግኙን",
    nav_admin: "አስተዳዳሪ",
    nav_cart: "ቅርጫት",
    hero_eyebrow: "በኢትዮጵያ የተመረተ · ተፈጥሯዊ ኃይል",
    hero_title_1: "እንደ ",
    hero_title_2: "ዐድዋ",
    hero_title_3: " ጥንካሬ። በየዕለቱ።",
    hero_lead: "ከኢትዮጵያ ምርጥ ዕፅዋት የተዘጋጁ ተፈጥሯዊ ማሟያዎችና የውበት መጠበቂያዎች — ለብርቱ ጤናና ለዕለታዊ ጥንካሬ።",
    hero_btn_shop: "ተወዳጅ ምርቶችን ይግዙ",
    hero_btn_story: "ታሪካችን",
    hero_badge_natural: "100% ተፈጥሯዊ",
    hero_badge_delivery: "ፈጣን አድራሻ ማድረስ",
    hero_badge_tested: "በላብራቶሪ የተረጋገጠ",
    hero_tag_title: "ጥቁር አዝሙድ ካፕሱል",
    hero_tag_sub: "የተፈጥሮ በሽታ መከላከያ",
    cat_browse_eyebrow: "ምድቦችን ይመልከቱ",
    cat_browse_title: "በምድብ ይግዙ",
    best_eyebrow: "በደንበኞች የተወደዱ",
    best_title: "ተወዳጅ ምርቶቻችን",
    best_sub: "በመላው ኢትዮጵያ በደንበኞቻችን ተደጋግመው የታዘዙ ምርጥ ማሟያዎች።",
    view_all: "ሁሉንም ይመልከቱ",
    promo_badge: "ወቅታዊ ቅናሽ",
    promo_title: "የወቅቱ የጤና ማሟያዎች — እስከ 20% ቅናሽ",
    promo_desc: "የሰውነትዎን በሽታ የመከላከል አቅም በተፈጥሯዊ ዕፅዋት ያጠናክሩ። ከአዲስ አበባ 1,500 ብር በላይ ሲገዙ ነፃ ማድረሻ።",
    promo_btn: "ቅናሹን ይግዙ",
    story_eyebrow: "ታሪካችን",
    story_title: "ከዐድዋ ድል መንፈስ የተወለደ",
    story_p1: "የዐድዋ ማሟያዎች ስያሜውን የወሰደው ከ1896ቱ ታሪካዊ የዐድዋ ድል ነው — አንድነትና በራስ ሀብት መተማመን ለድል እንደሚያበቃ ካረጋገጠው ታሪክ።",
    story_p2: "እያንዳንዱ የምናመርተው ካፕሱል፣ ሻይና የውበት ዘይት ያንን መንፈስ ይዟል፡ ከአገር በቀል ሞሪንጋ፣ ጥቁር አዝሙድና ማር የተዘጋጁ ጥራት ያላቸው ምርቶች።",
    story_amharic: "የኢትዮጵያ ጥንካሬ በእያንዳንዱ ምርት ውስጥ",
    story_btn: "ሙሉ ታሪኩን ያንብቡ",
    newsletter_title: "የዐድዋ ቤተሰብ አባል ይሁኑ",
    newsletter_sub: "ስለ ተፈጥሯዊ ጤና አጠባበቅ ጠቃሚ መረጃዎችንና ልዩ ቅናሾችን ያግኙ።",
    subscribe: "ይመዝገቡ",
    search_placeholder: "ምርቶችን ወይም ምድቦችን ይፈልጉ…",
    filters_title: "ማጣሪያዎች",
    filter_category: "ምድብ",
    filter_price: "ከፍተኛ ዋጋ",
    filter_rating: "ደረጃ",
    reset_filters: "ማጣሪያውን መልስ",
    in_stock: "አለ",
    out_of_stock: "አልቋል",
    add_to_cart: "ወደ ቅርጫት ጨምር",
    cart_title: "የግዢ ቅርጫትዎ",
    cart_empty: "ቅርጫትዎ ባዶ ነው",
    cart_empty_sub: "ተፈጥሯዊ ማሟያዎችንና የቆዳ እንክብካቤ ምርቶችን ይጎብኙ።",
    start_shopping: "ግዢ ይጀምሩ",
    order_summary: "የትዕዛዝ ማጠቃለያ",
    subtotal: "ድምር",
    delivery_fee: "ማድረሻ",
    total: "አጠቃላይ ድምር",
    proceed_checkout: "ወደ ክፍያ ይሂዱ",
    checkout_title: "ትዕዛዝ ማረጋገጫ",
    delivery_address: "የማድረሻ አድራሻ",
    full_name: "ሙሉ ስም",
    phone_number: "ስልክ ቁጥር",
    city: "ከተማ",
    subcity: "ክፍለ ከተማ / አካባቢ",
    address_detail: "ዝርዝር አድራሻና መለያ ቦታ",
    delivery_method: "የማድረሻ አማራጭ",
    delivery_std: "መደበኛ ማድረሻ (ከ2-4 ቀናት፣ 100 ብር)",
    delivery_exp: "ፈጣን ማድረሻ (በነገው ዕለት፣ አዲስ አበባ ብቻ፣ 250 ብር)",
    payment_method: "የክፍያ ዘዴ",
    pay_telebirr: "ቴሌብር (Telebirr)",
    pay_cbe: "ሲቢኢ ብር (CBE Birr)",
    pay_cod: "ዕቃው ሲደርስ በጥሬ ገንዘብ",
    place_order: "ትዕዛዙን ያጠናቅቁ",
    pm_telebirr_title: "በቴሌብር ይክፈሉ",
    pm_cbe_title: "በሲቢኢ ብር ይክፈሉ",
    pm_merchant_id: "የነጋዴ መለያ ኮድ",
    pm_account_num: "የሂሳብ ቁጥር",
    pm_scan_qr: "የQR ኮዱን ይቃኙ ወይም ከላይ ያለውን ቁጥር በባንክ መተግበሪያዎ ይጠቀሙ",
    pm_enter_ref: "በSMS የመጣውን የትራንዛክሽን መለያ ኮድ ያስገቡ፡",
    pm_confirm_btn: "ክፍያውን አረጋግጥና አጠናቅቅ",
    confirm_title: "ትዕዛዝዎ በተሳካ ሁኔታ ተጠናቋል!",
    confirm_sub: "ስለመረጡን እናመሰግናለን! ትዕዛዝዎ ተመዝግቧል፤ በቅርቡ ይደርስዎታል።",
    order_number: "የትዕዛዝ ቁጥር",
    customer: "ደንበኛ",
    est_delivery: "የሚደርስበት ግምት ቀን"
  }
};

/* ---------- Seed Products with Official Manufacturer Mockups & Badges ---------- */
const CATALOG_VERSION = "3.0_supplement_directory";

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Rule 1 (R1) Protein Isolate",
    name_am: "ሩል 1 (R1) ዌይ ፕሮቲን አይሶሌት",
    price: 6800,
    category: "Whey Isolate",
    category_am: "ዌይ ፕሮቲን አይሶሌት",
    format: "5 lb Black Tub",
    format_am: "5 ፓውንድ ጥቁር ኮንቴይነር",
    image: "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/r/1/r1pwi_5lb_cookies-and-creme_1.jpg",
    badge: "100% Isolate",
    badge_am: "100% ንጹህ አይሶሌት",
    goal_badge: "Bestseller",
    goal_badge_am: "በጣም የተሸጠ",
    market_highlight: "25g Pure Protein · 0g Sugar · Fast Absorption",
    description: "Matte black container, bold red and white 'R1' vertical logo, red cap accent. Flagship 100% whey isolate & hydrolysate formula delivering 25g ultra-clean bioactive protein per scoop with zero fillers, zero creamers, and zero amino spiking. Ideal for lean muscle repair and rapid post-workout recovery.",
    rating: 5,
    stock: 24,
    servings: "76 Servings (Vanilla Crème / Cookies & Cream)"
  },
  {
    id: 2,
    name: "Rule 1 (R1) LBS Mass Gainer",
    name_am: "ሩል 1 (R1) ኤልቢኤስ ማስ ጌይነር",
    price: 7500,
    category: "Mass Gainer",
    category_am: "ማስ ጌይነር (ክብደት መጨመሪያ)",
    format: "12–16 lb Bag / Tub",
    format_am: "12 ፓውንድ ከፍተኛ መጠን ቦርሳ",
    image: "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/r/1/r1_mass_gainer_12lb_choc_fudge.jpg",
    badge: "High Calorie",
    badge_am: "ከፍተኛ ካሎሪ",
    goal_badge: "12 lb Bulk",
    goal_badge_am: "ትልቅ መጠን",
    market_highlight: "1,000+ Cals · 40g Protein · 200g+ Clean Carbs",
    description: "High-volume black bag with red diagonal stripe graphics and heavy typography. Engineered for hardgainers looking to pack on serious size and muscular mass. Delivers over 1,000 calorie density and 40g premium multi-source protein blend enriched with creatine and BCAAs.",
    rating: 5,
    stock: 18,
    servings: "16 Huge Servings (12 lb / 5.44 kg)"
  },
  {
    id: 3,
    name: "Nutrex Creatine Monohydrate",
    name_am: "ኒውትሬክስ ክሪያቲን ሞኖሃይድሬት (1000g)",
    price: 3400,
    category: "Creatine",
    category_am: "ክሪያቲን",
    format: "1000g White Tub",
    format_am: "1000 ግራም ነጭ ኮንቴይነር",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrx/nrx02992/y/8.jpg",
    badge: "1kg Bulk",
    badge_am: "1 ኪ.ግ ትልቅ መጠን",
    goal_badge: "Pure Micronized",
    goal_badge_am: "100% ንጹህ",
    market_highlight: "200 Servings · Pure Unflavored · Maximum ATP Power",
    description: "Clean white tub, glossy red lid, high-contrast black and red product lettering. 1000 grams of 100% pure pharmaceutical-grade micronized creatine monohydrate unflavored. Rapidly dissolves to boost ATP regeneration, explosive workout strength, power output, and muscle cell volumization.",
    rating: 5,
    stock: 35,
    servings: "200 Servings (5g per scoop)"
  },
  {
    id: 4,
    name: "Redcon1 Total War Pre-Workout",
    name_am: "ሬድኮን 1 ቶታል ዋር ፕሪ-ወርክአውት",
    price: 3900,
    category: "Pre-Workout",
    category_am: "ፕሪ-ወርክአውት (የኃይል ማነቃቂያ)",
    format: "30-Serving Dark Tub",
    format_am: "30 ሰርቪንግ ጥቁር ኮንቴይነር",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rdc/rdc75926/y/24.jpg",
    badge: "High Energy",
    badge_am: "ከፍተኛ ጉልበት",
    goal_badge: "Military Grade",
    goal_badge_am: "ወታደራዊ ጥንካሬ",
    market_highlight: "320mg Active Caffeine · Laser Focus · Huge Pumps",
    description: "Tactical military-style stencil logo, dark tub with vibrant accent badges per flavor. The all-in-one pre-workout powerhouse featuring potent doses of citrulline malate, beta-alanine, and anhydrous caffeine to ignite laser-sharp mental focus, vascular muscle pumps, and unstoppable gym endurance.",
    rating: 5,
    stock: 28,
    servings: "30 High-Intensity Servings (Blue Raspberry)"
  },
  {
    id: 5,
    name: "Scivation XTEND BCAA",
    name_am: "ሳይቬሽን ኤክስቴንድ ቢሲኤኤ (XTEND BCAA)",
    price: 3600,
    category: "BCAAs / EAAs",
    category_am: "አሚኖ አሲድ (BCAAs)",
    format: "30-Serving Tub",
    format_am: "30 ሰርቪንግ ሰማያዊ ኮንቴይነር",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sci/sci00029/y/64.jpg",
    badge: "7g BCAAs",
    badge_am: "7 ግራም አሚኖ አሲድ",
    goal_badge: "Electrolytes",
    goal_badge_am: "ኤሌክትሮላይት ያለው",
    market_highlight: "2:1:1 Ratio · Zero Sugar · Cellular Rehydration",
    description: "Signature bright blue tub accent, prominent white and blue 'XTEND' block branding. The world's #1 intra-workout BCAA drink mix featuring 7 grams of research-backed 2:1:1 BCAAs plus hydrating electrolytes to stop muscle breakdown, speed intra-workout recovery, and support endurance.",
    rating: 5,
    stock: 30,
    servings: "30 Refreshing Servings (Zero Sugar, Zero Calories)"
  },
  {
    id: 6,
    name: "Nutrex Lipo-6 Black UC",
    name_am: "ኒውትሬክስ ሊፖ-6 ብላክ (ስብ ማቃጠያ)",
    price: 3500,
    category: "Fat Burner",
    category_am: "ስብ ማቃጠያ",
    format: "60-Cap Chrome Bottle",
    format_am: "60 ካፕሱል የሚያብረቀርቅ ጥቁር ጠርሙስ",
    image: "https://static1.biotus.ua/media/catalog/marketplace/product/9/8/2/823917df50b0e88c938c9b210ff91147_chmmin3vxggdn5nf.jpg?store=ua&image-type=image",
    badge: "Ultra Concentrate",
    badge_am: "እጅግ የተጠናከረ",
    goal_badge: "Thermogenic",
    goal_badge_am: "ቴርሞጀኒክ",
    market_highlight: "One-Pill Only · Rapid Calorie Burn · Appetite Control",
    description: "All-black pill bottle, metallic skull emblem, bold red 'BLACK' badge. One-pill-only ultra-concentrated weight loss and thermogenic formula. Speeds up resting metabolic rate, mobilizes stubborn fat reserves, sharpens mental alertness, and curbs unnecessary food cravings.",
    rating: 5,
    stock: 22,
    servings: "60 Fast-Absorbing Liquid Capsules (30–60 Days)"
  },
  {
    id: 7,
    name: "Universal Animal Pak",
    name_am: "ዩኒቨርሳል አኒማል ፓክ (Animal Pak)",
    price: 4600,
    category: "Multivitamins",
    category_am: "ባለብዙ ቪታሚኖች",
    format: "44-Pack Canister",
    format_am: "44 ፓክ ቢጫ የቆርቆሮ ኮንቴይነር",
    image: "https://nutrigize.in/cdn/shop/files/un-animalpak-gmc-front.jpg?v=1701239540&width=1024",
    badge: "The True Original",
    badge_am: "ዋናውና አንጋፋው",
    goal_badge: "44 Packs",
    goal_badge_am: "44 የተሟሉ ጥቅሎች",
    market_highlight: "85+ Nutrients · Digestive Enzymes · Zinc & Vitamin D",
    description: "Iconic industrial yellow tin box with black shadow bodybuilder artwork. The ultimate legendary training foundation since 1983. Loaded with over 85 bioavailable vitamins, chelated minerals, liver & digestive enzymes, performance adaptogens, and antioxidant complexes for elite athletes.",
    rating: 5,
    stock: 19,
    servings: "44 Daily Pre-Portioned Training Packs"
  },
  {
    id: 8,
    name: "Kirkland Omega-3 Fish Oil",
    name_am: "ከርክላንድ ኦሜጋ-3 የዓሳ ዘይት (1200mg)",
    price: 2900,
    category: "Daily Wellness",
    category_am: "የዕለት ጤና እና ኦሜጋ-3",
    format: "400 Softgel Bottle",
    format_am: "400 ለስላሳ እንክብል ትልቅ ጠርሙስ",
    image: "https://i5.walmartimages.com/seo/KS-Concentrated-Fish-Oil-1000-mg-400-Softgels_46acee6c-3957-41fa-8af7-2f6ccaf60bff.99a9af697cfd2a030dd5a2872403e750.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    badge: "1200mg Bulk",
    badge_am: "1200ሚ.ግ ትልቅ መጠን",
    goal_badge: "Heart Health",
    goal_badge_am: "የልብና መገጣጠሚያ",
    market_highlight: "400 Softgels · High EPA & DHA · Molecularly Distilled",
    description: "Large clear plastic bottle with deep blue Kirkland Signature top header. Pure concentrated fish oil providing essential EPA and DHA fatty acids. Scientifically proven to reinforce cardiovascular health, joint flexibility, cognitive memory, and whole-body anti-inflammatory wellness.",
    rating: 5,
    stock: 45,
    servings: "400 Concentrated Softgels (Up to 200 Days Supply)"
  },
  {
    id: 9,
    name: "Tikur Azmud Immunity Capsules",
    name_am: "የጥቁር አዝሙድ በሽታ መከላከያ ካፕሱል",
    price: 650,
    category: "Botanicals",
    category_am: "የአገር በቀል ዕፅዋት",
    format: "60 Veggie Caps",
    format_am: "60 የተፈጥሮ ካፕሱል",
    image: "images/tikur-azmud.jpg",
    badge: "Highland Harvest",
    badge_am: "የደጋ ምርት",
    goal_badge: "100% Organic",
    goal_badge_am: "100% ተፈጥሯዊ",
    market_highlight: "Cold-Pressed · Ethiopian Black Cumin · Lab Tested",
    description: "Cold-pressed black cumin seed extract sourced directly from the Ethiopian highlands. Supports daily immune health, joint comfort, and natural cellular defense.",
    rating: 5,
    stock: 35,
    servings: "60 Capsules"
  },
  {
    id: 10,
    name: "Moringa Vitality Powder",
    name_am: "የሞሪንጋ የተፈጥሮ ኃይል ዱቄት",
    price: 480,
    category: "Botanicals",
    category_am: "የአገር በቀል ዕፅዋት",
    format: "250g Pouch",
    format_am: "250 ግራም ቦርሳ",
    image: "images/moringa-powder.jpg",
    badge: "Pure Green",
    badge_am: "ንጹህ ቅጠል",
    goal_badge: "Superfood",
    goal_badge_am: "ሱፐርፉድ",
    market_highlight: "Shade-Dried · Rich in Iron & Essential Amino Acids",
    description: "Pure shade-dried highland moringa leaf powder. Packed with clean antioxidants, essential amino acids, iron, and natural sustained daily vitality.",
    rating: 5,
    stock: 50,
    servings: "50 Servings"
  },
  {
    id: 11,
    name: "Adwa Gold Radiance Face Oil",
    name_am: "ዐድዋ ጎልድ የፊት ማብሪያ ዘይት",
    price: 890,
    category: "Botanicals",
    category_am: "የአገር በቀል ዕፅዋት",
    format: "50ml Dropper Bottle",
    format_am: "50ሚሊ ጠብታ ጠርሙስ",
    image: "images/radiance-oil.jpg",
    badge: "Luxury Elixir",
    badge_am: "ልዩ ቅባት",
    goal_badge: "Glowing Skin",
    goal_badge_am: "ለሚያበራ ቆዳ",
    market_highlight: "Organic Jojoba · Frankincense · Rosehip Infusion",
    description: "A decadent elixir of organic jojoba, rosehip, and Ethiopian frankincense oil. Deeply hydrates, softens fine lines, and imparts a long-lasting golden radiance.",
    rating: 5,
    stock: 18,
    servings: "50 ml Bottle"
  }
];

const CATEGORIES = [
  "Whey Isolate",
  "Mass Gainer",
  "Creatine",
  "Pre-Workout",
  "BCAAs / EAAs",
  "Fat Burner",
  "Multivitamins",
  "Daily Wellness",
  "Botanicals"
];

const CATEGORY_ICONS = {
  "Whey Isolate": "fa-dumbbell",
  "Mass Gainer": "fa-weight-hanging",
  "Creatine": "fa-cube",
  "Pre-Workout": "fa-bolt-lightning",
  "BCAAs / EAAs": "fa-dna",
  "Fat Burner": "fa-fire-flame-curved",
  "Multivitamins": "fa-capsules",
  "Daily Wellness": "fa-heart-pulse",
  "Botanicals": "fa-leaf"
};

/* ---------- Application State ---------- */
let products = [];
let cart = [];
let orders = [];
let currentLang = localStorage.getItem('adwa_lang') || 'en';
let currentCategory = "All";
let currentSearch = "";
let currentMaxPrice = 10000;
let currentMinRating = 0;
let currentProductId = null;
let pendingOrderData = null;
let paymentTimerInterval = null;
let currentSort = 'default';

/* ---------- Persistence ---------- */
function initData() {
  const savedVersion = localStorage.getItem('adwa_catalog_version');
  const savedP = localStorage.getItem('adwa_products');
  
  if (savedVersion !== CATALOG_VERSION || !savedP) {
    products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem('adwa_products', JSON.stringify(products));
    localStorage.setItem('adwa_catalog_version', CATALOG_VERSION);
  } else {
    products = JSON.parse(savedP);
  }

  const savedCart = localStorage.getItem('adwa_cart');
  cart = savedCart ? JSON.parse(savedCart) : [];

  const savedOrders = localStorage.getItem('adwa_orders');
  orders = savedOrders ? JSON.parse(savedOrders) : [];
}

function saveCart() { localStorage.setItem('adwa_cart', JSON.stringify(cart)); }
function saveOrders() { localStorage.setItem('adwa_orders', JSON.stringify(orders)); }
function saveProducts() { localStorage.setItem('adwa_products', JSON.stringify(products)); }

/* ---------- Translation Helpers ---------- */
function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('adwa_lang', lang);
  document.body.classList.toggle('lang-am', lang === 'am');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  applyTranslations();
  renderCurrentView();
  showToast(lang === 'am' ? 'ቋንቋ ወደ አማርኛ ተቀይሯል' : 'Language switched to English', 'fa-globe');
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });
}

/* ---------- Utility Functions ---------- */
function formatPrice(num) {
  return Number(num).toLocaleString('en-US') + ' ETB';
}

function starString(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function showToast(msg, icon = 'fa-circle-check') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = toast ? toast.querySelector('i') : null;

  if (toastMsg) toastMsg.textContent = msg;
  if (toastIcon) toastIcon.className = 'fa-solid ' + icon;
  if (toast) {
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

function escapeHtml(str) {
  if (str === undefined || str === null) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

/* ---------- Routing (Multi-Page) ---------- */
let activePage = 'home';

/* Maps page IDs to their HTML files */
const PAGE_FILES = {
  home: 'index.html',
  shop: 'shop.html',
  product: 'product.html',
  cart: 'cart.html',
  checkout: 'checkout.html',
  about: 'about.html',
  contact: 'contact.html',
  admin: 'admin.html',
  login: 'login.html',
  customer: 'customer.html'
};

/* Detect which page we're on based on pathname */
function detectCurrentPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('shop.html')) return 'shop';
  if (path.includes('product.html')) return 'product';
  if (path.includes('cart.html')) return 'cart';
  if (path.includes('checkout.html')) return 'checkout';
  if (path.includes('about.html')) return 'about';
  if (path.includes('contact.html')) return 'contact';
  if (path.includes('admin.html')) return 'admin';
  if (path.includes('login.html')) return 'login';
  if (path.includes('customer.html')) return 'customer';
  return 'home';
}

function navigate(pageId, params = {}) {
  // Route guards
  if (pageId === 'admin' && sessionStorage.getItem('adwa_admin_logged_in') !== 'true') {
    pageId = 'login';
  }
  if (pageId === 'customer' && sessionStorage.getItem('adwa_customer_logged_in') !== 'true') {
    pageId = 'login';
  }

  const currentPage = detectCurrentPage();

  // If we're already on the right page, just render the content
  if (pageId === currentPage) {
    activePage = pageId;
    renderPageContent(pageId, params);
    return;
  }

  // Navigate to the correct HTML file
  const file = PAGE_FILES[pageId];
  if (file) {
    let url = file;
    if (pageId === 'product' && params.id) {
      url += '?id=' + params.id;
    }
    window.location.href = url;
  }
}

function renderPageContent(pageId, params = {}) {
  if (pageId === 'home') renderHomePage();
  else if (pageId === 'shop') renderShopPage();
  else if (pageId === 'product') {
    const id = params.id || new URLSearchParams(window.location.search).get('id');
    if (id) renderProductDetail(id);
  }
  else if (pageId === 'cart') renderCartPage();
  else if (pageId === 'checkout') renderCheckoutPage();
  else if (pageId === 'admin') renderAdminDashboard();
  else if (pageId === 'customer') renderCustomerDashboard();
}

function renderCurrentView() {
  renderPageContent(activePage);
}

function toggleDrawer(open) {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('open', open);
}

function toggleMobileFilters(open) {
  const sidebar = document.getElementById('shopSidebar');
  const overlay = document.getElementById('shopFilterOverlay');
  if (sidebar) sidebar.classList.toggle('open', open);
  if (overlay) overlay.classList.toggle('open', open);
}

function openMobileCategories() {
  window.location.href = 'shop.html';
}

/* ---------- Home Page Render ---------- */
function renderHomePage() {
  const catRow = document.getElementById('homeCategoryRow');
  if (catRow) {
    catRow.innerHTML = CATEGORIES.map(c => `
      <button class="pill" onclick="goToShopCategory('${c}')">
        <i class="fa-solid ${CATEGORY_ICONS[c] || 'fa-tag'}"></i>
        <span>${c}</span>
      </button>
    `).join('');
  }

  const bestsellers = [...products].sort((a, b) => b.rating - a.rating || b.price - a.price).slice(0, 8);
  const bestGrid = document.getElementById('bestsellerGrid');
  if (bestGrid) {
    bestGrid.innerHTML = bestsellers.map(productCardHTML).join('');
  }
}

function goToShopCategory(cat) {
  currentCategory = cat;
  if (detectCurrentPage() === 'shop') {
    renderShopPage();
  } else {
    // Store category in sessionStorage so shop page can pick it up
    sessionStorage.setItem('adwa_shop_category', cat);
    window.location.href = 'shop.html';
  }
}

/* ---------- Product Card Component (Standardized 1:1 Mockup & Badging) ---------- */
function productCardHTML(p) {
  const isOutOfStock = p.stock <= 0;
  const title = currentLang === 'am' && p.name_am ? p.name_am : p.name;
  const cat = currentLang === 'am' && p.category_am ? p.category_am : p.category;
  const primaryBadge = currentLang === 'am' && p.badge_am ? p.badge_am : p.badge;
  const goalBadge = currentLang === 'am' && p.goal_badge_am ? p.goal_badge_am : p.goal_badge;
  const format = currentLang === 'am' && p.format_am ? p.format_am : p.format;

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-badges-wrap">
        ${primaryBadge ? `<span class="product-badge badge-primary">${escapeHtml(primaryBadge)}</span>` : ''}
        ${goalBadge ? `<span class="product-badge badge-goal">${escapeHtml(goalBadge)}</span>` : ''}
        ${isOutOfStock ? `<span class="product-badge out">${t('out_of_stock')}</span>` : ''}
      </div>
      
      <div class="product-thumb" onclick="window.location.href='product.html?id=${p.id}'">
        ${p.image 
          ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.onerror=null; this.src='images/tikur-azmud.jpg';">` 
          : `<div class="thumb-fallback">${escapeHtml(title.charAt(0))}</div>`}
      </div>

      <div class="product-info">
        <div class="product-meta-row">
          <span class="product-cat">${escapeHtml(cat)}</span>
          ${format ? `<span class="product-format-tag">${escapeHtml(format)}</span>` : ''}
        </div>
        
        <h3 class="product-title" onclick="window.location.href='product.html?id=${p.id}'">${escapeHtml(title)}</h3>
        
        <div class="product-rating">
          ${starString(p.rating)}
          <span class="rating-num">(${p.rating}.0)</span>
        </div>

        ${p.market_highlight ? `
          <div class="product-highlight-badge">
            <i class="fa-solid fa-bolt-lightning"></i> <span>${escapeHtml(p.market_highlight)}</span>
          </div>
        ` : ''}

        <div class="product-price-row">
          <div class="price-col">
            <span class="price-label">${currentLang === 'am' ? 'ዋጋ' : 'Price'}</span>
            <span class="product-price">${formatPrice(p.price)}</span>
          </div>
          <button class="quick-add-btn" ${isOutOfStock ? 'disabled' : ''} onclick="addToCart(${p.id}, 1); event.stopPropagation();" aria-label="Add ${escapeHtml(title)} to cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Mobile Shop: Section Definitions (Category Groupings) ---------- */
const MOBILE_SHOP_SECTIONS = [
  {
    title: 'Bestsellers',
    title_am: 'ተወዳጅ ምርቶች',
    filter: (products) => [...products].sort((a, b) => b.rating - a.rating || b.stock - a.stock).slice(0, 9),
    viewAllCategory: 'All'
  },
  {
    title: 'Creatine',
    title_am: 'ክሪያቲን',
    filter: (products) => products.filter(p => p.category === 'Creatine').slice(0, 9),
    viewAllCategory: 'Creatine'
  },
  {
    title: 'Protein & Mass',
    title_am: 'ፕሮቲን',
    filter: (products) => products.filter(p => p.category === 'Whey Isolate' || p.category === 'Mass Gainer').slice(0, 9),
    viewAllCategory: 'Whey Isolate'
  },
  {
    title: 'Pre-Workout & Energy',
    title_am: 'ፕሪ-ወርክአውት',
    filter: (products) => products.filter(p => p.category === 'Pre-Workout' || p.category === 'Fat Burner').slice(0, 9),
    viewAllCategory: 'Pre-Workout'
  },
  {
    title: 'Health & Wellness',
    title_am: 'ጤና እና ኦሜጋ-3',
    filter: (products) => products.filter(p => p.category === 'Multivitamins' || p.category === 'Daily Wellness' || p.category === 'BCAAs / EAAs').slice(0, 9),
    viewAllCategory: 'Multivitamins'
  },
  {
    title: 'Ethiopian Botanicals',
    title_am: 'የአገር በቀል ዕፅዋት',
    filter: (products) => products.filter(p => p.category === 'Botanicals').slice(0, 9),
    viewAllCategory: 'Botanicals'
  }
];

/* ---------- Mobile Product Card Component (Compact Carousel Card) ---------- */
function mobileProductCardHTML(p) {
  const isOutOfStock = p.stock <= 0;
  const title = currentLang === 'am' && p.name_am ? p.name_am : p.name;
  const cat = currentLang === 'am' && p.category_am ? p.category_am : p.category;
  const format = currentLang === 'am' && p.format_am ? p.format_am : p.format;
  const primaryBadge = currentLang === 'am' && p.badge_am ? p.badge_am : p.badge;
  const addToCartText = currentLang === 'am' ? 'ወደ ቅርጫት' : 'Add to Cart';
  const priceNum = Number(p.price).toLocaleString('en-US');

  return `
    <div class="mobile-product-card" data-id="${p.id}">
      <div class="mpc-image-wrap" onclick="window.location.href='product.html?id=${p.id}'">
        ${primaryBadge ? `<span class="mpc-badge${isOutOfStock ? ' badge-out' : ''}">${isOutOfStock ? escapeHtml(currentLang === 'am' ? 'አልቋል' : 'Out') : escapeHtml(primaryBadge)}</span>` : (isOutOfStock ? `<span class="mpc-badge badge-out">${escapeHtml(currentLang === 'am' ? 'አልቋል' : 'Out')}</span>` : '')}
        <button class="mpc-wishlist" aria-label="Wishlist" onclick="event.stopPropagation();">
          <i class="fa-regular fa-heart"></i>
        </button>
        ${p.image
          ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.onerror=null; this.src='images/tikur-azmud.jpg';">`
          : `<div style="font-size:2rem;color:var(--accent-primary);font-weight:800;">${escapeHtml(title.charAt(0))}</div>`}
      </div>
      <div class="mpc-info">
        <div class="mpc-brand">${escapeHtml(cat)}</div>
        <div class="mpc-name" onclick="window.location.href='product.html?id=${p.id}'">${escapeHtml(title)}</div>
        ${format ? `<div class="mpc-format">${escapeHtml(format)}</div>` : ''}
        <div class="mpc-price">${priceNum} <span class="mpc-currency">ETB</span></div>
      </div>
      <button class="mpc-add-to-cart" ${isOutOfStock ? 'disabled' : ''} onclick="addToCart(${p.id}, 1); event.stopPropagation();" aria-label="Add ${escapeHtml(title)} to cart">
        <i class="fa-solid fa-cart-shopping"></i> ${addToCartText}
      </button>
    </div>
  `;
}

/* ---------- Mobile Shop: Render Carousel Sections ---------- */
function renderMobileShopSections() {
  const shopMainCatalog = document.querySelector('.shop-main-catalog');
  if (!shopMainCatalog) return;

  // Remove existing mobile sections container if it exists
  const existingContainer = document.getElementById('mobileShopSections');
  if (existingContainer) existingContainer.remove();

  const sectionsContainer = document.createElement('div');
  sectionsContainer.id = 'mobileShopSections';
  sectionsContainer.className = 'mobile-shop-sections';

  let sectionsHTML = '';

  MOBILE_SHOP_SECTIONS.forEach(section => {
    const sectionProducts = section.filter(products);
    if (sectionProducts.length === 0) return;

    const sectionTitle = currentLang === 'am' && section.title_am ? section.title_am : section.title;
    const viewAllText = currentLang === 'am' ? 'ሁሉንም ይመልከቱ' : 'View All';

    sectionsHTML += `
      <div class="mobile-section">
        <div class="mobile-section-header">
          <h2 class="mobile-section-title">${escapeHtml(sectionTitle)}</h2>
          <button class="mobile-section-viewall" onclick="setShopCategory('${escapeHtml(section.viewAllCategory)}')">
            ${viewAllText} <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div class="mobile-product-carousel">
          ${sectionProducts.map(mobileProductCardHTML).join('')}
        </div>
      </div>
    `;
  });

  sectionsContainer.innerHTML = sectionsHTML;

  // Insert after the category row, before the toolbar
  const toolbar = shopMainCatalog.querySelector('.shop-toolbar');
  if (toolbar) {
    shopMainCatalog.insertBefore(sectionsContainer, toolbar);
  } else {
    shopMainCatalog.appendChild(sectionsContainer);
  }
}

/* ---------- Mobile Shop: Toggle Between Carousel and Grid Mode ---------- */
function isMobileShopCarouselMode() {
  return window.innerWidth <= 768 &&
         currentCategory === 'All' &&
         !currentSearch &&
         currentMaxPrice >= 10000 &&
         currentMinRating === 0 &&
         currentSort === 'default';
}

function updateMobileShopLayout() {
  if (window.innerWidth > 768) return; // Desktop: do nothing

  const grid = document.getElementById('shopGrid');
  const toolbar = document.querySelector('.shop-toolbar');
  const emptyState = document.getElementById('shopEmptyState');
  const sectionsContainer = document.getElementById('mobileShopSections');

  if (isMobileShopCarouselMode()) {
    // Carousel mode: hide grid, show sections
    if (grid) grid.classList.add('mobile-hidden');
    if (toolbar) toolbar.classList.add('mobile-hidden');
    if (emptyState) emptyState.classList.add('mobile-hidden');
    renderMobileShopSections();
  } else {
    // Grid mode: show grid, hide sections
    if (grid) grid.classList.remove('mobile-hidden');
    if (toolbar) toolbar.classList.remove('mobile-hidden');
    if (emptyState) emptyState.classList.remove('mobile-hidden');
    if (sectionsContainer) sectionsContainer.remove();
  }
}

/* ---------- Shop Page Render ---------- */
function renderShopPage() {
  // Pick up saved category from cross-page navigation
  const savedCat = sessionStorage.getItem('adwa_shop_category');
  if (savedCat) {
    currentCategory = savedCat;
    sessionStorage.removeItem('adwa_shop_category');
  }

  // Category pills
  const pillsHTML = ['All', ...CATEGORIES].map(c => `
    <button class="pill ${currentCategory === c ? 'active' : ''}" onclick="setShopCategory('${c}')">
      ${c === 'All' ? '<i class="fa-solid fa-border-all"></i> All' : '<i class="fa-solid ' + (CATEGORY_ICONS[c] || 'fa-tag') + '"></i> ' + c}
    </button>
  `).join('');
  document.getElementById('shopCategoryRow').innerHTML = pillsHTML;

  // Sidebar category list
  const sideCats = ['All', ...CATEGORIES].map(c => `
    <label class="filter-label">
      <input type="radio" name="sideCat" ${currentCategory === c ? 'checked' : ''} onchange="setShopCategory('${c}')">
      <span>${c}</span>
    </label>
  `).join('');
  document.getElementById('sideCategoryList').innerHTML = sideCats;

  // Rating filters
  const ratingHTML = [0, 5, 4, 3].map(r => `
    <label class="filter-label">
      <input type="radio" name="ratingF" ${currentMinRating === r ? 'checked' : ''} onchange="setMinRating(${r})">
      <span>${r === 0 ? 'Any Rating' : r + '★ & Up'}</span>
    </label>
  `).join('');
  document.getElementById('sideRatingList').innerHTML = ratingHTML;

  applyShopFilters();

  // Initialize promo banner on mobile
  initPromoBanner();
}

function setShopCategory(c) {
  currentCategory = c;
  renderShopPage();
}

function setMinRating(r) {
  currentMinRating = r;
  applyShopFilters();
}

function onPriceChange(v) {
  currentMaxPrice = Number(v);
  const display = document.getElementById('priceRangeDisplay');
  if (display) display.textContent = v >= 10000 ? '10,000+ ETB' : formatPrice(v);
  applyShopFilters();
}

function onSearchInput(val) {
  currentSearch = val.toLowerCase().trim();
  applyShopFilters();
}

function resetFilters() {
  currentCategory = "All";
  currentSearch = "";
  currentMaxPrice = 10000;
  currentMinRating = 0;
  currentSort = 'default';
  const sInput = document.getElementById('shopSearchInput');
  if (sInput) sInput.value = "";
  const pSlider = document.getElementById('priceRangeSlider');
  if (pSlider) pSlider.value = 10000;
  const pDisplay = document.getElementById('priceRangeDisplay');
  if (pDisplay) pDisplay.textContent = '10,000+ ETB';
  // Reset sort UI
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === 'default');
  });
  renderShopPage();
}

function applyShopFilters() {
  let filtered = products.filter(p => {
    const matchCat = currentCategory === 'All' || p.category === currentCategory;
    const matchSearch = !currentSearch || 
      p.name.toLowerCase().includes(currentSearch) || 
      (p.name_am && p.name_am.includes(currentSearch)) ||
      p.category.toLowerCase().includes(currentSearch) ||
      (p.format && p.format.toLowerCase().includes(currentSearch));
    const matchPrice = p.price <= currentMaxPrice;
    const matchRating = p.rating >= currentMinRating;
    return matchCat && matchSearch && matchPrice && matchRating;
  });

  // Apply sort
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `${filtered.length} supplement${filtered.length !== 1 ? 's' : ''} found`;

  const grid = document.getElementById('shopGrid');
  const empty = document.getElementById('shopEmptyState');

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    grid.innerHTML = filtered.map(productCardHTML).join('');
  }
  
  // Call update layout to switch between carousel and grid modes on mobile
  updateMobileShopLayout();
}

/* ---------- Sort Functionality (Mobile) ---------- */
function toggleMobileSort() {
  const dropdown = document.getElementById('mobileSortDropdown');
  if (dropdown) {
    const isOpen = dropdown.classList.toggle('open');
    if (isOpen) {
      // Close on outside click
      setTimeout(() => {
        document.addEventListener('click', closeSortOnOutside);
      }, 10);
    }
  }
}

function closeSortOnOutside(e) {
  const wrap = document.getElementById('mobileSortWrap');
  if (wrap && !wrap.contains(e.target)) {
    const dropdown = document.getElementById('mobileSortDropdown');
    if (dropdown) dropdown.classList.remove('open');
    document.removeEventListener('click', closeSortOnOutside);
  }
}

function setSort(option) {
  currentSort = option;
  // Update active state on sort buttons
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === option);
  });
  // Close dropdown
  const dropdown = document.getElementById('mobileSortDropdown');
  if (dropdown) dropdown.classList.remove('open');
  document.removeEventListener('click', closeSortOnOutside);
  applyShopFilters();
}

/* ---------- Promotional Banner Carousel (Mobile Only — Demo Content) ---------- */
const PROMO_BANNERS = [
  {
    badge: 'Limited Offer',
    headline: 'UP TO 20% OFF',
    subtext: 'Save on selected protein supplements',
    cta: 'Shop Protein',
    category: 'Whey Isolate',
    bg: 'linear-gradient(135deg, #1E3A8A 0%, #312E81 100%)'
  },
  {
    badge: 'Creatine Special',
    headline: '15% OFF CREATINE',
    subtext: 'Limited-time offer on selected creatine',
    cta: 'Shop Creatine',
    category: 'Creatine',
    bg: 'linear-gradient(135deg, #065F46 0%, #1E3A5F 100%)'
  },
  {
    badge: 'Bundle Deal',
    headline: 'BUNDLE & SAVE',
    subtext: 'Get more value with protein + creatine bundles',
    cta: 'View Bundles',
    category: 'All',
    bg: 'linear-gradient(135deg, #4F46E5 0%, #6D28D9 100%)'
  },
  {
    badge: 'Just Landed',
    headline: 'NEW ARRIVALS',
    subtext: 'Discover the latest supplements in our catalog',
    cta: 'Shop New',
    category: 'All',
    bg: 'linear-gradient(135deg, #7C2D12 0%, #991B1B 100%)'
  },
  {
    badge: 'This Weekend',
    headline: 'WEEKEND SPECIAL',
    subtext: 'Extra savings on selected wellness products',
    cta: 'Shop Now',
    category: 'Daily Wellness',
    bg: 'linear-gradient(135deg, #1E3A8A 0%, #4338CA 100%)'
  }
];

let _promoInterval = null;
let _promoIndex = 0;
let _promoResumeTimer = null;

function initPromoBanner() {
  const wrap = document.getElementById('promoBannerCarousel');
  if (!wrap) return;

  // Only render on mobile-width screens
  if (window.innerWidth > 768) {
    wrap.innerHTML = '';
    return;
  }

  // Build slides
  const slidesHTML = PROMO_BANNERS.map((b, i) => `
    <div class="promo-slide" style="background:${b.bg};" data-index="${i}">
      <span class="promo-badge">${escapeHtml(b.badge)}</span>
      <div class="promo-headline">${escapeHtml(b.headline)}</div>
      <div class="promo-subtext">${escapeHtml(b.subtext)}</div>
      <button class="promo-cta" onclick="goToShopCategory('${escapeHtml(b.category)}')">
        ${escapeHtml(b.cta)} <i class="fa-solid fa-arrow-right" style="font-size:0.65rem;"></i>
      </button>
    </div>
  `).join('');

  const dotsHTML = PROMO_BANNERS.map((_, i) => `
    <button class="promo-dot ${i === 0 ? 'active' : ''}" data-dot="${i}" onclick="goToPromoSlide(${i})" aria-label="Go to promotion ${i + 1}"></button>
  `).join('');

  wrap.innerHTML = `
    <div class="promo-carousel-track" id="promoTrack">${slidesHTML}</div>
    <div class="promo-dots" id="promoDots">${dotsHTML}</div>
  `;

  _promoIndex = 0;
  startPromoAutoplay();
  initPromoSwipe();
}

function goToPromoSlide(index) {
  const track = document.getElementById('promoTrack');
  const dots = document.querySelectorAll('.promo-dot');
  if (!track) return;

  _promoIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function advancePromoSlide() {
  _promoIndex = (_promoIndex + 1) % PROMO_BANNERS.length;
  goToPromoSlide(_promoIndex);
}

function startPromoAutoplay() {
  stopPromoAutoplay();
  _promoInterval = setInterval(advancePromoSlide, 5000);
}

function stopPromoAutoplay() {
  if (_promoInterval) {
    clearInterval(_promoInterval);
    _promoInterval = null;
  }
}

function pausePromoAutoplay() {
  stopPromoAutoplay();
  if (_promoResumeTimer) clearTimeout(_promoResumeTimer);
  _promoResumeTimer = setTimeout(startPromoAutoplay, 8000);
}

function initPromoSwipe() {
  const track = document.getElementById('promoTrack');
  if (!track) return;

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    track.classList.add('swiping');
    pausePromoAutoplay();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const offset = -(_promoIndex * 100);
    const pxPercent = (diff / track.parentElement.offsetWidth) * 100;
    track.style.transform = `translateX(${offset + pxPercent}%)`;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('swiping');
    const diff = currentX - startX;
    const threshold = 30;

    if (diff < -threshold && _promoIndex < PROMO_BANNERS.length - 1) {
      _promoIndex++;
    } else if (diff > threshold && _promoIndex > 0) {
      _promoIndex--;
    } else if (diff < -threshold && _promoIndex === PROMO_BANNERS.length - 1) {
      _promoIndex = 0; // Loop
    } else if (diff > threshold && _promoIndex === 0) {
      _promoIndex = PROMO_BANNERS.length - 1; // Loop
    }

    goToPromoSlide(_promoIndex);
  }, { passive: true });
}

/* ---------- Product Detail View (High-Res 1:1 Showcase & Mobile Buy Bar) ---------- */
function renderProductDetail(id) {
  const p = products.find(x => x.id === Number(id));
  const wrap = document.getElementById('productDetailWrap');
  if (!p) {
    wrap.innerHTML = `<div class="empty-state"><h2>Product not found</h2></div>`;
    return;
  }
  currentProductId = p.id;
  const isOutOfStock = p.stock <= 0;
  const title = currentLang === 'am' && p.name_am ? p.name_am : p.name;
  const cat = currentLang === 'am' && p.category_am ? p.category_am : p.category;
  const primaryBadge = currentLang === 'am' && p.badge_am ? p.badge_am : p.badge;
  const goalBadge = currentLang === 'am' && p.goal_badge_am ? p.goal_badge_am : p.goal_badge;
  const format = currentLang === 'am' && p.format_am ? p.format_am : p.format;

  // Sync Mobile Sticky Bar
  const stickyPrice = document.getElementById('mobileStickyPrice');
  if (stickyPrice) stickyPrice.textContent = formatPrice(p.price);
  const stickyBar = document.getElementById('mobileStickyBuyBar');
  if (stickyBar) stickyBar.classList.add('active');

  wrap.innerHTML = `
    <div class="pd-grid">
      <div class="pd-gallery">
        <div class="pd-badges-container">
          ${primaryBadge ? `<span class="product-badge badge-primary">${escapeHtml(primaryBadge)}</span>` : ''}
          ${goalBadge ? `<span class="product-badge badge-goal">${escapeHtml(goalBadge)}</span>` : ''}
        </div>
        <div class="pd-thumb-1to1">
          ${p.image 
            ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(title)}" onerror="this.onerror=null; this.src='images/tikur-azmud.jpg';">`
            : `<div class="thumb-fallback">${escapeHtml(title.charAt(0))}</div>`}
        </div>
      </div>
      
      <div class="pd-details">
        <div class="pd-top-meta">
          <span class="eyebrow">${escapeHtml(cat)}</span>
          ${format ? `<span class="format-pill"><i class="fa-solid fa-box"></i> ${escapeHtml(format)}</span>` : ''}
        </div>
        
        <h1 class="pd-title">${escapeHtml(title)}</h1>
        
        <div class="pd-rating-strip">
          <div class="product-rating">
            ${starString(p.rating)}
          </div>
          <span class="pd-rating-text">5.0 · 100% Genuine Distributor Import</span>
        </div>

        <div class="pd-price-row">
          <span class="pd-price">${formatPrice(p.price)}</span>
          <span class="pd-vat-badge">All Taxes &amp; Duties Paid</span>
        </div>
        
        <div class="stock-tag ${isOutOfStock ? 'out' : ''}">
          <i class="fa-solid ${isOutOfStock ? 'fa-circle-xmark' : 'fa-circle-check'}"></i>
          <span>${isOutOfStock ? t('out_of_stock') : `${t('in_stock')} (${p.stock} units in Addis Ababa)`}</span>
        </div>

        <div class="pd-quick-perks">
          <div class="pd-perk-item">
            <i class="fa-solid fa-truck-fast"></i>
            <div>
              <strong>Same-Day Dispatch in Addis</strong>
              <span>Express delivery to Bole, Kazanchis, CMC &amp; Piassa</span>
            </div>
          </div>
          <div class="pd-perk-item">
            <i class="fa-solid fa-shield-halved"></i>
            <div>
              <strong>Authenticity Guaranteed</strong>
              <span>Original manufacturer batch directly from verified portals</span>
            </div>
          </div>
        </div>

        <p class="pd-desc">${escapeHtml(p.description)}</p>

        ${p.servings ? `
          <div class="pd-spec-block">
            <h4><i class="fa-solid fa-cubes-stacked"></i> Format &amp; Servings</h4>
            <p style="color:var(--ink-muted);font-size:0.92rem;font-weight:600;">${escapeHtml(p.servings)}</p>
          </div>
        ` : ''}

        ${p.market_highlight ? `
          <div class="pd-spec-block">
            <h4><i class="fa-solid fa-certificate"></i> Key Formula Highlights</h4>
            <p style="color:var(--ink-muted);font-size:0.92rem;">${escapeHtml(p.market_highlight)}</p>
          </div>
        ` : ''}

        <div class="pd-spec-block">
          <h4>${currentLang === 'am' ? 'ብዛት ይምረጡ' : 'Select Quantity'}</h4>
          <div class="qty-control">
            <button type="button" onclick="changeDetailQty(-1)" aria-label="Decrease quantity">−</button>
            <span id="detailQty">1</span>
            <button type="button" onclick="changeDetailQty(1)" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <div class="pd-actions">
          <button class="btn btn-primary btn-lg" ${isOutOfStock ? 'disabled' : ''} onclick="addDetailToCart()">
            <i class="fa-solid fa-bag-shopping"></i> ${t('add_to_cart')}
          </button>
          <a href="https://wa.me/251912345678?text=Hello%20Adwa%20Supplements,%20I%20want%20to%20order%20${encodeURIComponent(p.name)}" target="_blank" rel="noopener" class="btn btn-outline btn-lg wa-direct-btn">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  `;
}

function changeDetailQty(delta) {
  const el = document.getElementById('detailQty');
  if (!el) return;
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  el.textContent = val;
}

function addDetailToCart() {
  const el = document.getElementById('detailQty');
  const qty = el ? parseInt(el.textContent) : 1;
  addToCart(currentProductId, qty);
}

function addStickyDetailToCart() {
  addDetailToCart();
}

/* ---------- Cart System ---------- */
function addToCart(productId, qty = 1) {
  const p = products.find(x => x.id === Number(productId));
  if (!p || p.stock <= 0) return;

  const existing = cart.find(c => c.productId === p.id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, p.stock);
  } else {
    cart.push({ productId: p.id, qty: Math.min(qty, p.stock) });
  }

  saveCart();
  updateCartBadge();
  showToast(`${p.name} added to cart`, 'fa-cart-plus');
}

function updateCartQty(productId, qty) {
  const item = cart.find(c => c.productId === productId);
  const p = products.find(x => x.id === productId);
  if (!item || !p) return;

  item.qty = Math.max(1, Math.min(qty, p.stock));
  saveCart();
  renderCartPage();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.productId !== productId);
  saveCart();
  renderCartPage();
  updateCartBadge();
  showToast('Item removed from cart', 'fa-trash');
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 350);
  }
  const mobileBadge = document.getElementById('mobileCartBadge');
  if (mobileBadge) {
    mobileBadge.textContent = count;
    mobileBadge.classList.add('bump');
    setTimeout(() => mobileBadge.classList.remove('bump'), 350);
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  cart.forEach(item => {
    const p = products.find(x => x.id === item.productId);
    if (p) subtotal += p.price * item.qty;
  });
  const delivery = subtotal > 0 ? (subtotal >= 1500 ? 0 : 100) : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function renderCartPage() {
  const wrap = document.getElementById('cartContentWrap');
  if (!wrap) return;
  if (cart.length === 0) {
    wrap.innerHTML = `
      <div style="text-align:center;padding:70px 20px;">
        <i class="fa-solid fa-bag-shopping" style="font-size:3.5rem;color:var(--accent-primary);margin-bottom:18px;"></i>
        <h2>${t('cart_empty')}</h2>
        <p style="color:var(--ink-muted);margin:10px auto 26px;max-width:420px;">${t('cart_empty_sub')}</p>
        <a href="shop.html" class="btn btn-primary">${t('start_shopping')}</a>
      </div>
    `;
    return;
  }

  const itemsHtml = cart.map(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return '';
    const title = currentLang === 'am' && p.name_am ? p.name_am : p.name;
    return `
      <div class="cart-card">
        <div class="cart-card-thumb">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(title)}" onerror="this.outerHTML='<div class=&quot;thumb-fallback&quot;>${escapeHtml(title.charAt(0))}</div>'">
        </div>
        <div>
          <h4 class="cart-card-title">${escapeHtml(title)}</h4>
          <span style="font-size:0.8rem;color:var(--gold);font-weight:700;">${formatPrice(p.price)}</span>
          <div>
            <button onclick="removeFromCart(${p.id})" style="color:var(--red);font-size:0.78rem;margin-top:6px;display:inline-flex;align-items:center;gap:4px;">
              <i class="fa-solid fa-trash-can"></i> Remove
            </button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <span style="font-weight:700;color:var(--green-deep);">${formatPrice(p.price * item.qty)}</span>
          <div class="qty-control" style="transform:scale(0.85);transform-origin:right center;">
            <button type="button" onclick="updateCartQty(${p.id}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button type="button" onclick="updateCartQty(${p.id}, ${item.qty + 1})">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const totals = calculateCartTotals();

  wrap.innerHTML = `
    <div class="cart-grid">
      <div>${itemsHtml}</div>
      <div class="order-summary-box">
        <h3 style="margin-bottom:18px;">${t('order_summary')}</h3>
        <div class="summary-line">
          <span>${t('subtotal')}</span>
          <strong>${formatPrice(totals.subtotal)}</strong>
        </div>
        <div class="summary-line">
          <span>${t('delivery_fee')}</span>
          <span>${totals.delivery === 0 ? 'Free' : formatPrice(totals.delivery)}</span>
        </div>
        <div class="summary-line total">
          <span>${t('total')}</span>
          <span>${formatPrice(totals.total)}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:24px;">
          ${t('proceed_checkout')} <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;
}

/* ---------- Checkout View ---------- */
function renderCheckoutPage() {
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  const totals = calculateCartTotals();

  const linesHtml = cart.map(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return '';
    return `
      <div class="summary-line">
        <span>${escapeHtml(p.name)} × ${item.qty}</span>
        <span>${formatPrice(p.price * item.qty)}</span>
      </div>
    `;
  }).join('');

  const checkoutSummary = document.getElementById('checkoutSummary');
  if (checkoutSummary) {
    checkoutSummary.innerHTML = `
      <h3 style="margin-bottom:16px;">${t('order_summary')}</h3>
      ${linesHtml}
      <div class="summary-line" style="border-top:1px solid var(--line);margin-top:10px;padding-top:12px;">
        <span>${t('subtotal')}</span>
        <span>${formatPrice(totals.subtotal)}</span>
      </div>
      <div class="summary-line">
        <span>${t('delivery_fee')}</span>
        <span id="checkoutDeliverySpan">${totals.delivery === 0 ? 'Free' : formatPrice(totals.delivery)}</span>
      </div>
      <div class="summary-line total">
        <span>${t('total')}</span>
        <span id="checkoutTotalSpan">${formatPrice(totals.total)}</span>
      </div>
    `;
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const orderData = {
    id: 'ADW-' + Math.floor(100000 + Math.random() * 899999),
    customerName: form.fullName.value.trim(),
    phone: form.phone.value.trim(),
    city: form.city.value.trim(),
    subcity: form.subcity.value.trim(),
    address: form.address.value.trim(),
    deliveryOption: form.delivery.value,
    paymentMethod: form.payment.value,
    date: new Date().toISOString()
  };

  const totals = calculateCartTotals();
  const deliveryExtra = orderData.deliveryOption === 'express' ? 250 : totals.delivery;
  orderData.total = totals.subtotal + deliveryExtra;
  orderData.items = cart.map(item => {
    const p = products.find(x => x.id === item.productId);
    return { productId: item.productId, name: p ? p.name : '', qty: item.qty, price: p ? p.price : 0 };
  });

  pendingOrderData = orderData;

  // If Telebirr or CBE Birr, open Payment Modal
  if (orderData.paymentMethod === 'telebirr' || orderData.paymentMethod === 'cbe') {
    openPaymentModal(orderData);
  } else {
    // Cash on Delivery
    finalizeOrder(orderData);
  }
}

/* ---------- Telebirr & CBE Birr Payment Modal Controller ---------- */
function openPaymentModal(order) {
  const modal = document.getElementById('paymentModal');
  const isTelebirr = order.paymentMethod === 'telebirr';

  const logoBox = document.getElementById('pmLogo');
  logoBox.className = `pm-badge-logo ${isTelebirr ? 'telebirr' : 'cbe'}`;
  logoBox.innerHTML = isTelebirr 
    ? `<i class="fa-solid fa-mobile-screen"></i>` 
    : `<i class="fa-solid fa-building-columns"></i>`;

  document.getElementById('pmTitle').textContent = isTelebirr ? t('pm_telebirr_title') : t('pm_cbe_title');
  document.getElementById('pmAmount').textContent = formatPrice(order.total);

  const codeLabel = isTelebirr ? t('pm_merchant_id') : t('pm_account_num');
  const codeVal = isTelebirr ? '928103' : '1000 2489 1234';

  document.getElementById('pmCodeLabel').textContent = codeLabel;
  document.getElementById('pmCodeVal').textContent = codeVal;

  // Render SVG QR code
  renderPaymentQR(order.total, codeVal, isTelebirr ? 'Telebirr' : 'CBE');

  // Start 15:00 countdown timer
  startPaymentCountdown(15 * 60);

  document.getElementById('pmRefInput').value = '';
  modal.classList.add('open');
}

function closePaymentModal() {
  document.getElementById('paymentModal').classList.remove('open');
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
}

function copyPaymentCode() {
  const code = document.getElementById('pmCodeVal').textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast('Code copied to clipboard!', 'fa-copy');
  });
}

function startPaymentCountdown(seconds) {
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
  let remaining = seconds;
  const timerEl = document.getElementById('pmTimer');

  const update = () => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (remaining <= 0) {
      clearInterval(paymentTimerInterval);
      closePaymentModal();
      showToast('Payment window expired. Please try again.', 'fa-clock');
    }
    remaining--;
  };
  update();
  paymentTimerInterval = setInterval(update, 1000);
}

function renderPaymentQR(amount, code, method) {
  // SVG stylized QR Code with brand emblem center
  const qrSvg = `
    <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="170" height="170" rx="10" fill="white"/>
      <!-- Outer tracking squares -->
      <rect x="15" y="15" width="40" height="40" rx="6" fill="#0B2218"/>
      <rect x="23" y="23" width="24" height="24" rx="4" fill="white"/>
      <rect x="29" y="29" width="12" height="12" rx="2" fill="#D4A02B"/>

      <rect x="115" y="15" width="40" height="40" rx="6" fill="#0B2218"/>
      <rect x="123" y="23" width="24" height="24" rx="4" fill="white"/>
      <rect x="129" y="29" width="12" height="12" rx="2" fill="#D4A02B"/>

      <rect x="15" y="115" width="40" height="40" rx="6" fill="#0B2218"/>
      <rect x="23" y="123" width="24" height="24" rx="4" fill="white"/>
      <rect x="29" y="129" width="12" height="12" rx="2" fill="#D4A02B"/>

      <!-- Matrix data pattern blocks -->
      <rect x="65" y="15" width="8" height="24" fill="#0B2218"/>
      <rect x="78" y="25" width="16" height="8" fill="#D4A02B"/>
      <rect x="65" y="45" width="40" height="8" fill="#0B2218"/>
      <rect x="15" y="65" width="20" height="10" fill="#0B2218"/>
      <rect x="40" y="65" width="15" height="15" fill="#D4A02B"/>
      <rect x="115" y="65" width="30" height="10" fill="#0B2218"/>
      <rect x="135" y="80" width="20" height="15" fill="#D4A02B"/>
      <rect x="65" y="115" width="20" height="20" fill="#0B2218"/>
      <rect x="90" y="125" width="25" height="10" fill="#D4A02B"/>
      <rect x="65" y="140" width="30" height="15" fill="#0B2218"/>
      <rect x="120" y="120" width="15" height="25" fill="#0B2218"/>
      <rect x="140" y="130" width="15" height="15" fill="#D4A02B"/>

      <!-- Center Brand Shield Seal -->
      <circle cx="85" cy="85" r="20" fill="#0B2218" stroke="#D4A02B" stroke-width="2"/>
      <path d="M85 73 L90 83 L101 83 L92 89 L95 99 L85 93 L75 99 L78 89 L69 83 L80 83 Z" fill="#D4A02B"/>
    </svg>
  `;
  document.getElementById('pmQrContainer').innerHTML = qrSvg;
}

function verifyAndCompletePayment() {
  const ref = document.getElementById('pmRefInput').value.trim();
  if (!ref || ref.length < 4) {
    showToast('Please enter the transaction reference from your SMS', 'fa-circle-exclamation');
    return;
  }

  if (pendingOrderData) {
    pendingOrderData.transactionRef = ref;
    pendingOrderData.status = 'paid';
    closePaymentModal();
    finalizeOrder(pendingOrderData);
  }
}

function finalizeOrder(order) {
  // Deduct inventory stock
  cart.forEach(c => {
    const p = products.find(x => x.id === c.productId);
    if (p) p.stock = Math.max(0, p.stock - c.qty);
  });
  saveProducts();

  orders.unshift(order);
  saveOrders();

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();

  renderOrderConfirmation(order);
  navigate('confirmation');
  showToast('Order confirmed successfully!', 'fa-circle-check');
}

function renderOrderConfirmation(order) {
  const eta = new Date(Date.now() + (order.deliveryOption === 'express' ? 1 : 3) * 86400000);
  document.getElementById('confirmationDetails').innerHTML = `
    <div style="background:var(--bg-card);border:1.5px solid var(--line-gold);border-radius:var(--radius-md);padding:24px;margin:24px 0;text-align:left;">
      <div class="summary-line"><span>${t('order_number')}</span><strong>${order.id}</strong></div>
      <div class="summary-line"><span>${t('customer')}</span><span>${escapeHtml(order.customerName)}</span></div>
      <div class="summary-line"><span>${t('phone_number')}</span><span>${escapeHtml(order.phone)}</span></div>
      <div class="summary-line"><span>${t('delivery_address')}</span><span style="text-align:right;max-width:60%;">${escapeHtml(order.address)}, ${escapeHtml(order.subcity)}, ${escapeHtml(order.city)}</span></div>
      <div class="summary-line"><span>${t('payment_method')}</span><strong style="text-transform:uppercase;color:var(--gold);">${escapeHtml(order.paymentMethod)} ${order.transactionRef ? `(${order.transactionRef})` : ''}</strong></div>
      <div class="summary-line"><span>${t('est_delivery')}</span><strong>${eta.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></div>
      <div class="summary-line total"><span>${t('total')}</span><span>${formatPrice(order.total)}</span></div>
    </div>
  `;
}

/* ---------- Authentication (Multi-Role) ---------- */
function goToProfile() {
  if (sessionStorage.getItem('adwa_admin_logged_in') === 'true') {
    window.location.href = 'admin.html';
  } else if (sessionStorage.getItem('adwa_customer_logged_in') === 'true') {
    window.location.href = 'customer.html';
  } else {
    window.location.href = 'login.html';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginErrorMsg');

  // Manager Login
  if (email === 'admin@adwa.com' && pass === 'Adwa2026') {
    sessionStorage.setItem('adwa_admin_logged_in', 'true');
    sessionStorage.removeItem('adwa_customer_logged_in');
    errEl.style.display = 'none';
    showToast('Welcome back, Manager!', 'fa-user-shield');
    window.location.href = 'admin.html';
  } 
  // Customer Login
  else if (email === 'customer@adwa.com' && pass === 'Adwa2026') {
    sessionStorage.setItem('adwa_customer_logged_in', 'true');
    sessionStorage.removeItem('adwa_admin_logged_in');
    errEl.style.display = 'none';
    showToast('Welcome back!', 'fa-user');
    window.location.href = 'customer.html';
  } 
  else {
    errEl.style.display = 'block';
  }
}

function handleLogout() {
  sessionStorage.removeItem('adwa_admin_logged_in');
  sessionStorage.removeItem('adwa_customer_logged_in');
  showToast('You have been logged out', 'fa-right-from-bracket');
  window.location.href = 'login.html';
}

/* ---------- Admin Dashboard ---------- */
function renderAdminDashboard() {
  const totalRev = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter(o => o.status !== 'delivered').length;

  document.getElementById('adminStatsGrid').innerHTML = `
    <div class="stat-box">
      <div class="stat-num">${products.length}</div>
      <div class="stat-label">Catalog Products</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">${orders.length}</div>
      <div class="stat-label">Total Orders</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">${formatPrice(totalRev)}</div>
      <div class="stat-label">Gross Revenue</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">${pendingOrders}</div>
      <div class="stat-label">Pending Fulfillment</div>
    </div>
  `;

  // Render orders
  document.getElementById('adminOrdersTbody').innerHTML = orders.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${escapeHtml(o.customerName)}</td>
      <td>${escapeHtml(o.phone)}</td>
      <td>${formatPrice(o.total)}</td>
      <td><span style="text-transform:uppercase;font-size:0.75rem;padding:4px 8px;border-radius:4px;background:var(--gold-light);color:var(--green-darker);font-weight:700;">${o.paymentMethod}</span></td>
      <td>
        <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding:6px 10px;border-radius:6px;border:1px solid var(--line-gold);font-size:0.85rem;">
          <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Processing</option>
          <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
      <td>${new Date(o.date).toLocaleDateString()}</td>
    </tr>
  `).join('') || `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--ink-muted);">No orders recorded yet.</td></tr>`;

  // Render products table
  document.getElementById('adminProductsTbody').innerHTML = products.map(p => `
    <tr>
      <td>
        <img src="${p.image}" alt="${p.name}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;border:1px solid var(--line);" onerror="this.outerHTML='<div class=&quot;thumb-fallback&quot; style=&quot;width:40px;height:40px;font-size:1.1rem;&quot;>${p.name.charAt(0)}</div>'">
      </td>
      <td><strong>${escapeHtml(p.name)}</strong></td>
      <td>${escapeHtml(p.category)}</td>
      <td>${formatPrice(p.price)}</td>
      <td><span style="font-weight:700;color:${p.stock <= 0 ? 'var(--red)' : 'var(--green-deep)'}">${p.stock}</span></td>
      <td>
        <button onclick="deleteProduct(${p.id})" style="color:var(--red);cursor:pointer;padding:6px 10px;border-radius:6px;background:rgba(200,42,42,0.1);">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatus(id, status) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = status;
  saveOrders();
  showToast(`Order ${id} marked as ${status}`, 'fa-truck');
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderAdminDashboard();
    showToast('Product deleted', 'fa-trash');
  }
}

function exportProductsCSV() {
  const headers = ['id', 'name', 'price', 'category', 'stock', 'rating'];
  const csv = [headers.join(','), ...products.map(p => `${p.id},"${p.name}",${p.price},"${p.category}",${p.stock},${p.rating}`)].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'adwa-products.csv';
  a.click();
}

/* ---------- Customer Dashboard ---------- */
function renderCustomerDashboard() {
  // Mock customer orders - just grab the first order for the demo
  const customerOrders = orders.slice(0, 1);
  const tbody = document.getElementById('customerOrdersTbody');
  const emptyState = document.getElementById('customerEmptyState');

  if (customerOrders.length > 0) {
    emptyState.style.display = 'none';
    tbody.innerHTML = customerOrders.map(o => `
      <tr>
        <td style="font-family:monospace;font-weight:700;color:var(--blue-deep);">#${o.id}</td>
        <td>${new Date(o.date).toLocaleDateString()}</td>
        <td style="font-weight:700;">${formatPrice(o.total)}</td>
        <td><span class="tag-status ${o.status}">${t('status_' + o.status)}</span></td>
        <td>
          <button class="btn btn-outline btn-sm"><i class="fa-solid fa-eye"></i> View</button>
        </td>
      </tr>
    `).join('');
  } else {
    document.querySelector('table').style.display = 'none';
    emptyState.style.display = 'block';
  }
}

/* ---------- App Initialization (Multi-Page) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initData();

  // Small delay to let components.js inject header/footer first
  setTimeout(() => {
    updateCartBadge();
    document.body.classList.toggle('lang-am', currentLang === 'am');
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === currentLang);
    });
    applyTranslations();

    // Auto-detect which page is loaded and render its content
    activePage = detectCurrentPage();
    renderPageContent(activePage);

    // Sticky header scroll elevation + direction-based hide/show
    let lastScrollY = window.scrollY;
    let headerHidden = false;

    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 20);
      }

      // Shop page: hide header+search on scroll down, show on scroll up
      if (document.body.classList.contains('page-shop')) {
        const placeholder = document.getElementById('header-placeholder');
        const searchBar = document.querySelector('.page-shop .search-container');
        const bottomNav = document.querySelector('.mobile-bottom-nav');
        
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        // Top-of-page safety: always show everything if near top
        if (currentScrollY <= 20) {
          if (headerHidden) {
            if (placeholder) placeholder.classList.remove('header-hidden');
            if (searchBar) { searchBar.style.transform = ''; searchBar.style.opacity = ''; searchBar.style.pointerEvents = ''; }
            if (bottomNav) { bottomNav.style.transform = ''; }
            headerHidden = false;
          }
          lastScrollY = currentScrollY; // keep in sync
        } 
        // Only react after scrolling past a minimum delta to avoid jitter
        else if (Math.abs(delta) > 10) {
          if (delta > 0 && currentScrollY > 100) {
            // Scrolling DOWN — hide
            if (!headerHidden) {
              if (placeholder) placeholder.classList.add('header-hidden');
              if (searchBar) { searchBar.style.transform = 'translateY(-100%)'; searchBar.style.opacity = '0'; searchBar.style.pointerEvents = 'none'; }
              if (bottomNav) { bottomNav.style.transform = 'translateY(100%)'; }
              headerHidden = true;
            }
          } else if (delta < 0) {
            // Scrolling UP — show
            if (headerHidden) {
              if (placeholder) placeholder.classList.remove('header-hidden');
              if (searchBar) { searchBar.style.transform = ''; searchBar.style.opacity = ''; searchBar.style.pointerEvents = ''; }
              if (bottomNav) { bottomNav.style.transform = ''; }
              headerHidden = false;
            }
          }
          // Only update lastScrollY when we actually hit the threshold
          // This allows small continuous mobile scroll events to accumulate
          lastScrollY = currentScrollY;
        }
      }
    });
  }, 50);
});
