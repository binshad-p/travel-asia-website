import "./globals.css";
import { Suspense } from "react";
import { PT_Serif } from "next/font/google";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/WhatsApp";
import { logo } from "@/public";
import { Analytics } from "@vercel/analytics/react"

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-serif",
});

export const metadata = {
  title: "Emirates Travels | Tailored Travel Experiences Around the World",
  description:
    "At Emirates Travels, we create unforgettable journeys with expertly crafted travel packages. From adventure to relaxation, trust us for seamless planning, premium accommodations, and exceptional service.",
  keywords:
    "Emirates Travels, travel agency Dubai, tailored travel packages, adventure travel, relaxation holidays, cultural tours, premium travel services, visa services, Umrah visa, passport assistance, travel planning, Emirates Tours & Travels",
  author: "Emirates Travels",
  robots: "index, follow",
  og: {
    title: "Emirates Travels | Explore the World with Tailored Travel Plans",
    description:
      "Experience hassle-free travel with Emirates Travels. We offer personalized travel packages, visa services, Umrah assistance, and more across Dubai, India, and Saudi Arabia.",
    image: logo, // Replace with actual image path
    url: "https://www.emiratestravels.com", // Replace with your website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emirates Travels | Exceptional Travel Experiences Worldwide",
    description:
      "Travel the world with confidence. Emirates Travels provides tailored travel services, including flights, visas, and premium packages for all your travel needs.",
    image: logo, // Replace with actual image path
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} antialiased`}
      >
        <Toaster />
        <Header />
        <Whatsapp/>
        <Suspense>{children}</Suspense>
        <Footer />
        <Analytics/>

      </body>
    </html>
  );
}
