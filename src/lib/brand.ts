export const BRAND = {
  name: "CUP2EAT",
  tagline: "Eat Your Drink",
  phone: "+91 98181 92575",
  phoneRaw: "919818192575",
  email: "Varunkhera6@gmail.com",
  instagram: "https://www.instagram.com/cup2eat",
  threads: "https://www.threads.com/@cup2eat",
  fssai: "22725105002487",
  address:
    "1018-B, Nyay Khand-1, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
  founder: "Varun Khera",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(msg)}`;

export type Flavour = {
  key: string;
  name: string;
  desc: string;
  model: string;
  tint?: string;
  glossy?: boolean;
};

const BASE = "/models/cup-base.glb";
const CHOC = "/models/cup-choc.glb";

export const FLAVOURS: Flavour[] = [
  {
    key: "chocolate",
    name: "Chocolate",
    desc: "Rich cocoa biscuit cup — made for coffee lovers.",
    model: BASE,
    tint: "#8a5230",
  },
  {
    key: "vanilla",
    name: "Vanilla",
    desc: "Golden, lightly sweet — the perfect chai companion.",
    model: BASE,
  },
  {
    key: "elaichi",
    name: "Elaichi",
    desc: "Fragrant cardamom crunch with every sip.",
    model: BASE,
    tint: "#b7b06a",
  },
  {
    key: "chocolate-coated",
    name: "Chocolate Coated",
    desc: "Premium glossy dark-chocolate shell. Pure indulgence.",
    model: CHOC,
    glossy: true,
  },
];

export const USE_CASES = [
  { icon: "☕", title: "Chai & Coffee", text: "Hot drinks hold perfectly — no soggy cup." },
  { icon: "🍦", title: "Ice-Cream Serves", text: "Scoop, serve, and eat the cup after." },
  { icon: "🍫", title: "Brownies & Desserts", text: "Serve brownies right inside the cup." },
  { icon: "🎉", title: "Events & Catering", text: "Zero-waste wow factor at any gathering." },
];

export const REELS = [
  "https://www.instagram.com/reel/DfOXPhOSq2m/",
  "https://www.instagram.com/reel/DfUO4KpyzXf/",
  "https://www.instagram.com/reel/DfTiJVgyHpb/",
  "https://www.instagram.com/reel/DfeVecPh0dp/",
  "https://www.instagram.com/reel/DfgoS52S2a3/",
];

export const TRUST = [
  "100% Edible",
  "Pure Veg",
  "Vegan Friendly",
  "Eco Friendly",
  "FSSAI Licensed",
];
