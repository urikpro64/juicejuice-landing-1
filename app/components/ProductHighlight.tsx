"use client";

import Image from "next/image";
import { ShoppingBag, Star, CheckCircle2, Droplets } from "lucide-react";
import { useOrderModal } from "../context/OrderModalContext";

const checkpoints = [
  "สินค้าใหม่ทุกออร์เดอร์ ไม่มีการตกค้าง",
  "เสิร์ฟแบบเย็นน้ำเต็มแก้ว ไม่มีน้ำแข็ง",
  "ไม่เติมวัตถุกันเสีย ระยะเวลาเก็บรักษา 12 วัน",
  "ใช้สับปะรดไทยแท้ สายพันธุ์ปัตตาเวีย คัดพิเศษ หอมหวานในตัว",
];

const gallery = [
  { src: "/images/post_1.jpg", alt: "น้ำสับปะรดสดคั้น" },
  { src: "/images/post_2.jpg", alt: "สับปะรดคัดสรร" },
  { src: "/images/post_3.jpg", alt: "กระบวนการทำน้ำผลไม้" },
  { src: "/images/post_4.jpg", alt: "แก้วน้ำเย็นสดชื่น" },
];

export default function ProductHighlight() {
  const { openModal } = useOrderModal();
  return (
    <section
      id="product"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF7] via-[#FEF0D0]/50 to-[#FFFDF7] overflow-hidden"
    >
      {/* BG decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#7B3F00]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#F5E6D3] border border-[#7B3F00]/30 text-[#7B3F00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            เมนูซิกเนเจอร์ของเรา
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1A0E] leading-tight">
            แก้วที่คุณ{" "}
            <span className="text-[#F5A623]">ฝันถึง</span>
          </h2>
        </div>

        {/* Main product block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Product image */}
          <div className="relative flex justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F5A623]/25 to-[#7B3F00]/15 blur-2xl scale-90" />

            {/* Main image */}
            <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-amber-300/40 border-4 border-white">
              <Image
                src="/images/post_5.jpg"
                alt="Juice Juice — น้ำสับปะรดคั้นสดซิกเนเจอร์"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Price overlay on image */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-[#7B3F00] leading-none">25</span>
                    <span className="text-2xl font-black text-[#7B3F00] leading-none">฿</span>
                  </div>
                  <div className="text-xs font-semibold text-[#7B3F00]/50 mt-0.5">ต่อแก้ว</div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute top-4 -right-2 sm:-right-6 z-20 bg-white border border-amber-200 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#2C1A0E]">5.0</span>
            </div>

            {/* Refreshing badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 bg-[#7B3F00] text-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <Droplets size={16} className="text-amber-300" />
              <span className="text-xs font-bold">สดชื่นมาก!</span>
            </div>
          </div>

          {/* Right — Details */}
          <div className="flex flex-col gap-7">

            {/* Product name + price */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2C1A0E] leading-tight mb-2">
                น้ำสับปะรดผสมวุ้นชาดำ
              </h3>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-5xl sm:text-6xl font-black text-[#F5A623]">25</span>
                <span className="text-3xl font-black text-[#F5A623]">฿</span>
                <span className="ml-2 text-sm font-semibold text-[#7B3F00]/40 line-through">50฿</span>
                <span className="ml-1 text-sm font-bold text-white bg-[#7B3F00] px-2 py-0.5 rounded-full">
                  ลด 50%
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#7B3F00]/70 text-base leading-relaxed">
              แก้วซิกเนเจอร์ของเราเต็มไปด้วยรสชาติของสับปะรดไทยแท้
              ทำใหม่ทุกออร์เดอร์ เสิร์ฟเย็น ได้รับสินค้าภายในไม่กี่วัน
              ความสดชื่นระดับพรีเมียมในราคาเพียง{" "}
              <strong className="text-[#7B3F00]">25 ฿</strong> เท่านั้น
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checkpoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#F5A623] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-[#7B3F00]/80">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-black text-base px-8 py-4 rounded-full shadow-lg shadow-amber-200 transition-all duration-200 hover:shadow-xl hover:shadow-amber-300 hover:-translate-y-1 active:translate-y-0"
              >
                <ShoppingBag size={20} strokeWidth={2.5} />
                สั่งเลย — 25฿
              </button>
            </div>

            {/* Mini trust strip */}
            <div className="flex items-center gap-4 pt-2 border-t border-amber-100">
              <span className="text-xs text-[#7B3F00]/40 font-semibold uppercase tracking-wider">
                ได้รับการพูดถึงใน
              </span>
              <div className="flex gap-3">
                {["ร้านดัง", "ตลาดสด", "ท็อปพิก"].map((brand) => (
                  <span
                    key={brand}
                    className="text-xs font-bold text-[#7B3F00]/50 bg-[#F5E6D3] px-2.5 py-1 rounded-lg"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo gallery strip */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-center text-lg font-black text-[#7B3F00] mb-6 uppercase tracking-wider">
            ภาพจากครัวของเรา
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7B3F00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
