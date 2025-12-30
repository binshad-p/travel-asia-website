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
  title: "Travel Asia | Air Ticketing, Global Visa Assistance & Pilgrimage Services",
  description:
    "Expert Air Ticketing, Global Visa Assistance, and Pilgrimage Services. Book flights, process visas worldwide, and complete Umrah & Hajj packages with Travel Asia.",
  keywords:
    "Travel Asia, air ticketing, flight booking, global visa assistance, visa services, visa processing, tourist visa, business visa, pilgrimage services, Umrah packages, Hajj packages, Umrah visa, travel agency, international flights, cheap air tickets, visa consultancy",
  author: "Travel Asia",
  robots: "index, follow",
  og: {
    title: "Travel Asia | Air Ticketing, Visa Services & Pilgrimage Packages",
    description:
      "Book flights worldwide, get hassle-free visa assistance, and embark on spiritual journeys with our Umrah & Hajj packages.",
    image: logo,
    url: "https://www.travelasia.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Asia | Flight Bookings, Visa Assistance & Pilgrimage Tours",
    description:
      "Air ticketing for all destinations, global visa processing, and complete Umrah & Hajj packages with expert support.",
    image: logo,
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
