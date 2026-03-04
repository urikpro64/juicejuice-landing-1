import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "คุณแนน",
    handle: "@nan_bkk",
    avatar: "น",
    avatarGradient: "from-[#F5A623] to-[#D4861A]",
    rating: 5,
    date: "2 วันที่แล้ว",
    badge: "ลูกค้าประจำ",
    text: "อร่อยมากจริงๆ ค่ะ! คั้นสดให้ต่อหน้าเลย กลิ่นหอมมาก หวานอมเปรี้ยวได้สัดส่วนพอดี ราคา 25 บาทถือว่าคุ้มมากๆ สั่งทุกวันเลยค่ะ ❤️",
    verified: true,
  },
  {
    name: "คุณต้น",
    handle: "@ton_runner",
    avatar: "ต",
    avatarGradient: "from-[#A0522D] to-[#7B3F00]",
    rating: 5,
    date: "5 วันที่แล้ว",
    badge: "รีวิวพิเศษ",
    text: "วิ่งมาแล้วเหนื่อย แวะซื้อน้ำสับปะรดที่ Juice Juice แก้วเดียวสดชื่นทันที! น้ำเยอะ น้ำแข็งเยอะ เย็นจัดมาก ประทับใจมากครับ แนะนำเลย",
    verified: true,
  },
  {
    name: "คุณมิ้น",
    handle: "@min_foodie",
    avatar: "ม",
    avatarGradient: "from-[#F5A623] to-[#A0522D]",
    rating: 5,
    date: "1 สัปดาห์ที่แล้ว",
    badge: "Foodie",
    text: "ลองมาหลายเจ้าแล้วแต่ที่นี่ดีที่สุด! สับปะรดหอมหวาน ไม่มีกลิ่นสังเคราะห์เลย ชอบที่ไม่ใส่น้ำตาลเพิ่ม รสชาติธรรมชาติมากๆ ค่ะ 🍍",
    verified: true,
  },
  {
    name: "คุณโอม",
    handle: "@om_everyday",
    avatar: "อ",
    avatarGradient: "from-[#D4861A] to-[#7B3F00]",
    rating: 5,
    date: "2 สัปดาห์ที่แล้ว",
    badge: "ลูกค้าประจำ",
    text: "25 บาทได้น้ำผลไม้แก้วใหญ่ สดมาก คุ้มมากครับ! พนักงานยิ้มแย้มแจ่มใส บรรยากาศดี มาซื้อกับแฟนทุกอาทิตย์เลยครับ",
    verified: true,
  },
  {
    name: "คุณพลอย",
    handle: "@ploy_healthy",
    avatar: "พ",
    avatarGradient: "from-[#F5A623] to-[#D4861A]",
    rating: 5,
    date: "3 สัปดาห์ที่แล้ว",
    badge: "Healthy Lover",
    text: "ดีใจมากที่ไม่ใส่น้ำตาลเพิ่ม หวานจากสับปะรดล้วนๆ เลยค่ะ ดื่มแล้วไม่รู้สึกผิด ราคาถูกมาก แนะนำให้ทุกคนมาลองเลยนะคะ ✨",
    verified: true,
  },
  {
    name: "คุณเจมส์",
    handle: "@james_office",
    avatar: "เ",
    avatarGradient: "from-[#A0522D] to-[#5A2D00]",
    rating: 4,
    date: "1 เดือนที่แล้ว",
    badge: "",
    text: "ออฟฟิศอยู่ใกล้ๆ แวะซื้อเกือบทุกวันครับ เย็นสดชื่น ราคาถูก เหมาะมากสำหรับอากาศร้อนๆ แบบนี้ ขอให้เปิดนานๆ นะครับ 👍",
    verified: false,
  },
];

function StarRow({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? "text-[#F5A623] fill-[#F5A623]" : "text-[#7B3F00]/20 fill-[#7B3F00]/10"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FDF6EE] relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#F5A623]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#7B3F00]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#FEF0D0] border border-[#F5A623]/50 text-[#7B3F00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            รีวิวจากลูกค้า
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1A0E] leading-tight">
            ลูกค้า{" "}
            <span className="text-[#F5A623]">พูดถึงเรา</span>{" "}
            ว่าอย่างไร?
          </h2>
          <p className="mt-4 text-[#7B3F00]/60 text-base sm:text-lg leading-relaxed">
            ความคิดเห็นจริงจากลูกค้าที่รักน้ำสับปะรดสด Juice Juice
          </p>

          {/* Overall rating bar */}
          <div className="mt-8 inline-flex items-center gap-5 bg-white rounded-2xl px-7 py-4 shadow-md shadow-amber-100 border border-amber-100">
            <div className="text-center">
              <div className="text-4xl font-black text-[#F5A623] leading-none">{avgRating}</div>
              <div className="text-xs text-[#7B3F00]/50 font-semibold mt-1">คะแนนเฉลี่ย</div>
            </div>
            <div className="w-px h-10 bg-amber-200" />
            <div className="flex flex-col gap-1.5">
              <StarRow count={5} size={18} />
              <div className="text-xs text-[#7B3F00]/50 font-semibold">{reviews.length} รีวิว</div>
            </div>
            <div className="w-px h-10 bg-amber-200" />
            <div className="text-center">
              <div className="text-2xl font-black text-[#7B3F00] leading-none">100%</div>
              <div className="text-xs text-[#7B3F00]/50 font-semibold mt-1">แนะนำเรา</div>
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col gap-4 bg-white rounded-3xl border border-amber-100 hover:border-[#F5A623]/40 p-6 shadow-sm hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-5 right-5 text-[#F5A623]/15 group-hover:text-[#F5A623]/25 transition-colors"
                strokeWidth={1.5}
              />

              {/* Stars + date */}
              <div className="flex items-center justify-between">
                <StarRow count={review.rating} />
                <span className="text-xs text-[#7B3F00]/40 font-medium">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-sm text-[#2C1A0E]/75 leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Divider */}
              <div className="border-t border-amber-100" />

              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarGradient} flex items-center justify-center text-white font-black text-base flex-shrink-0 shadow-sm`}
                >
                  {review.avatar}
                </div>

                {/* Name + handle */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-black text-[#2C1A0E]">{review.name}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-[#7B3F00]/60 bg-[#FEF0D0] px-1.5 py-0.5 rounded-full">
                        ✓ ยืนยันแล้ว
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-[#7B3F00]/40">{review.handle}</span>
                    {review.badge && (
                      <span className="text-[10px] font-bold text-[#F5A623] bg-[#FEF0D0] px-1.5 py-0.5 rounded-full">
                        {review.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 text-center">
          <p className="text-[#7B3F00]/50 text-sm mb-5">
            เข้าร่วมกับลูกค้ากว่า <span className="font-black text-[#F5A623]">500+</span> คนที่ดื่มทุกวัน
          </p>
          <a
            href="#product"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4861A] text-white font-black text-base px-9 py-4 rounded-full shadow-lg shadow-amber-200 transition-all duration-200 hover:shadow-xl hover:shadow-amber-300 hover:-translate-y-1 active:translate-y-0"
          >
            ลองสักแก้วเลย — 25฿
          </a>
        </div>
      </div>
    </section>
  );
}
