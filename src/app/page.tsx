"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type FormState = {
  fullName: string;
  phone: string;
  demand: string;
};

const stats = [
  { label: "Quy mô", value: "924ha", icon: Building2 },
  { label: "Mật độ xây dựng", value: "25%", icon: Leaf },
  { label: "Dự kiến mở bán", value: "Q2/2026", icon: Clock3 },
  { label: "Vị trí", value: "Hóc Môn, TP.HCM", icon: MapPin },
];

const reasons = [
  {
    title: "Mảnh ghép chiến lược Tây Bắc",
    desc: "Nằm trên trục phát triển Tây Bắc TP.HCM, hưởng lợi từ dòng dân cư và hạ tầng mở rộng nhiều năm tới.",
  },
  {
    title: "Đón đầu hạ tầng lớn",
    desc: "Quốc lộ 22, Metro số 2 và cao tốc TP.HCM – Mộc Bài giúp tăng khả năng kết nối và tiềm năng tăng giá.",
  },
  {
    title: "Quỹ đất hiếm trong lòng TP",
    desc: "Đại đô thị 924ha hiếm hoi đủ lớn để hình thành hệ sinh thái sống – học – làm việc – giải trí hoàn chỉnh.",
  },
];

const productTypes = [
  {
    title: "Nhà phố",
    desc: "Linh hoạt để ở, cho thuê hoặc khai thác kinh doanh, phù hợp nhu cầu ở thực lẫn đầu tư dài hạn.",
  },
  {
    title: "Shophouse",
    desc: "Mặt tiền thương mại nội khu, tiềm năng tạo dòng tiền từ cho thuê và kinh doanh dịch vụ.",
  },
  {
    title: "Biệt thự song lập",
    desc: "Không gian sống riêng tư, cân bằng giữa tiêu chuẩn sống cao cấp và tài chính hợp lý hơn đơn lập.",
  },
  {
    title: "Biệt thự đơn lập",
    desc: "Phân khúc đẳng cấp với số lượng giới hạn, phù hợp nhóm khách hàng giữ tài sản lâu dài.",
  },
  {
    title: "Căn hộ",
    desc: "Mức vốn vào dễ tiếp cận hơn, thanh khoản tốt nhờ nhu cầu ở thật và thuê ở khu đô thị quy mô lớn.",
  },
];

const amenities = [
  "Trường liên cấp Vinschool",
  "Bệnh viện Vinmec",
  "Vincom Mega Mall",
  "Công viên trung tâm & hồ cảnh quan",
  "Tổ hợp thể thao & giải trí",
  "Khu vui chơi trẻ em",
];

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    phone: "",
    demand: "Mua đầu tư dài hạn",
  });

  const today = useMemo(() => new Date().toLocaleDateString("vi-VN"), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: gắn Google Sheet webhook khi anh Dương cung cấp
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsFormOpen(false);
      setFormState({
        fullName: "",
        phone: "",
        demand: "Mua đầu tư dài hạn",
      });
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-primary-bg text-surface-light pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-support-teal/30 bg-primary-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="https://vinhomeshocmonsr.vn/wp-content/uploads/2023/09/logo-vinhomes-hoc-mon.png"
              alt="Vinhomes Hóc Môn"
              width={120}
              height={38}
              className="h-8 w-auto"
            />
            <span className="hidden text-xs text-surface-warm md:block">
              Cập nhật: {today}
            </span>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="rounded-lg bg-primary-accent px-4 py-2 text-sm font-bold hover:bg-primary-accent-hover"
          >
            Nhận bảng giá
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-support-teal/30">
        <Image
          src="https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg"
          alt="Phối cảnh Vinhomes Saigon Park"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-primary-bg/75 to-primary-bg" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-4 py-14 md:py-24">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-accent/50 bg-primary-accent/25 px-3 py-1 text-xs font-semibold text-surface-warm">
            <Sparkles size={14} /> Quỹ hàng ưu tiên mở bán đợt đầu
          </div>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            GIỎ HÀNG NỘI BỘ VINHOMES SAIGON PARK HÓC MÔN
            <span className="block text-surface-warm">Nhận bảng giá & chính sách mới nhất trong 2 phút</span>
          </h1>

          <p className="max-w-3xl text-sm text-surface-light/90 md:text-lg">
            Tổng hợp nhanh: vị trí, quy hoạch 924ha, loại hình sản phẩm, phân tích đầu tư 2026–2030 và
            chính sách bán hàng giai đoạn 1.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-accent px-6 py-4 text-base font-bold shadow-lg shadow-primary-accent/30 transition hover:-translate-y-0.5 hover:bg-primary-accent-hover"
            >
              <Download size={18} /> Nhận bảng giá ngay
            </button>
            <a
              href="tel:0975442140"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-warm/40 bg-support-teal/35 px-6 py-4 text-base font-semibold transition hover:bg-support-teal/60"
            >
              <Phone size={18} /> Hotline 0975 442 140
            </a>
          </div>

          <div className="mt-2 grid max-w-3xl grid-cols-1 gap-2 text-xs text-surface-light/80 sm:grid-cols-3">
            <div className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-surface-warm" /> Bảo mật thông tin đăng ký
            </div>
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-surface-warm" /> Chuyên viên phản hồi nhanh
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Clock3 size={14} className="text-surface-warm" /> Cập nhật liên tục theo thị trường
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-4 py-12 text-primary-bg">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Thông tin nhanh dự án</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary-accent" />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-xl border border-surface-warm/60 bg-white p-4 text-center">
                  <Icon className="mx-auto mb-2 text-primary-accent" size={26} />
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-sm text-primary-bg/70">{item.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold md:text-3xl">Vị trí Vinhomes Saigon Park ở đâu?</h3>
          <p className="mt-4 text-surface-light/85">
            Dự án nằm tại xã Xuân Thới Sơn, Hóc Môn – cửa ngõ Tây Bắc TP.HCM, kết nối thuận tiện về
            trung tâm và các tỉnh Tây Ninh, Long An nhờ các trục giao thông chiến lược.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-surface-light/90 md:text-base">
            {[
              "Kề cận Quốc lộ 22 – trục kết nối nội đô và liên vùng.",
              "Hưởng lợi trực tiếp từ Metro số 2 và định hướng kéo dài tuyến.",
              "Gắn với cao tốc TP.HCM – Mộc Bài và các tuyến vành đai lớn.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <ChevronRight size={18} className="mt-0.5 text-surface-warm" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-support-teal/40">
          <Image
            src="https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg"
            alt="Vị trí dự án Vinhomes Hóc Môn"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-warm/10 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">3 lý do nên quan tâm giai đoạn đầu</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-support-teal/30 bg-primary-bg/50 p-5">
                <h4 className="text-lg font-semibold text-surface-warm">{reason.title}</h4>
                <p className="mt-2 text-sm text-surface-light/85">{reason.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">Tiện ích nội khu nổi bật</h3>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div key={amenity} className="rounded-lg border border-support-teal/30 bg-primary-bg/60 px-4 py-3 text-sm">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-surface-warm" /> {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-4 py-14 text-primary-bg">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">Loại hình sản phẩm</h3>
          <p className="mt-2 text-center text-sm text-primary-bg/70">Thông tin chi tiết và giỏ hàng đẹp sẽ gửi khi đăng ký.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productTypes.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-warm/70 bg-white p-5">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm text-primary-bg/70">{item.desc}</p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-accent hover:gap-2"
                >
                  Nhận thông tin chi tiết <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-support-teal/30 bg-support-teal/15 p-8 text-center">
          <h3 className="text-2xl font-bold">Nhận file phân tích đầu tư 2026–2030 & bảng giá đợt đầu</h3>
          <p className="mx-auto mt-3 max-w-2xl text-surface-light/85">
            Điền thông tin để nhận tài liệu mới nhất về dự án, quỹ căn đẹp và chính sách bán hàng ưu tiên.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-accent px-6 py-3 text-base font-bold hover:bg-primary-accent-hover"
          >
            <Download size={18} /> Đăng ký nhận ngay
          </button>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-50 flex w-full gap-3 border-t border-surface-warm/20 bg-primary-bg p-3 md:hidden">
        <a
          href="tel:0975442140"
          className="flex-1 rounded-lg bg-support-teal px-3 py-3 text-center text-sm font-bold"
        >
          Gọi ngay
        </a>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex-1 rounded-lg bg-primary-accent px-3 py-3 text-sm font-bold"
        >
          Nhận bảng giá
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-surface-light text-primary-bg">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-primary-bg/60 hover:bg-black/5"
            >
              <X size={20} />
            </button>

            <div className="rounded-t-2xl bg-primary-bg px-6 py-5 text-surface-light">
              <h4 className="text-xl font-bold">Đăng ký nhận bảng giá Vinhomes Saigon Park</h4>
              <p className="mt-1 text-sm text-surface-warm">Chuyên viên sẽ liên hệ và gửi thông tin phù hợp với nhu cầu của anh/chị.</p>
            </div>

            <div className="p-6">
              {isSuccess ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto text-green-600" size={46} />
                  <p className="mt-3 font-semibold">Đăng ký thành công!</p>
                  <p className="mt-1 text-sm text-primary-bg/70">Đội ngũ tư vấn sẽ liên hệ sớm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Họ và tên *</label>
                    <input
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState((p) => ({ ...p, fullName: e.target.value }))}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary-accent"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Số điện thoại *</label>
                    <input
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary-accent"
                      placeholder="09xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Nhu cầu quan tâm</label>
                    <select
                      value={formState.demand}
                      onChange={(e) => setFormState((p) => ({ ...p, demand: e.target.value }))}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-primary-accent"
                    >
                      <option>Mua đầu tư dài hạn</option>
                      <option>Mua để ở</option>
                      <option>Mua khai thác kinh doanh</option>
                      <option>Cần tư vấn thêm</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-lg bg-primary-accent py-3 font-bold text-surface-light hover:bg-primary-accent-hover disabled:opacity-70"
                  >
                    {isSubmitting ? "Đang gửi..." : "NHẬN BẢNG GIÁ NGAY"}
                  </button>

                  <p className="text-center text-xs text-primary-bg/60">
                    <ShieldCheck size={12} className="mr-1 inline" /> Thông tin được bảo mật tuyệt đối.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
