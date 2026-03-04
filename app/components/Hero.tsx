"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useOrderModal } from "../context/OrderModalContext";

export default function Hero() {
  const { openModal } = useOrderModal();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FEF0D0] via-[#FFFDF7] to-[#F5E6D3]"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F5A623]/15 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7B3F00]/10 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#F5A623]/10 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* Pill badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-[#FEF0D0] border border-[#F5A623]/50 text-[#7B3F00] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full animate-fade-in">
                <Sparkles size={14} className="text-[#F5A623]" />
                สับปะรดปัตตาเวีย · ผสมวุ้นชาดำ · ไม่มีวัตถุกันเสีย
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-[#2C1A0E] animate-fade-in-up delay-100">
              ดับร้อน{" "}
              <span className="text-[#F5A623]">สดชื่น</span>{" "}
              <br className="hidden sm:block" />
              กับ{" "}
              <span className="text-[#F5A623]">Juice</span>{" "}
              <span className="text-[#7B3F00]">Juice!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#7B3F00]/70 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
              สดชื่นไม่ซ้ำใคร กับ{" "}
              <span className="font-bold text-[#F5A623]">JUICEJUICE</span>{" "}
              น้ำสับปะรดแท้ สายพันธุ์{" "}
              <span className="font-bold text-[#7B3F00]">ปัตตาเวีย</span>{" "}
              ผสมวุ้นชาดำ ไม่มีวัตถุกันเสีย รสชาติกลมกล่อม เปรี้ยวหวานลงตัว{" "}
              <span className="font-bold text-[#7B3F00]">เพียงแก้วละ 25 บาท</span>
            </p>

            {/* Price callout */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up delay-300">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl sm:text-6xl font-black text-[#7B3F00] leading-none">25</span>
                <span className="text-2xl sm:text-3xl font-black text-[#7B3F00] leading-none">฿</span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#7B3F00]/40 uppercase tracking-widest">ต่อแก้ว</div>
                <div className="text-sm font-semibold text-[#7B3F00]/60">สด · เย็น · อร่อย</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up delay-400">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-black text-base px-8 py-4 rounded-full shadow-lg shadow-amber-200 transition-all duration-200 hover:shadow-xl hover:shadow-amber-300 hover:-translate-y-1 active:translate-y-0"
              >
                สั่งเลยตอนนี้
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5E6D3] text-[#7B3F00] font-bold text-base px-8 py-4 rounded-full border-2 border-[#7B3F00]/20 hover:border-[#7B3F00]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                ทำไมต้องเลือกเรา?
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 animate-fade-in-up delay-500">
              <div className="flex -space-x-2">
                {["ก", "ข", "ค", "ง"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#F5A623] to-[#D4861A] flex items-center justify-center text-xs font-black text-white shadow"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#7B3F00]/60">
                <span className="font-black text-[#2C1A0E]">500+</span> ลูกค้าพึงพอใจวันนี้
              </div>
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative flex justify-center items-center animate-float">
            {/* Glow ring */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#F5A623]/30 to-[#7B3F00]/20 blur-2xl" />

            {/* Image card */}
            <div className="relative z-10 w-64 sm:w-72 lg:w-80 xl:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-amber-300/40 border-4 border-white">
              <Image
                src="/images/poster.jpg"
                alt="น้ำสับปะรดสด Juice Juice"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 384px"
                priority
              />
            </div>

            {/* Floating badge — price */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 z-20 bg-[#7B3F00] text-white font-black text-lg px-5 py-3 rounded-2xl shadow-xl shadow-amber-900/30 animate-pulse-slow">
              25 ฿
            </div>

            {/* Floating badge — fresh */}
            <div className="absolute top-4 -left-2 sm:-left-6 z-20 bg-white border-2 border-[#F5A623]/60 text-[#7B3F00] font-bold text-xs px-3 py-2 rounded-xl shadow-lg">
              🍍 สดทุกวัน
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </section>
  );
}
