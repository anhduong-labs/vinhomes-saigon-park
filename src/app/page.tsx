"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  X, ShieldCheck, Phone, MessageCircle,
  MapPin, Train, Building2, TrendingUp,
  CheckCircle2, ChevronLeft, ChevronRight,
} from "lucide-react";

const PHONE = "0975442140";
const ZALO = "https://zalo.me/0975442140";

const SLIDESHOW_IMAGES = [
  { src: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg", alt: "Phối cảnh tổng thể" },
  { src: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/vi-tri-vinhomes-hoc-mon.jpg", alt: "Vị trí dự án" },
  { src: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/cong-vien-vinhomes-hoc-mon-768x432.jpg", alt: "Công viên nội khu" },
  { src: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/vincom-mega-mall-vinhomes-hoc-mon-768x432.jpg", alt: "Vincom Mega Mall" },
];

const OVERVIEW = [
  { label: "Tên dự án", value: "Vinhomes Saigon Park (Vinhomes Hóc Môn)" },
  { label: "Vị trí", value: "Xã Xuân Thới Sơn, Hóc Môn, TP.HCM" },
  { label: "Chủ đầu tư", value: "Vinhomes – Tư vấn giám sát: Công ty CP Vinhomes" },
  { label: "Quy mô", value: "924 ha" },
  { label: "Mật độ xây dựng", value: "25%" },
  { label: "Loại hình", value: "Căn hộ, Nhà phố, Shophouse, Biệt thự" },
  { label: "Khởi công", value: "24/04/2026" },
  { label: "Sở hữu", value: "Lâu dài (Việt Nam) · Theo quy định (Nước ngoài)" },
];

const INVESTMENT = [
  {
    icon: MapPin,
    title: "Cửa ngõ Tây Bắc TP.HCM",
    desc: "Tọa độ chiến lược bám trục QL22 – kết nối Tân Bình, Quận 12, Tân Phú và các tỉnh phía Tây trong 20–30 phút.",
  },
  {
    icon: Train,
    title: "Đón đầu hạ tầng lớn",
    desc: "Metro số 2, Vành đai 3, cao tốc TP.HCM – Mộc Bài đang triển khai. Mặt bằng giá khu Tây Bắc sẽ được tái định giá khi hạ tầng hoàn thiện.",
  },
  {
    icon: Building2,
    title: "Quỹ đất 924ha hiếm có",
    desc: "Quy mô đủ lớn để hình thành hệ sinh thái đô thị khép kín: Vinschool, Vinmec, Vincom Mega Mall, công viên, hồ cảnh quan.",
  },
  {
    icon: TrendingUp,
    title: "Tiền lệ từ các đại đô thị Vinhomes",
    desc: "Các đại đô thị Vinhomes trước đây như Grand Park, Ocean Park đều ghi nhận sự tăng trưởng tốt về giá sau khi đi vào hoạt động.",
  },
];

const PRODUCTS = [
  {
    title: "Căn hộ",
    price: "Từ ~1.6 tỷ",
    desc: "Vốn vào thấp, phù hợp tích lũy tài sản và cho thuê dài hạn.",
    img: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/vinschool-vinhomes-hoc-mon-768x512.jpg",
  },
  {
    title: "Nhà phố",
    price: "Từ ~7 tỷ",
    desc: "Cân bằng giữa an cư và khai thác kinh doanh – thanh khoản tốt.",
    img: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg",
  },
  {
    title: "Shophouse",
    price: "Từ ~12 tỷ",
    desc: "Mặt tiền trục thương mại nội khu – dòng tiền ổn định từ cho thuê.",
    img: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/vincom-mega-mall-vinhomes-hoc-mon-768x432.jpg",
  },
  {
    title: "Biệt thự song lập",
    price: "Từ ~16 tỷ",
    desc: "Không gian riêng tư, sân vườn đẹp – tối ưu tài chính hơn đơn lập.",
    img: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/cong-vien-vinhomes-hoc-mon-768x432.jpg",
  },
  {
    title: "Biệt thự đơn lập",
    price: "Từ ~20 tỷ",
    desc: "Sản phẩm giới hạn, giữ giá bền vững, phù hợp tích lũy dài hạn.",
    img: "https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/to-hop-the-thao-vinhomes-hoc-mon-768x432.jpg",
  },
];

// ── Slideshow ──────────────────────────────────────────────────
function Slideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDESHOW_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-full md:min-h-[420px]">
      {SLIDESHOW_IMAGES.map((img, i) => (
        <div key={img.src} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
      <button onClick={() => setIdx((i) => (i - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => setIdx((i) => (i + 1) % SLIDESHOW_IMAGES.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60">
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {SLIDESHOW_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-white" : "w-1.5 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

// ── Lead Form ─────────────────────────────────────────────────
function LeadForm({ onSuccess, light = false }: { onSuccess: () => void; light?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", demand: "Mua đầu tư dài hạn" });
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    // TODO: push to Google Sheet webhook
    setLoading(false);
    onSuccess();
  };
  const inputCls = light
    ? "w-full rounded-lg border border-gray-200 px-4 py-3 text-primary-bg outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 bg-white"
    : "w-full rounded-lg border border-surface-light/20 bg-surface-light/10 px-4 py-3 text-surface-light placeholder-surface-light/40 outline-none focus:border-surface-light/50";
  const labelCls = light ? "mb-1 block text-sm font-medium text-primary-bg" : "mb-1 block text-sm font-medium text-surface-light/80";
  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className={labelCls}>Họ và tên *</label>
        <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Nguyễn Văn A" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Số điện thoại *</label>
        <input required value={form.phone} type="tel" onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          placeholder="09xxxxxxxx" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Nhu cầu</label>
        <select value={form.demand} onChange={(e) => setForm((f) => ({ ...f, demand: e.target.value }))}
          className={light ? "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-primary-bg outline-none focus:border-primary-accent" : "w-full rounded-lg border border-surface-light/20 bg-primary-bg px-4 py-3 text-surface-light outline-none"}>
          <option>Mua đầu tư dài hạn</option>
          <option>Mua để ở</option>
          <option>Mua khai thác kinh doanh</option>
          <option>Cần tư vấn thêm</option>
        </select>
      </div>
      <button type="submit" disabled={loading}
        className="w-full rounded-lg bg-primary-accent py-3.5 font-bold tracking-wide text-surface-light transition hover:bg-primary-accent-hover disabled:opacity-60">
        {loading ? "Đang gửi..." : "NHẬN THÔNG TIN GIAI ĐOẠN 1 NGAY"}
      </button>
      <p className="flex items-center justify-center gap-1 text-center text-xs text-surface-light/50">
        <ShieldCheck size={12} /> Thông tin được bảo mật tuyệt đối
      </p>
    </form>
  );
}

// ── Popup ─────────────────────────────────────────────────────
function Popup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);
  useEffect(() => { if (!open) setTimeout(() => setDone(false), 300); }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4" onClick={onClose}>
      <div className="relative w-full max-w-md rounded-2xl bg-surface-light shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full p-1.5 text-primary-bg/40 hover:bg-black/5 hover:text-primary-bg">
          <X size={20} />
        </button>
        <div className="rounded-t-2xl bg-primary-bg px-6 py-5">
          <h4 className="text-lg font-bold text-surface-light">Đăng ký nhận thông tin Giai đoạn 1</h4>
          <p className="mt-1 text-sm text-surface-light/60">Chuyên viên sẽ liên hệ và gửi bảng giá + chính sách phù hợp.</p>
        </div>
        <div className="p-6">
          {done ? (
            <div className="py-8 text-center">
              <CheckCircle2 size={48} className="mx-auto text-green-500" />
              <p className="mt-3 font-bold text-primary-bg">Đăng ký thành công!</p>
              <p className="mt-1 text-sm text-primary-bg/60">Đội ngũ tư vấn sẽ liên hệ sớm.</p>
            </div>
          ) : (
            <LeadForm light onSuccess={() => { setDone(true); setTimeout(onClose, 2500); }} />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-primary-bg text-surface-light">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-surface-light/10 bg-primary-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Image src="https://vinhomeshocmonsr.vn/wp-content/uploads/2023/09/logo-vinhomes-hoc-mon.png"
            alt="Vinhomes Hóc Môn" width={130} height={40} className="h-9 w-auto" />
          <button onClick={() => setOpen(true)}
            className="rounded-lg bg-primary-accent px-5 py-2 text-sm font-bold transition hover:bg-primary-accent-hover">
            Nhận bảng giá
          </button>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image src="https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg"
          alt="Phối cảnh Vinhomes Saigon Park" fill priority className="object-cover object-center" />
        {/* gradient tối hơn để text nổi */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-primary-bg" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24">
          {/* H1 — 2 dòng, dòng 2 dùng Silk Sand + underline accent thay màu đỏ */}
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            VINHOMES HÓC MÔN
            <br />
            <span className="relative inline-block text-surface-light">
              KHU ĐÔ THỊ ĐẠI HỌC QUỐC TẾ
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-primary-accent" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-surface-light/80 md:text-lg">
            Thông tin, bảng giá và chính sách giai đoạn 1 từ đại lý F1 độc quyền.
          </p>

          {/* 3 card blocks */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { emoji: "🏷️", title: "Giá giai đoạn 1 vào điểm tốt nhất", sub: "Mức tham chiếu thấp nhất trong chu kỳ phát triển đại đô thị" },
              { emoji: "🎯", title: "Rổ hàng độc quyền từ đại lý F1", sub: "Ưu tiên sản phẩm đẹp theo từng đợt mở bán chính thức" },
              { emoji: "📋", title: "Chính sách thanh toán linh hoạt", sub: "Hỗ trợ tư vấn tài chính theo từng loại hình và ngân sách" },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur-sm">
                <div className="text-2xl">{c.emoji}</div>
                <p className="mt-2 font-bold text-surface-light">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-surface-light/65">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-accent px-7 py-4 text-base font-bold shadow-lg shadow-primary-accent/40 transition hover:-translate-y-0.5 hover:bg-primary-accent-hover">
              Nhận thông tin Giai đoạn 1 ngay
            </button>
            <button onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-light/40 bg-white/10 px-7 py-4 text-base font-semibold backdrop-blur-sm transition hover:bg-white/20">
              Xem chính sách thanh toán
            </button>
          </div>
        </div>
      </section>

      {/* 2. TỔNG QUAN — nền trắng sáng */}
      <section className="bg-surface-light py-16 text-primary-bg">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Tổng quan dự án</h2>
          <div className="mt-1 h-1 w-12 bg-primary-accent" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
              {OVERVIEW.map((row) => (
                <div key={row.label} className="flex gap-3 px-5 py-3.5">
                  <span className="w-36 shrink-0 text-xs font-semibold uppercase tracking-wide text-primary-accent">{row.label}</span>
                  <span className="text-sm text-primary-bg/80">{row.value}</span>
                </div>
              ))}
            </div>
            <Slideshow />
          </div>
          <p className="mt-4 text-xs text-primary-bg/40">
            * Một số thông tin mang tính tham khảo thị trường, có thể điều chỉnh theo công bố chính thức từng thời điểm.
          </p>
        </div>
      </section>

      {/* 3. LUẬN ĐIỂM ĐẦU TƯ — nền tối */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Tại sao đầu tư giai đoạn 1?</h2>
          <div className="mt-1 h-1 w-12 bg-primary-accent" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INVESTMENT.map((item) => (
              <div key={item.title} className="rounded-2xl border border-surface-light/10 bg-surface-light/5 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-accent/25">
                  <item.icon size={22} className="text-surface-light" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-surface-light">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-light/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOẠI HÌNH SẢN PHẨM — nền sáng + ảnh */}
      <section className="bg-surface-light py-16 text-primary-bg">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Loại hình sản phẩm</h2>
          <div className="mt-1 h-1 w-12 bg-primary-accent" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-44 w-full">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-base font-bold text-white">{p.title}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-primary-accent">{p.price}</p>
                  <p className="mt-1 text-sm text-primary-bg/60">{p.desc}</p>
                  <button onClick={() => setOpen(true)}
                    className="mt-3 text-sm font-bold text-primary-accent hover:underline">
                    Nhận giỏ hàng tham khảo →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA CUỐI — nền tối */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Đăng ký nhận bảng giá & chính sách Giai đoạn 1
          </h2>
          <p className="mt-3 text-surface-light/60">
            Điền thông tin để nhận tư vấn 1-1 từ đại lý F1 độc quyền Vinhomes Saigon Park.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-surface-light/5 border border-surface-light/10 p-6 text-left">
            <LeadForm onSuccess={() => {}} />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-surface-light/50">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Bảo mật</span>
            <span>🎯 Đại lý F1</span>
            <span>💬 Tư vấn 1-1</span>
          </div>
        </div>
      </section>

      {/* 6. FOOTER CREDENTIAL */}
      <footer className="border-t border-surface-light/10 bg-primary-bg py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* trái */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-surface-light/35">Đơn vị phân phối</p>
              <p className="mt-3 text-base font-bold text-surface-light">CÔNG TY TNHH VICTORY HOME VIỆT NAM</p>
              <p className="text-xs text-surface-light/40">VICTORY HOMES VIETNAM COMPANY LIMITED</p>
              <dl className="mt-4 space-y-2 text-sm text-surface-light/65">
                {[
                  ["MST", "0110010723"],
                  ["Địa chỉ", "Đường Giáp Bát, Phường Hoàng Mai, Hà Nội"],
                  ["Điện thoại", "0916 174 985"],
                  ["Email", "hasonanland@gmail.com"],
                  ["Người đại diện", "Phạm Quốc Tuấn – Giám đốc"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex gap-2">
                    <dt className="w-36 shrink-0 text-surface-light/35">{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* phải: disclaimer */}
            <div className="rounded-xl border border-surface-light/10 bg-surface-light/5 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-surface-light/35">Lưu ý quan trọng</p>
              <p className="text-xs leading-relaxed text-surface-light/50">
                Thông tin, hình ảnh, các tiện ích trên website chỉ mang tính chất tương đối và có thể được điều chỉnh
                theo quyết định của Chủ đầu tư tại từng thời điểm đảm bảo phù hợp quy hoạch và thực tế thi công Dự án.
                Các thông tin, cam kết chính thức sẽ được quy định cụ thể tại Hợp đồng mua bán. Việc quản lý, vận hành
                và kinh doanh của khu đô thị sẽ theo quy định của Ban quản lý.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-surface-light/10 pt-5 text-center text-xs text-surface-light/25">
            © {new Date().getFullYear()} Victory Home Việt Nam · Trang thông tin tham khảo thị trường
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR — Zalo thay SĐT */}
      <div className="fixed bottom-0 left-0 z-50 flex w-full gap-2 border-t border-surface-light/10 bg-primary-bg/95 p-3 pb-safe backdrop-blur md:hidden">
        <a href={ZALO} target="_blank" rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-surface-light/30 py-3 text-sm font-bold text-surface-light">
          <MessageCircle size={16} /> Tư vấn qua Zalo
        </a>
        <button onClick={() => setOpen(true)}
          className="flex-1 rounded-xl bg-primary-accent py-3 text-sm font-bold text-surface-light">
          Nhận thông tin Giai đoạn 1
        </button>
      </div>

      {/* FLOATING — chỉ desktop, không đè sticky bar */}
      <div className="fixed bottom-8 right-4 z-50 hidden flex-col gap-3 md:flex">
        <a href={ZALO} target="_blank" rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-light/20 bg-surface-light/10 text-surface-light backdrop-blur hover:bg-surface-light/25"
          aria-label="Zalo">
          <MessageCircle size={22} />
        </a>
        <a href={`tel:${PHONE}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-accent text-surface-light hover:bg-primary-accent-hover"
          aria-label="Gọi ngay">
          <Phone size={22} />
        </a>
      </div>

      <Popup open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
