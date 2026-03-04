import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { OrderModalProvider } from "./context/OrderModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juice Juice — น้ำสับปะรดคั้นสด เพียง 25฿",
  description:
    "ดับร้อนสดชื่นกับ Juice Juice! น้ำสับปะรดคั้นสด 100% จากผลไม้แท้ ไม่ผสมน้ำตาล เพียงแก้วละ 25 บาท สั่งได้เลยวันนี้",
  openGraph: {
    title: "Juice Juice — น้ำสับปะรดคั้นสด เพียง 25฿",
    description: "น้ำสับปะรดสด 100% เพียง 25 บาท!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} antialiased bg-[#FFFDF7] text-[#2C1A0E]`}>
        <OrderModalProvider>
          {children}
        </OrderModalProvider>
      </body>
    </html>
  );
}
