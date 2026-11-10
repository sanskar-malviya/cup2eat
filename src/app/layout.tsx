import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL || // Netlify sets this to the site's primary URL at build time
  "https://cup2eat1.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CUP2EAT — Eat Your Drink | Edible, Zero-Waste Cups",
  description:
    "India's edible, biodegradable cups. Drink your chai, coffee or dessert — then eat the cup. FSSAI licensed. Free delivery all over India. Wholesale for cafés, restaurants & events.",
  keywords: [
    "edible cups",
    "CUP2EAT",
    "eat your drink",
    "biodegradable cups",
    "eco friendly cups India",
    "edible kulhad",
    "wholesale edible cups",
  ],
  openGraph: {
    title: "CUP2EAT — Eat Your Drink",
    description:
      "India's edible, zero-waste cups. FSSAI licensed. Free pan-India delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
