"use client";

import { Package, TrendingUp, Phone, CheckCircle2 } from "lucide-react";
import { useOrderModal } from "../context/OrderModalContext";

const tiers = [
  {
    qty: 50,
    qtyLabel: "50 แก้ว",
    pricePerCup: 18,
    invest: 900,
    profit: 350,
    profitPct: 39,
    tag: "เริ่มต้น",
    tagColor: "bg-[#FEF0D0] text-[#7B3F00]",
    cardBorder: "border-amber-200",
    cardBg: "bg-white",
    highlight: false,
    perks: ["เหมาะสำหรับมือใหม่", "ทดลองตลาดได้ง่าย", "ลงทุนน้อย ความเสี่ยงต่ำ"],
  },
  {
    qty: 200,
    qtyLabel: "200 แก้ว",
    pricePerCup: 16,
    invest: 3200,
    profit: 1800,
    profitPct: 56,
    tag: "นิยม",
    tagColor: "bg-[#F5A623] text-white",
    cardBorder: "border-[#F5A623]",
    cardBg: "bg-white",
    highlight: false,
    perks: ["กำไรต่อแก้วสูงขึ้น", "คืนทุนเร็ว", "เหมาะสำหรับร้านค้า"],
  },
  {
    qty: 500,
    qtyLabel: "500 แก้ว",
    pricePerCup: 15,
    invest: 7500,
    profit: 5000,
    profitPct: 67,
    tag: "แนะนำ ⭐",
    tagColor: "bg-[#7B3F00] text-white",
    cardBorder: "border-[#7B3F00]",
    cardBg: "bg-gradient-to-b from-[#FEF0D0]/60 to-white",
    highlight: true,
    perks: ["กำไรสูงสุดในระดับนี้", "เหมาะสำหรับธุรกิจเต็มรูปแบบ", "ราคาต่อแก้วคุ้มมาก"],
  },
  {
    qty: 1000,
    qtyLabel: "1,000 แก้ว",
    pricePerCup: 14,
    invest: 14000,
    profit: 11000,
    profitPct: 79,
    tag: "ขายส่ง",
    tagColor: "bg-[#2C1A0E] text-[#F5A623]",
    cardBorder: "border-[#2C1A0E]/30",
    cardBg: "bg-white",
    highlight: false,
    perks: ["ราคาต่อแก้วต่ำที่สุด", "กำไรสูงมาก", "เหมาะสำหรับตัวแทนจำหน่าย"],
  },
];

export default function Wholesale() {
  const { openModal } = useOrderModal();
  return (
    <section id="wholesale" className="py-20 sm:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F5A623]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7B3F00]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#FEF0D0] border border-[#F5A623]/50 text-[#7B3F00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ราคาขายส่ง
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1A0E] leading-tight">
            สั่งมาก{" "}
            <span className="text-[#F5A623]">กำไรมาก</span>
          </h2>
          <p className="mt-4 text-[#7B3F00]/60 text-base sm:text-lg leading-relaxed">
            เปิดธุรกิจน้ำสับปะรดกับ Juice Juice — เลือกแพ็กเกจที่เหมาะกับคุณ
            <br className="hidden sm:block" />
            ยิ่งสั่งมาก ต้นทุนยิ่งต่ำ กำไรยิ่งสูง
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-3xl border-2 ${tier.cardBorder} ${tier.cardBg} p-6 shadow-sm hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 hover:-translate-y-1.5 ${tier.highlight ? "ring-2 ring-[#F5A623]/40" : ""}`}
            >
              {/* Tag */}
              <div className="mb-4">
                <span className={`inline-block text-xs font-black px-3 py-1 rounded-full ${tier.tagColor}`}>
                  {tier.tag}
                </span>
              </div>

              {/* Quantity + icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FEF0D0] flex items-center justify-center flex-shrink-0">
                  <Package size={22} className="text-[#D4861A]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#2C1A0E] leading-none">{tier.qtyLabel}</div>
                  <div className="text-xs text-[#7B3F00]/50 font-medium mt-0.5">แก้วละ {tier.pricePerCup} ฿</div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-2.5 mb-5">
                {/* Cost */}
                <div className="flex items-center justify-between bg-[#FDF6EE] rounded-xl px-3.5 py-2.5">
                  <span className="text-xs font-semibold text-[#7B3F00]/60">ลงทุน</span>
                  <span className="text-sm font-black text-[#2C1A0E]">
                    {tier.invest.toLocaleString()} ฿
                  </span>
                </div>
                {/* Profit */}
                <div className="flex items-center justify-between bg-[#F5A623]/10 rounded-xl px-3.5 py-2.5">
                  <span className="text-xs font-semibold text-[#7B3F00]/60 flex items-center gap-1">
                    <TrendingUp size={12} className="text-[#F5A623]" />
                    กำไร
                  </span>
                  <span className="text-sm font-black text-[#D4861A]">
                    {tier.profit.toLocaleString()} ฿
                  </span>
                </div>
                {/* Profit % bar */}
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] text-[#7B3F00]/50 font-semibold">อัตรากำไร</span>
                    <span className="text-[11px] font-black text-[#7B3F00]">{tier.profitPct}%</span>
                  </div>
                  <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#F5A623] to-[#D4861A] rounded-full transition-all duration-700"
                      style={{ width: `${tier.profitPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Perks */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-xs text-[#7B3F00]/70 leading-snug">{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => openModal(tier.qty as 50 | 200 | 500 | 1000)}
                className={`w-full inline-flex items-center justify-center gap-2 font-black text-sm py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 ${
                  tier.highlight
                    ? "bg-[#F5A623] hover:bg-[#D4861A] text-white shadow-md shadow-amber-200"
                    : "bg-[#FEF0D0] hover:bg-[#F5A623]/30 text-[#7B3F00]"
                }`}
              >
                สนใจแพ็กเกจนี้
              </button>
            </div>
          ))}
        </div>

        {/* Summary comparison table — visible on md+ */}
        <div className="mt-14 hidden md:block">
          <div className="bg-white rounded-3xl border border-amber-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-5 bg-[#2C1A0E] text-white text-xs font-black uppercase tracking-wider">
              <div className="px-5 py-4">จำนวน</div>
              <div className="px-5 py-4 text-center">ราคา/แก้ว</div>
              <div className="px-5 py-4 text-center">เงินลงทุน</div>
              <div className="px-5 py-4 text-center">กำไร</div>
              <div className="px-5 py-4 text-center">อัตรากำไร</div>
            </div>
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 text-sm border-t border-amber-100 transition-colors duration-150 hover:bg-[#FEF0D0]/40 ${tier.highlight ? "bg-[#FEF0D0]/30" : ""}`}
              >
                <div className="px-5 py-4 font-black text-[#2C1A0E] flex items-center gap-2">
                  {tier.qtyLabel}
                  {tier.highlight && (
                    <span className="text-[10px] bg-[#7B3F00] text-white px-1.5 py-0.5 rounded-full font-bold">
                      แนะนำ
                    </span>
                  )}
                </div>
                <div className="px-5 py-4 text-center font-semibold text-[#7B3F00]">
                  {tier.pricePerCup} ฿
                </div>
                <div className="px-5 py-4 text-center font-semibold text-[#7B3F00]">
                  {tier.invest.toLocaleString()} ฿
                </div>
                <div className="px-5 py-4 text-center font-black text-[#D4861A]">
                  +{tier.profit.toLocaleString()} ฿
                </div>
                <div className="px-5 py-4 text-center">
                  <span className="inline-block bg-[#F5A623]/15 text-[#7B3F00] font-black text-xs px-3 py-1 rounded-full">
                    {tier.profitPct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          id="contact-wholesale"
          className="mt-14 bg-gradient-to-r from-[#7B3F00] to-[#2C1A0E] rounded-3xl p-8 sm:p-10 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-black mb-2">
            สนใจสั่งซื้อจำนวนมาก?
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-7 max-w-lg mx-auto leading-relaxed">
            ติดต่อทีมงานของเราได้เลย เราพร้อมดูแลและให้ข้อมูลเพิ่มเติม
            สำหรับผู้ที่ต้องการเป็นตัวแทนจำหน่าย Juice Juice
          </p>
          <a
            href="tel:+6699-999-9999"
            className="inline-flex items-center gap-3 bg-[#F5A623] hover:bg-[#D4861A] text-white font-black text-base px-9 py-4 rounded-full shadow-lg shadow-amber-900/30 transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
          >
            <Phone size={20} strokeWidth={2.5} />
            โทรหาเราเลย
          </a>
        </div>
      </div>
    </section>
  );
}
