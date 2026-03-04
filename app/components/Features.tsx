import { Leaf, Zap, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Leaf,
    iconBg: "bg-[#FEF0D0]",
    iconColor: "text-[#D4861A]",
    accent: "border-[#F5A623]/30 hover:border-[#F5A623]",
    badge: "bg-[#FEF0D0] text-[#7B3F00]",
    badgeLabel: "ธรรมชาติแท้",
    title: "น้ำสับปะรด สายพันธุ์ปัตตาเวีย",
    description:
      "น้ำจากสับปะรดแท้สายพันธุ์ปัตตาเวีย ไม่ใส่วัตถุกันเสีย ได้ความอร่อยจากธรรมชาติแท้ๆ ระยะเวลาเก็บรักษา 12 วัน",
    highlight: "เก็บได้นาน 12 วัน",
  },
  {
    icon: Zap,
    iconBg: "bg-amber-100",
    iconColor: "text-[#F5A623]",
    accent: "border-[#F5A623]/40 hover:border-[#F5A623] ring-2 ring-[#F5A623]/20",
    badge: "bg-amber-100 text-[#7B3F00]",
    badgeLabel: "ขายดีที่สุด",
    title: "รสชาติหวานเปรี้ยวลงตัว",
    description:
      "เราคัดสรรสับปะรดคุณภาพสูง ผสมผสานความหวานหอมของวุ้นชาดำ ให้ได้รสสัมผัสที่กลมกล่อม หอมหวาน เปรี้ยวหวานลงตัว ดื่มแล้วสดชื่นทันที",
    highlight: "ผสมวุ้นชาดำพรีเมียม",
  },
  {
    icon: BadgeDollarSign,
    iconBg: "bg-[#F5E6D3]",
    iconColor: "text-[#A0522D]",
    accent: "border-[#A0522D]/30 hover:border-[#A0522D]",
    badge: "bg-[#F5E6D3] text-[#7B3F00]",
    badgeLabel: "คุ้มที่สุด",
    title: "ราคาสุดคุ้ม เพียง 25 ฿",
    description:
      "ความพรีเมียมไม่จำเป็นต้องแพง เพียง 25 บาทต่อแก้ว คุณได้รับน้ำผลไม้สดที่อร่อยที่สุดในย่านนี้",
    highlight: "เพียงแก้วละ 25 ฿",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-block bg-[#FEF0D0] border border-[#F5A623]/50 text-[#7B3F00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ทำไมต้องเลือกเรา
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1A0E] leading-tight">
            ทำด้วย{" "}
            <span className="text-[#F5A623]">ใจ</span>{" "}
            &amp;{" "}
            <span className="text-[#7B3F00]">ผลไม้สด</span>
          </h2>
          <p className="mt-4 text-[#7B3F00]/60 text-base sm:text-lg leading-relaxed">
            3 เหตุผลที่ทำให้ Juice Juice เป็นตัวเลือกอันดับหนึ่งของคนรักน้ำผลไม้
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative flex flex-col gap-5 bg-white rounded-3xl border-2 ${feature.accent} p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${feature.badge}`}>
                    {feature.badgeLabel}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-sm`}>
                  <Icon size={28} className={feature.iconColor} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-black text-[#2C1A0E] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#7B3F00]/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Highlight pill */}
                <div className="mt-auto pt-2 border-t border-amber-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B3F00]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats banner */}
        <div className="mt-16 bg-gradient-to-r from-[#F5A623] to-[#D4861A] rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "ผลไม้แท้" },
              { value: "25฿", label: "ต่อแก้ว" },
              { value: "12", label: "เก็บรักษา" },
              { value: "500+", label: "แก้วต่อวัน" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white">{stat.value}</span>
                <span className="text-sm font-semibold text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
