"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X, User, Building2, ShoppingBag, Package, ChevronRight,
  ChevronLeft, CheckCircle2, CreditCard, Truck, Phone,
  MapPin, Mail, FileText, Loader2, PartyPopper,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type CustomerType = "customer" | "enterprise" | null;
type Step = "type" | "details" | "order" | "payment" | "confirm" | "success";

interface RetailForm {
  name: string;
  phone: string;
  address: string;
  qty: number;
  note: string;
}

interface EnterpriseForm {
  company: string;
  contactName: string;
  phone: string;
  address: string;
  tier: 50 | 200 | 500 | 1000;
  taxId: string;
  note: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const RETAIL_PRICE = 25;

const WHOLESALE_TIERS = [
  { qty: 50,   pricePerCup: 18, invest: 900,   profit: 350,  label: "50 แก้ว",    tag: "เริ่มต้น" },
  { qty: 200,  pricePerCup: 16, invest: 3200,  profit: 1800, label: "200 แก้ว",   tag: "นิยม" },
  { qty: 500,  pricePerCup: 15, invest: 7500,  profit: 5000, label: "500 แก้ว",   tag: "แนะนำ ⭐" },
  { qty: 1000, pricePerCup: 14, invest: 14000, profit: 11000,label: "1,000 แก้ว", tag: "ขายส่ง" },
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const PAYMENT_METHODS = [
  { id: "promptpay", label: "พร้อมเพย์", icon: "💳" },
  { id: "bank",      label: "โอนเงินธนาคาร", icon: "🏦" },
  { id: "cod",       label: "เก็บเงินปลายทาง", icon: "💵" },
];

function StepDots({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-6">
      {steps.map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current
              ? "w-6 bg-[#F5A623]"
              : i < current
              ? "w-1.5 bg-[#D4861A]/40"
              : "w-1.5 bg-amber-100"
          }`}
        />
      ))}
    </div>
  );
}

function FieldInput({
  label, value, onChange, placeholder, type = "text", required,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide">
        {label}{required && <span className="text-[#F5A623] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF7] text-sm text-[#2C1A0E] placeholder:text-[#7B3F00]/30 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-[#F5A623] transition-all"
      />
    </div>
  );
}

// ─── Main Modal ────────────────────────────────────────────────────────────────
export default function OrderModal({
  open,
  onClose,
  defaultTier,
}: {
  open: boolean;
  onClose: () => void;
  defaultTier?: 50 | 200 | 500 | 1000;
}) {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [step, setStep]                 = useState<Step>("type");
  const [paymentMethod, setPaymentMethod] = useState("promptpay");
  const [loading, setLoading]           = useState(false);
  const [orderId]                       = useState(() => `JJ-${Date.now().toString().slice(-6)}`);

  // Retail form
  const [retail, setRetail] = useState<RetailForm>({
    name: "", phone: "", address: "", qty: 1, note: "",
  });

  // Enterprise form
  const [enterprise, setEnterprise] = useState<EnterpriseForm>({
    company: "", contactName: "", phone: "", address: "",
    tier: defaultTier ?? 500, taxId: "", note: "",
  });

  // Sync defaultTier when opened from wholesale section
  useEffect(() => {
    if (defaultTier) setEnterprise((p) => ({ ...p, tier: defaultTier }));
  }, [defaultTier]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const reset = useCallback(() => {
    setCustomerType(null);
    setStep("type");
    setPaymentMethod("promptpay");
    setLoading(false);
    setRetail({ name: "", phone: "", address: "", qty: 1, note: "" });
    setEnterprise({ company: "", contactName: "", phone: "", address: "", tier: 500, taxId: "", note: "" });
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(reset, 300);
  }, [onClose, reset]);

  // Keyboard close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleClose]);

  // ── Derived values ─────────────────────────────────────────────────────────
  const selectedTierData = WHOLESALE_TIERS.find((t) => t.qty === enterprise.tier)!;
  const retailTotal      = retail.qty * RETAIL_PRICE;

  const STEPS_RETAIL:     Step[] = ["type", "details", "order", "payment", "confirm", "success"];
  const STEPS_ENTERPRISE: Step[] = ["type", "details", "order", "payment", "confirm", "success"];
  const steps = customerType === "enterprise" ? STEPS_ENTERPRISE : STEPS_RETAIL;
  const currentStepIdx = steps.indexOf(step);

  // ── Simulate payment ───────────────────────────────────────────────────────
  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 2200);
  };

  // ── Validation ─────────────────────────────────────────────────────────────
  const canProceedDetails = customerType === "customer"
    ? retail.name.trim() && retail.phone.trim() && retail.address.trim()
    : enterprise.company.trim() && enterprise.contactName.trim() && enterprise.phone.trim() && enterprise.address.trim();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[92dvh] flex flex-col">

        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#7B3F00] to-[#2C1A0E] px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F5A623] rounded-xl flex items-center justify-center flex-shrink-0">
                <ShoppingBag size={18} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-black text-base leading-tight">สั่งซื้อ Juice Juice</div>
                <div className="text-white/50 text-xs">
                  {step === "success" ? `หมายเลขออเดอร์: ${orderId}` : "น้ำสับปะรดสด 100%"}
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Progress dots — hide on success */}
          {step !== "success" && step !== "type" && (
            <div className="mt-4">
              <StepDots steps={steps.slice(1, -1)} current={currentStepIdx - 1} />
            </div>
          )}
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* ── STEP: TYPE ── */}
          {step === "type" && (
            <div className="flex flex-col gap-4">
              <div className="text-center mb-2">
                <h3 className="text-xl font-black text-[#2C1A0E]">คุณเป็นใคร?</h3>
                <p className="text-sm text-[#7B3F00]/60 mt-1">เลือกประเภทการสั่งซื้อของคุณ</p>
              </div>

              {/* Customer */}
              <button
                onClick={() => { setCustomerType("customer"); setStep("details"); }}
                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-amber-200 hover:border-[#F5A623] bg-white hover:bg-[#FEF0D0]/40 transition-all duration-200 hover:-translate-y-0.5 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FEF0D0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623]/20 transition-colors">
                  <User size={24} className="text-[#D4861A]" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-[#2C1A0E] text-base">ลูกค้าทั่วไป</div>
                  <div className="text-sm text-[#7B3F00]/60 mt-0.5">สั่งซื้อแก้วต่อแก้ว ราคา 25 ฿</div>
                </div>
                <ChevronRight size={18} className="text-amber-300 group-hover:text-[#F5A623] transition-colors" />
              </button>

              {/* Enterprise */}
              <button
                onClick={() => { setCustomerType("enterprise"); setStep("details"); }}
                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-amber-200 hover:border-[#7B3F00] bg-white hover:bg-[#F5E6D3]/40 transition-all duration-200 hover:-translate-y-0.5 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5E6D3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7B3F00]/10 transition-colors">
                  <Building2 size={24} className="text-[#7B3F00]" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-[#2C1A0E] text-base">ธุรกิจ / องค์กร</div>
                  <div className="text-sm text-[#7B3F00]/60 mt-0.5">สั่งขายส่ง ตั้งแต่ 50–1,000 แก้ว</div>
                </div>
                <ChevronRight size={18} className="text-amber-300 group-hover:text-[#7B3F00] transition-colors" />
              </button>
            </div>
          )}

          {/* ── STEP: DETAILS ── */}
          {step === "details" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-black text-[#2C1A0E] flex items-center gap-2">
                {customerType === "customer"
                  ? <><User size={18} className="text-[#F5A623]" /> ข้อมูลผู้สั่ง</>
                  : <><Building2 size={18} className="text-[#7B3F00]" /> ข้อมูลบริษัท</>}
              </h3>

              {customerType === "customer" ? (
                <>
                  <FieldInput label="ชื่อ-นามสกุล" required value={retail.name}
                    onChange={(v) => setRetail((p) => ({ ...p, name: v }))} placeholder="สมชาย ใจดี" />
                  <FieldInput label="เบอร์โทรศัพท์" required type="tel" value={retail.phone}
                    onChange={(v) => setRetail((p) => ({ ...p, phone: v }))} placeholder="08X-XXX-XXXX" />
                  <FieldInput label="ที่อยู่จัดส่ง" required value={retail.address}
                    onChange={(v) => setRetail((p) => ({ ...p, address: v }))} placeholder="บ้านเลขที่ ถนน แขวง เขต จังหวัด" />
                </>
              ) : (
                <>
                  <FieldInput label="ชื่อบริษัท / ร้านค้า" required value={enterprise.company}
                    onChange={(v) => setEnterprise((p) => ({ ...p, company: v }))} placeholder="บริษัท ABC จำกัด" />
                  <FieldInput label="ชื่อผู้ติดต่อ" required value={enterprise.contactName}
                    onChange={(v) => setEnterprise((p) => ({ ...p, contactName: v }))} placeholder="ชื่อผู้ดูแล" />
                  <FieldInput label="เบอร์โทรศัพท์" required type="tel" value={enterprise.phone}
                    onChange={(v) => setEnterprise((p) => ({ ...p, phone: v }))} placeholder="08X-XXX-XXXX" />
                  <FieldInput label="ที่อยู่จัดส่ง" required value={enterprise.address}
                    onChange={(v) => setEnterprise((p) => ({ ...p, address: v }))} placeholder="ที่อยู่บริษัท / คลังสินค้า" />
                  <FieldInput label="เลขประจำตัวผู้เสียภาษี" value={enterprise.taxId}
                    onChange={(v) => setEnterprise((p) => ({ ...p, taxId: v }))} placeholder="0-0000-00000-00-0 (ถ้ามี)" />
                </>
              )}
            </div>
          )}

          {/* ── STEP: ORDER ── */}
          {step === "order" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-black text-[#2C1A0E] flex items-center gap-2">
                <Package size={18} className="text-[#F5A623]" /> รายละเอียดคำสั่งซื้อ
              </h3>

              {customerType === "customer" ? (
                <>
                  {/* Qty selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide">
                      จำนวนแก้ว <span className="text-[#F5A623]">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setRetail((p) => ({ ...p, qty: Math.max(1, p.qty - 1) }))}
                        className="w-11 h-11 rounded-xl bg-[#FEF0D0] hover:bg-[#F5A623]/30 text-[#7B3F00] font-black text-xl transition-colors flex items-center justify-center"
                      >−</button>
                      <div className="flex-1 text-center text-2xl font-black text-[#2C1A0E]">
                        {retail.qty}
                      </div>
                      <button
                        onClick={() => setRetail((p) => ({ ...p, qty: p.qty + 1 }))}
                        className="w-11 h-11 rounded-xl bg-[#FEF0D0] hover:bg-[#F5A623]/30 text-[#7B3F00] font-black text-xl transition-colors flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-[#FEF0D0] rounded-2xl px-5 py-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-[#7B3F00]/70">{retail.qty} แก้ว × 25 ฿</div>
                    <div className="text-2xl font-black text-[#D4861A]">{retailTotal.toLocaleString()} ฿</div>
                  </div>

                  {/* Note */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide">หมายเหตุ</label>
                    <textarea
                      rows={2}
                      value={retail.note}
                      onChange={(e) => setRetail((p) => ({ ...p, note: e.target.value }))}
                      placeholder="ไม่ใส่น้ำแข็ง / หวานน้อย ฯลฯ"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF7] text-sm text-[#2C1A0E] placeholder:text-[#7B3F00]/30 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-[#F5A623] transition-all resize-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Tier selector */}
                  <div className="grid grid-cols-2 gap-3">
                    {WHOLESALE_TIERS.map((tier) => (
                      <button
                        key={tier.qty}
                        onClick={() => setEnterprise((p) => ({ ...p, tier: tier.qty as EnterpriseForm["tier"] }))}
                        className={`flex flex-col gap-1 p-4 rounded-2xl border-2 text-left transition-all duration-150 ${
                          enterprise.tier === tier.qty
                            ? "border-[#F5A623] bg-[#FEF0D0]"
                            : "border-amber-200 bg-white hover:border-[#F5A623]/50"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#7B3F00]/50 uppercase">{tier.tag}</span>
                        <span className="font-black text-[#2C1A0E] text-base">{tier.label}</span>
                        <span className="text-xs text-[#7B3F00]/60">{tier.pricePerCup} ฿/แก้ว</span>
                      </button>
                    ))}
                  </div>

                  {/* Summary box */}
                  <div className="bg-[#FEF0D0] rounded-2xl px-5 py-4 flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#7B3F00]/70">เงินลงทุน</span>
                      <span className="font-black text-[#2C1A0E]">{selectedTierData.invest.toLocaleString()} ฿</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#7B3F00]/70">กำไรโดยประมาณ</span>
                      <span className="font-black text-[#D4861A]">+{selectedTierData.profit.toLocaleString()} ฿</span>
                    </div>
                    <div className="border-t border-amber-200 pt-2 flex justify-between text-sm">
                      <span className="text-[#7B3F00]/70">ราคารวม</span>
                      <span className="text-xl font-black text-[#D4861A]">{selectedTierData.invest.toLocaleString()} ฿</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide">หมายเหตุ / ความต้องการพิเศษ</label>
                    <textarea
                      rows={2}
                      value={enterprise.note}
                      onChange={(e) => setEnterprise((p) => ({ ...p, note: e.target.value }))}
                      placeholder="เช่น ต้องการใบเสร็จภาษี, ส่งด่วน ฯลฯ"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF7] text-sm text-[#2C1A0E] placeholder:text-[#7B3F00]/30 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-[#F5A623] transition-all resize-none"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── STEP: PAYMENT ── */}
          {step === "payment" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-black text-[#2C1A0E] flex items-center gap-2">
                <CreditCard size={18} className="text-[#F5A623]" /> เลือกวิธีชำระเงิน
              </h3>

              <div className="flex flex-col gap-3">
                {PAYMENT_METHODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-150 text-left ${
                      paymentMethod === m.id
                        ? "border-[#F5A623] bg-[#FEF0D0]"
                        : "border-amber-200 bg-white hover:border-[#F5A623]/50"
                    }`}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="font-bold text-[#2C1A0E]">{m.label}</span>
                    {paymentMethod === m.id && (
                      <CheckCircle2 size={18} className="text-[#F5A623] ml-auto" strokeWidth={2.5} />
                    )}
                  </button>
                ))}
              </div>

              {/* Simulated QR / bank info */}
              {paymentMethod === "promptpay" && (
                <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 text-center">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 to-[#FEF0D0] rounded-2xl flex items-center justify-center mb-3 border-2 border-amber-200">
                    <span className="text-4xl">📱</span>
                  </div>
                  <div className="text-xs font-bold text-[#7B3F00]/50 uppercase tracking-wider mb-1">พร้อมเพย์</div>
                  <div className="text-lg font-black text-[#2C1A0E]">061-941-8787</div>
                  <div className="text-sm text-[#7B3F00]/60 mt-1">นาย ศิโรดม ชาวเหนือ</div>
                </div>
              )}
              {paymentMethod === "bank" && (
                <div className="bg-white border-2 border-amber-100 rounded-2xl p-5">
                  <div className="text-xs font-bold text-[#7B3F00]/50 uppercase tracking-wider mb-3">ข้อมูลบัญชี</div>
                  {[
                    ["ธนาคาร", "ไทยพาณิชย์ (SCB)"],
                    ["ชื่อบัญชี", "นาย ศิโรดม ชาวเหนือ"],
                    ["เลขบัญชี", "7932807091"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-1.5 border-b border-amber-50 last:border-0">
                      <span className="text-xs text-[#7B3F00]/50">{k}</span>
                      <span className="text-sm font-bold text-[#2C1A0E]">{v}</span>
                    </div>
                  ))}
                </div>
              )}
              {paymentMethod === "cod" && (
                <div className="bg-[#FEF0D0] rounded-2xl p-4 flex items-start gap-3">
                  <Truck size={18} className="text-[#D4861A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#7B3F00]/80 leading-relaxed">
                    ชำระเงินเมื่อได้รับสินค้า มีค่าบริการเพิ่มเติม 30 ฿
                    ต่อออเดอร์ จัดส่งภายใน 1–2 วันทำการ
                  </p>
                </div>
              )}

              {/* Amount due */}
              <div className="bg-[#2C1A0E] rounded-2xl px-5 py-3.5 flex items-center justify-between">
                <span className="text-white/60 text-sm font-semibold">ยอดที่ต้องชำระ</span>
                <span className="text-[#F5A623] text-2xl font-black">
                  {customerType === "customer"
                    ? `${(retailTotal + (paymentMethod === "cod" ? 30 : 0)).toLocaleString()} ฿`
                    : `${(selectedTierData.invest + (paymentMethod === "cod" ? 30 : 0)).toLocaleString()} ฿`}
                </span>
              </div>
            </div>
          )}

          {/* ── STEP: CONFIRM ── */}
          {step === "confirm" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-black text-[#2C1A0E] flex items-center gap-2">
                <FileText size={18} className="text-[#F5A623]" /> ยืนยันคำสั่งซื้อ
              </h3>

              <div className="bg-[#FDF6EE] rounded-2xl divide-y divide-amber-100 overflow-hidden border border-amber-100">
                {customerType === "customer" ? (
                  <>
                    {[
                      ["ประเภท", "ลูกค้าทั่วไป"],
                      ["ชื่อ", retail.name],
                      ["โทร", retail.phone],
                      ["ที่อยู่", retail.address],
                      ["จำนวน", `${retail.qty} แก้ว`],
                      ["ราคา/แก้ว", "25 ฿"],
                      ["รวม", `${retailTotal.toLocaleString()} ฿`],
                      ["ชำระด้วย", PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label ?? ""],
                      ...(retail.note ? [["หมายเหตุ", retail.note]] : []),
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between px-4 py-2.5">
                        <span className="text-xs text-[#7B3F00]/50 font-semibold">{k}</span>
                        <span className="text-sm font-bold text-[#2C1A0E] text-right max-w-[60%]">{v}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      ["ประเภท", "ธุรกิจ / องค์กร"],
                      ["บริษัท", enterprise.company],
                      ["ผู้ติดต่อ", enterprise.contactName],
                      ["โทร", enterprise.phone],
                      ["ที่อยู่", enterprise.address],
                      ...(enterprise.taxId ? [["เลขภาษี", enterprise.taxId]] : []),
                      ["แพ็กเกจ", selectedTierData.label],
                      ["ราคา/แก้ว", `${selectedTierData.pricePerCup} ฿`],
                      ["ยอดรวม", `${selectedTierData.invest.toLocaleString()} ฿`],
                      ["กำไรโดยประมาณ", `+${selectedTierData.profit.toLocaleString()} ฿`],
                      ["ชำระด้วย", PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label ?? ""],
                      ...(enterprise.note ? [["หมายเหตุ", enterprise.note]] : []),
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between px-4 py-2.5">
                        <span className="text-xs text-[#7B3F00]/50 font-semibold shrink-0">{k}</span>
                        <span className="text-sm font-bold text-[#2C1A0E] text-right max-w-[60%]">{v}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ── STEP: SUCCESS ── */}
          {step === "success" && (
            <div className="flex flex-col items-center gap-5 py-4 text-center">
              <div className="w-20 h-20 rounded-full bg-[#FEF0D0] flex items-center justify-center">
                <PartyPopper size={40} className="text-[#F5A623]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#2C1A0E]">สั่งซื้อสำเร็จ!</h3>
                <p className="text-[#7B3F00]/60 text-sm mt-1">
                  {customerType === "customer"
                    ? "เราจะจัดส่งน้ำสับปะรดสดถึงมือคุณเร็วๆ นี้ 🍍"
                    : "ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง"}
                </p>
              </div>

              <div className="w-full bg-[#FEF0D0] rounded-2xl px-5 py-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#7B3F00]/60">หมายเลขออเดอร์</span>
                  <span className="font-black text-[#2C1A0E]">{orderId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#7B3F00]/60">วิธีชำระ</span>
                  <span className="font-bold text-[#2C1A0E]">{PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-amber-200 pt-2">
                  <span className="text-[#7B3F00]/60">ยอดรวม</span>
                  <span className="font-black text-[#D4861A]">
                    {customerType === "customer"
                      ? `${retailTotal.toLocaleString()} ฿`
                      : `${selectedTierData.invest.toLocaleString()} ฿`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#7B3F00]/50">
                <Phone size={12} />
                โคราช 065-362-6191 · ขอนแก่น 061-941-8787
              </div>
              <div className="flex items-center gap-2 text-xs text-[#7B3F00]/50">
                <Mail size={12} />
                Sirodom.c@kkumail.com
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {step !== "type" && step !== "success" && (
          <div className="flex-shrink-0 px-6 py-4 border-t border-amber-100 bg-white flex gap-3">
            {/* Back */}
            <button
              onClick={() => {
                const prev: Record<Step, Step> = {
                  type: "type", details: "type", order: "details",
                  payment: "order", confirm: "payment", success: "confirm",
                };
                setStep(prev[step]);
              }}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-amber-200 text-[#7B3F00] font-bold text-sm hover:bg-[#FEF0D0] transition-colors"
            >
              <ChevronLeft size={16} /> ย้อนกลับ
            </button>

            {/* Next / Pay */}
            {step === "confirm" ? (
              <button
                onClick={handlePay}
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] disabled:opacity-60 text-white font-black text-sm py-3 rounded-xl shadow-md shadow-amber-200 transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> กำลังดำเนินการ…</>
                ) : (
                  <><CreditCard size={16} strokeWidth={2.5} /> ยืนยันชำระเงิน</>
                )}
              </button>
            ) : (
              <button
                onClick={() => {
                  const next: Record<Step, Step> = {
                    type: "details", details: "order", order: "payment",
                    payment: "confirm", confirm: "success", success: "success",
                  };
                  setStep(next[step]);
                }}
                disabled={step === "details" && !canProceedDetails}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm py-3 rounded-xl shadow-md shadow-amber-200 transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0"
              >
                ถัดไป <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}

        {/* Success close */}
        {step === "success" && (
          <div className="flex-shrink-0 px-6 py-4 border-t border-amber-100 bg-white">
            <button
              onClick={handleClose}
              className="w-full bg-[#7B3F00] hover:bg-[#5A2D00] text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              ปิด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
