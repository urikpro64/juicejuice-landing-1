import Image from "next/image";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
];

const quickLinks = [
  { label: "หน้าแรก", href: "#hero" },
  { label: "ทำไมต้องเลือกเรา", href: "#features" },
  { label: "เมนูของเรา", href: "#product" },
  { label: "รีวิวลูกค้า", href: "#reviews" },
  { label: "ราคาขายส่ง", href: "#wholesale" },
  { label: "สั่งเลย", href: "#product" },
];

const contactItems = [
  { icon: MapPin, text: "สาขานครราชสีมา: จอหอ นครราชสีมา" },
  { icon: MapPin, text: "สาขาขอนแก่น: อ.เมือง จ.ขอนแก่น" },
  { icon: Phone, text: "โคราช 065-362-6191 (คุณนิว)" },
  { icon: Phone, text: "ขอนแก่น 061-941-8787 (คุณโดม)" },
  { icon: Mail, text: "Sirodom.c@kkumail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2C1A0E] text-white overflow-hidden">
      {/* Top wave */}
      <div className="pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V0H0Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>

      {/* BG decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#F5A623]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#7B3F00]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">

            {/* Logo image + text */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#F5A623]/40 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Juice Juice logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black text-[#F5A623]">Juice</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mx-0.5 mt-0.5" />
                <span className="text-xl font-black text-amber-300">Juice</span>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed">
              น้ำสับปะรดแท้ สายพันธุ์ปัตตาเวีย ผสมวุ้นชาดำ
              ไม่มีวัตถุกันเสีย รสชาติกลมกล่อม เปรี้ยวหวานลงตัว
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F5A623] hover:text-[#2C1A0E] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">
              ลิงก์ด่วน
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#F5A623] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#F5A623] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">
              ติดต่อเรา
            </h4>
            <ul className="flex flex-col gap-3">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={15} className="text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-white/50">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">
              เวลาเปิด-ปิด
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <div className="flex justify-between">
                <span>จันทร์ – ศุกร์</span>
                <span className="text-[#F5A623] font-semibold">8:00 – 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>เสาร์ – อาทิตย์</span>
                <span className="text-[#F5A623] font-semibold">9:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>วันหยุดนักขัตฤกษ์</span>
                <span className="text-white/30 font-semibold">ปิดบริการ</span>
              </div>
            </div>

            <a
              href="#product"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-black text-sm px-5 py-3 rounded-full shadow-lg shadow-amber-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              สั่งแก้วเลย — 25฿
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            &copy; {year}{" "}
            <span className="text-[#F5A623] font-bold">Juice Juice</span>. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <p className="flex items-center gap-1.5">
            ทำด้วย{" "}
            <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            และสับปะรดสดจากประเทศไทย
          </p>
        </div>
      </div>
    </footer>
  );
}
