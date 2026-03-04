"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";
import { useOrderModal } from "../context/OrderModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useOrderModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "หน้าแรก", href: "#hero" },
    { label: "ทำไมต้องเรา", href: "#features" },
    { label: "เมนูของเรา", href: "#product" },
    { label: "รีวิว", href: "#reviews" },
    { label: "ราคาส่ง", href: "#wholesale" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF7]/95 backdrop-blur-md shadow-md shadow-amber-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo — image + text */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Juice Juice logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F5A623] group-hover:text-[#D4861A] transition-colors duration-200">
              Juice
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B3F00] mt-0.5" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#7B3F00] group-hover:text-[#5A2D00] transition-colors duration-200">
              Juice
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#7B3F00]/70 hover:text-[#F5A623] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5A623] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-amber-200 transition-all duration-200 hover:shadow-lg hover:shadow-amber-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag size={16} strokeWidth={2.5} />
              สั่งเลย
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-[#7B3F00] hover:bg-amber-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="เปิด/ปิดเมนู"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FFFDF7]/98 backdrop-blur-md border-t border-amber-100`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-[#7B3F00] hover:text-[#F5A623] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-bold text-sm px-5 py-3 rounded-full shadow-md transition-all duration-200 mt-1"
          >
            <ShoppingBag size={16} strokeWidth={2.5} />
            สั่งเลย
          </button>
        </nav>
      </div>
    </header>
  );
}
