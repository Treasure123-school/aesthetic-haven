import bag from "@/assets/p-bag.jpg";
import bracelet from "@/assets/p-bracelet.jpg";
import cardigan from "@/assets/p-cardigan.jpg";
import pearlbag from "@/assets/p-pearlbag.jpg";
import mist from "@/assets/p-mist.jpg";
import sneakers from "@/assets/p-sneakers.jpg";
import coord from "@/assets/p-coord.jpg";
import watch from "@/assets/p-watch.jpg";
import accessories from "@/assets/p-accessories.jpg";
import dress from "@/assets/p-dress.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";
import catLifestyle from "@/assets/cat-lifestyle.jpg";
import lookSoft from "@/assets/look-soft.jpg";
import lookMinimal from "@/assets/look-minimal.jpg";
import lookStreet from "@/assets/look-street.jpg";
import lookRomantic from "@/assets/look-romantic.jpg";
import lookLuxury from "@/assets/look-luxury.jpg";
import lookY2k from "@/assets/look-y2k.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  badge?: "NEW" | "BESTSELLER" | "SALE" | "LIMITED";
  colors?: string[];
};

export const formatNaira = (value: number) =>
  `₦${value.toLocaleString("en-NG")}`;

export const products: Product[] = [
  {
    id: "satin-bow-bag",
    name: "Satin Bow Shoulder Bag",
    category: "Bags",
    price: 42500,
    compareAt: 55000,
    image: bag,
    hoverImage: pearlbag,
    rating: 4.9,
    reviews: 214,
    badge: "SALE",
    colors: ["oklch(0.52 0.203 356)", "oklch(0.93 0.035 350)", "oklch(0.3 0.01 320)"],
  },
  {
    id: "rose-gold-bracelet",
    name: "Rose Gold Charm Bracelet",
    category: "Jewelry",
    price: 28900,
    image: bracelet,
    hoverImage: watch,
    rating: 4.8,
    reviews: 168,
    badge: "BESTSELLER",
    colors: ["oklch(0.74 0.09 78)", "oklch(0.85 0.03 60)"],
  },
  {
    id: "ribbed-cardigan",
    name: "Oversized Ribbed Cardigan",
    category: "Fashion",
    price: 39500,
    compareAt: 47000,
    image: cardigan,
    hoverImage: coord,
    rating: 4.7,
    reviews: 96,
    badge: "SALE",
    colors: ["oklch(0.95 0.015 85)", "oklch(0.93 0.035 350)"],
  },
  {
    id: "pearl-mini-bag",
    name: "Pearl Mini Shoulder Bag",
    category: "Bags",
    price: 51000,
    image: pearlbag,
    hoverImage: bag,
    rating: 5,
    reviews: 132,
    badge: "BESTSELLER",
    colors: ["oklch(0.96 0.01 85)", "oklch(0.74 0.09 78)"],
  },
  {
    id: "soft-glow-mist",
    name: "Soft Glow Body Mist",
    category: "Beauty",
    price: 18500,
    image: mist,
    hoverImage: catBeauty,
    rating: 4.9,
    reviews: 341,
    badge: "NEW",
    colors: ["oklch(0.62 0.17 355)"],
  },
  {
    id: "platform-sneakers",
    name: "Classic Platform Sneakers",
    category: "Shoes",
    price: 62000,
    compareAt: 74000,
    image: sneakers,
    hoverImage: lookMinimal,
    rating: 4.6,
    reviews: 87,
    badge: "SALE",
    colors: ["oklch(0.97 0 0)", "oklch(0.3 0.01 320)"],
  },
  {
    id: "knit-coord",
    name: "Blush Knit Co-Ord Set",
    category: "Fashion",
    price: 46500,
    image: coord,
    hoverImage: cardigan,
    rating: 4.8,
    reviews: 121,
    badge: "NEW",
    colors: ["oklch(0.93 0.035 350)", "oklch(0.95 0.015 85)"],
  },
  {
    id: "gold-watch",
    name: "Minimalist Gold Watch",
    category: "Accessories",
    price: 78000,
    image: watch,
    hoverImage: bracelet,
    rating: 4.9,
    reviews: 204,
    badge: "BESTSELLER",
    colors: ["oklch(0.74 0.09 78)", "oklch(0.9 0.02 85)"],
  },
  {
    id: "silk-scrunchie-set",
    name: "Silk Scrunchie & Shades Set",
    category: "Accessories",
    price: 15900,
    compareAt: 21000,
    image: accessories,
    hoverImage: catLifestyle,
    rating: 4.7,
    reviews: 78,
    badge: "SALE",
    colors: ["oklch(0.62 0.17 355)", "oklch(0.93 0.035 350)"],
  },
  {
    id: "satin-mini-dress",
    name: "Rosé Satin Mini Dress",
    category: "Fashion",
    price: 58000,
    image: dress,
    hoverImage: lookY2k,
    rating: 4.8,
    reviews: 143,
    badge: "NEW",
    colors: ["oklch(0.52 0.203 356)", "oklch(0.3 0.01 320)"],
  },
  {
    id: "aesthetic-candle",
    name: "Rose Petal Ritual Candle",
    category: "Lifestyle",
    price: 22500,
    image: catLifestyle,
    hoverImage: accessories,
    rating: 4.9,
    reviews: 189,
    badge: "BESTSELLER",
    colors: ["oklch(0.93 0.035 350)"],
  },
  {
    id: "blush-beauty-set",
    name: "Blush Glow Beauty Set",
    category: "Beauty",
    price: 34500,
    compareAt: 40000,
    image: catBeauty,
    hoverImage: mist,
    rating: 4.8,
    reviews: 256,
    badge: "LIMITED",
    colors: ["oklch(0.62 0.17 355)", "oklch(0.74 0.09 78)"],
  },
];

const byId = (id: string) => products.find((p) => p.id === id)!;

export const trendingProducts = [
  byId("satin-bow-bag"),
  byId("rose-gold-bracelet"),
  byId("ribbed-cardigan"),
  byId("pearl-mini-bag"),
  byId("platform-sneakers"),
  byId("satin-mini-dress"),
  byId("gold-watch"),
  byId("soft-glow-mist"),
];

export const newArrivals = [
  byId("soft-glow-mist"),
  byId("knit-coord"),
  byId("satin-mini-dress"),
  byId("blush-beauty-set"),
  byId("silk-scrunchie-set"),
  byId("aesthetic-candle"),
];

export const bestSellers = [
  byId("pearl-mini-bag"),
  byId("gold-watch"),
  byId("rose-gold-bracelet"),
  byId("aesthetic-candle"),
  byId("satin-bow-bag"),
  byId("ribbed-cardigan"),
];

export const categories = [
  { name: "Fashion", desc: "Silhouettes made to be noticed", image: lookMinimal, span: "lg:col-span-2 lg:row-span-2" },
  { name: "Bags", desc: "Statement carry, every day", image: bag, span: "" },
  { name: "Jewelry", desc: "Delicate gold, quiet luxury", image: bracelet, span: "" },
  { name: "Shoes", desc: "Elevated everyday footing", image: sneakers, span: "" },
  { name: "Beauty", desc: "Glow-first essentials", image: catBeauty, span: "" },
  { name: "Accessories", desc: "The finishing details", image: accessories, span: "" },
  { name: "Lifestyle", desc: "Aesthetic living at home", image: catLifestyle, span: "" },
  { name: "New Arrivals", desc: "Freshly dropped this week", image: dress, span: "lg:col-span-2" },
];

export const looks = [
  { name: "Soft Girl", items: 24, image: lookSoft },
  { name: "Minimal Chic", items: 31, image: lookMinimal },
  { name: "Street Style", items: 18, image: lookStreet },
  { name: "Romantic", items: 22, image: lookRomantic },
  { name: "Luxury Everyday", items: 27, image: lookLuxury },
  { name: "Y2K Inspired", items: 16, image: lookY2k },
];

export const socialGrid = [
  lookY2k,
  bag,
  lookRomantic,
  catBeauty,
  lookLuxury,
  coord,
  catLifestyle,
  lookStreet,
];

export const testimonials = [
  {
    name: "Adaeze O.",
    initials: "AO",
    rating: 5,
    date: "12 Aug 2026",
    product: "Pearl Mini Shoulder Bag",
    review:
      "The quality genuinely surprised me. It photographs beautifully and the pearls feel weighty and real — I've had three compliments in one week.",
  },
  {
    name: "Zainab K.",
    initials: "ZK",
    rating: 5,
    date: "04 Aug 2026",
    product: "Blush Knit Co-Ord Set",
    review:
      "Soft, structured and it doesn't lose shape after washing. This is now my go-to travel set. Delivery to Abuja took two days.",
  },
  {
    name: "Chinelo A.",
    initials: "CA",
    rating: 4.5,
    date: "27 Jul 2026",
    product: "Minimalist Gold Watch",
    review:
      "Elegant without trying too hard. The packaging alone made it feel like a gift to myself. Sizing on the strap was perfect.",
  },
];
