import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { OrderModalProvider } from "./context/OrderModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://juicejuice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Juice Juice | น้ำสับปะรด สายพันธุ์ปัตตาเวีย ผสมวุ้นชาดำ เพียง 25฿",
  description:
    "Juice Juice น้ำสับปะรด คั้นสด 100% จากสับปะรดปัตตาเวียไทยแท้ ผสมวุ้นชาดำ ไม่ใส่น้ำตาล ไม่มีวัตถุกันเสีย เสิร์ฟเย็นเต็มแก้ว เพียงแก้วละ 25 บาท สั่งได้ทั้งปลีกและส่ง",
  keywords: [
    "juice juice น้ำสับปะรด",
    "น้ำสับปะรด",
    "น้ำสับปะรดคั้นสด",
    "น้ำสับปะรดปัตตาเวีย",
    "น้ำสับปะรดผสมวุ้นชาดำ",
    "juice juice",
    "น้ำผลไม้สด 25 บาท",
    "น้ำสับปะรดโคราช",
    "น้ำสับปะรดขอนแก่น",
    "น้ำสับปะรดส่ง",
    "น้ำสับปะรดราคาส่ง",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Juice Juice",
    locale: "th_TH",
    title: "Juice Juice | น้ำสับปะรด สายพันธุ์ปัตตาเวีย ผสมวุ้นชาดำ เพียง 25฿",
    description:
      "น้ำสับปะรดคั้นสด 100% จากสับปะรดปัตตาเวียไทยแท้ ผสมวุ้นชาดำ ไม่ใส่น้ำตาล เสิร์ฟเย็นเต็มแก้ว เพียง 25 บาท",
    images: [
      {
        url: "/images/poster.jpg",
        width: 1200,
        height: 630,
        alt: "Juice Juice — น้ำสับปะรดสายพันธุ์ปัตตาเวียผสมวุ้นชาดำ เพียง 25฿",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juice Juice | น้ำสับปะรด สายพันธุ์ปัตตาเวีย ผสมวุ้นชาดำ เพียง 25฿",
    description:
      "น้ำสับปะรดคั้นสด 100% จากสับปะรดปัตตาเวียไทยแท้ ผสมวุ้นชาดำ ไม่ใส่น้ำตาล เพียง 25 บาท",
    images: ["/images/poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Juice Juice",
      description:
        "ร้านน้ำสับปะรดคั้นสด สายพันธุ์ปัตตาเวีย ผสมวุ้นชาดำ ไม่ใส่น้ำตาล เพียงแก้วละ 25 บาท",
      url: BASE_URL,
      telephone: ["+66653626191", "+66619418787"],
      email: "Sirodom.c@kkumail.com",
      image: `${BASE_URL}/images/poster.jpg`,
      priceRange: "฿",
      servesCuisine: "เครื่องดื่มผลไม้สด",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "โคราช จอหอ",
          addressCountry: "TH",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "ขอนแก่น อ.เมือง",
          addressCountry: "TH",
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "น้ำสับปะรดผสมวุ้นชาดำ — Juice Juice",
      description:
        "น้ำสับปะรดคั้นสด 100% สายพันธุ์ปัตตาเวียไทยแท้ ผสมวุ้นชาดำ ไม่ใส่น้ำตาล ไม่มีวัตถุกันเสีย เสิร์ฟเย็นเต็มแก้ว",
      image: `${BASE_URL}/images/post_5.jpg`,
      brand: {
        "@type": "Brand",
        name: "Juice Juice",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "THB",
        price: "25",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Juice Juice",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.97",
        reviewCount: "6",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased bg-[#FFFDF7] text-[#2C1A0E]`}>
        <OrderModalProvider>
          {children}
        </OrderModalProvider>
      </body>
    </html>
  );
}
