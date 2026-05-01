"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  Landmark,
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

const overview = [
  { label: "Tên dự án", value: "Vinhomes Saigon Park (thị trường thường gọi Vinhomes Hóc Môn)" },
  { label: "Vị trí", value: "Xã Xuân Thới Sơn, khu vực Hóc Môn, TP.HCM" },
  { label: "Quy mô", value: "Khoảng 924ha" },
  { label: "Mật độ xây dựng", value: "Khoảng 25%" },
  { label: "Loại hình", value: "Căn hộ, nhà phố, shophouse, biệt thự song lập & đơn lập" },
  { label: "Tiến độ thị trường", value: "Đang trong giai đoạn cập nhật thông tin mở bán" },
  { label: "Sở hữu", value: "Tham khảo: lâu dài với khách Việt, theo quy định hiện hành với khách nước ngoài" },
  { label: "Tệp khách hàng", value: "An cư dài hạn + đầu tư trung và dài hạn" },
];

const quickStats = [
  { label: "Quy mô", value: "924ha", icon: Building2 },
  { label: "Mật độ xây dựng", value: "25%", icon: Leaf },
  { label: "Dự kiến triển khai", value: "2026", icon: Clock3 },
  { label: "Vị trí", value: "Tây Bắc TP.HCM", icon: MapPin },
];

const pricingRows = [
  ["Căn hộ Studio", "30–33 m²", "Từ ~1.6 tỷ"],
  ["Căn hộ 1PN", "45–55 m²", "Từ ~2.3 tỷ"],
  ["Căn hộ 2PN", "65–80 m²", "Từ ~3.5–5.0 tỷ"],
  ["Căn hộ 3PN", "90–120 m²", "Từ ~4.5–7.0 tỷ"],
  ["Nhà phố liền kề", "60–100 m² đất", "Từ ~7–12 tỷ"],
  ["Shophouse thương mại", "100–150 m² đất", "Từ ~12–16 tỷ"],
  ["Biệt thự song lập", "120–200 m² đất", "Từ ~16–25 tỷ"],
  ["Biệt thự đơn lập", "200–400 m² đất", "Từ ~20–50 tỷ"],
];

const investmentReasons = [
  {
    title: "Cửa ngõ Tây Bắc + trục Quốc lộ 22",
    desc: "Vị trí bám trục giao thông liên vùng giúp gia tăng nhu cầu ở thực, khai thác kinh doanh và cho thuê trong dài hạn.",
  },
  {
    title: "Hưởng lợi hạ tầng lớn theo chu kỳ 3–5 năm",
    desc: "Metro số 2, vành đai, cao tốc TP.HCM – Mộc Bài là nhóm yếu tố có thể kéo mặt bằng giá khu Tây Bắc đi lên khi hoàn thiện.",
  },
  {
    title: "Quỹ đất 924ha hiếm trong TP.HCM",
    desc: "Quy mô lớn cho phép hình thành hệ tiện ích khép kín, không chỉ bán nhà đơn lẻ mà bán cả chất lượng sống và hệ sinh thái đô thị.",
  },
  {
    title: "Mô hình đại đô thị Vinhomes đã có tiền lệ",
    desc: "Các đại đô thị Vinhomes trước đó cho thấy lợi thế khi mua sớm ở giai đoạn đầu chu kỳ, đặc biệt với nhà đầu tư giữ trung hạn.",
  },
];

const livingReasons = [
  "Hệ sinh thái all-in-one: trường học, y tế, mua sắm, công viên và tiện ích nội khu.",
  "Mật độ xây dựng thấp, ưu tiên mảng xanh và không gian sinh hoạt cho gia đình.",
  "Kết nối đi làm phù hợp với khu vực Tân Bình, Quận 12, Tân Phú, trung tâm theo trục chính.",
];

const productCards = [
  {
    title: "Nhà phố",
    desc: "Phù hợp vừa ở vừa khai thác cho thuê, cân bằng giữa thanh khoản và tiềm năng tăng giá.",
  },
  {
    title: "Shophouse",
    desc: "Ưu tiên trục thương mại nội khu, phù hợp nhóm khách hàng tập trung dòng tiền kinh doanh.",
  },
  {
    title: "Biệt thự song lập",
    desc: "Nâng cấp không gian sống cho gia đình có tài chính tốt, tối ưu hơn đơn lập về ngân sách vào ban đầu.",
  },
  {
    title: "Biệt thự đơn lập",
    desc: "Sản phẩm giới hạn, định vị đẳng cấp và thường được nhóm khách giữ tài sản dài hạn ưu tiên.",
  },
  {
    title: "Căn hộ",
    desc: "Vốn vào thấp hơn thấp tầng, phù hợp chiến lược cho thuê, tích lũy tài sản và ở thật.",
  },
];

const faqs = [
  {
    q: "Giá bán chính thức đã công bố chưa?",
    a: "Hiện thị trường vẫn đang cập nhật theo từng giai đoạn. Bảng trong trang là mức tham khảo tổng hợp, chưa thay thế thông báo chính thức.",
  },
  {
    q: "Nên vào giai đoạn nào để tối ưu biên an toàn?",
    a: "Thực tế nhiều nhà đầu tư ưu tiên giai đoạn đầu để có chính sách tốt hơn. Tuy nhiên vẫn cần so sánh pháp lý, tiến độ và dòng tiền cá nhân.",
  },
  {
    q: "Dự án phù hợp mua ở hay mua đầu tư?",
    a: "Có thể phù hợp cả hai tùy loại hình. Căn hộ/nhà phố thường linh hoạt hơn, còn biệt thự thiên về tài sản dài hạn.",
  },
  {
    q: "Form đăng ký sẽ nhận gì?",
    a: "Khách sẽ nhận bản cập nhật bảng giá, chính sách và tài liệu phân tích tổng hợp theo tệp nhu cầu đã chọn.",
  },
  {
    q: "Khi nào có thể nhận giỏ hàng chi tiết?",
    a: "Ngay khi có cập nhật mới từ đội ngũ tư vấn thị trường, hệ thống sẽ gửi theo thông tin khách đã đăng ký.",
  },
  {
    q: "Thông tin cá nhân có được bảo mật không?",
    a: "Có. Dữ liệu lead chỉ dùng cho mục đích tư vấn dự án và không chia sẻ ra bên ngoài.",
  },
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
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setIsFormOpen(false);
      setFormState({ fullName: "", phone: "", demand: "Mua đầu tư dài hạn" });
    }, 2200);
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
            <span className="hidden text-xs text-surface-warm md:block">Cập nhật: {today}</span>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary-bg/75 to-primary-bg" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-4 py-14 md:py-24">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-accent/50 bg-primary-accent/20 px-3 py-1 text-xs font-semibold text-surface-warm">
            <Sparkles size={14} /> Giỏ hàng nội bộ & chính sách giai đoạn đầu
          </div>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            BẢNG GIÁ DỰ KIẾN VINHOMES SAIGON PARK HÓC MÔN
            <span className="block text-surface-warm">Nhận file phân tích đầu tư 2026–2030 trong 2 phút</span>
          </h1>

          <p className="max-w-3xl text-sm text-surface-light/90 md:text-lg">
            Tổng hợp nhanh: thông số dự án, khung giá theo loại hình, phân tích vị trí – hạ tầng – tiềm năng,
            và checklist chọn sản phẩm phù hợp mục tiêu ở / đầu tư.
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
              <CheckCircle2 size={14} className="text-surface-warm" /> Cập nhật liên tục theo thị trường
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Landmark size={14} className="text-surface-warm" /> Bám dữ liệu từ nguồn tham chiếu
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-4 py-12 text-primary-bg">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Thông tin pháp lý & tổng quan dự án</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary-accent" />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {overview.map((item) => (
              <div key={item.label} className="rounded-lg border border-surface-warm/80 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-accent">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-primary-bg/90">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-primary-bg/65">
            Lưu ý: Một số thông tin đang ở mức tham khảo thị trường và có thể điều chỉnh theo công bố chính thức từng thời điểm.
          </p>
        </div>
      </section>

      <section className="bg-primary-bg px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Thông số nhanh</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {quickStats.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-xl border border-support-teal/40 bg-support-teal/10 p-4 text-center">
                  <Icon className="mx-auto mb-2 text-surface-warm" size={26} />
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-sm text-surface-light/75">{item.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Bảng giá dự kiến theo loại hình</h3>
              <p className="mt-2 text-sm text-surface-light/80">Dùng để so sánh nhanh ngân sách trước khi chốt tư vấn 1-1.</p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="hidden rounded-lg bg-primary-accent px-4 py-2 text-sm font-bold hover:bg-primary-accent-hover md:block"
            >
              Nhận bảng giá chi tiết
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-support-teal/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-support-teal/25 text-surface-warm">
                <tr>
                  <th className="px-4 py-3">Loại sản phẩm</th>
                  <th className="px-4 py-3">Diện tích tham khảo</th>
                  <th className="px-4 py-3">Giá dự kiến</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row[0]} className="border-t border-support-teal/25">
                    <td className="px-4 py-3 font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-surface-light/85">{row[1]}</td>
                    <td className="px-4 py-3 text-surface-warm">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-surface-light/65">
            *Giá trên là mức tham khảo tổng hợp từ nguồn thị trường, chưa thay thế thông báo giá chính thức từ chủ đầu tư/đơn vị phân phối.
          </p>
        </div>
      </section>

      <section className="bg-surface-warm/10 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">4 luận điểm đầu tư đáng chú ý</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {investmentReasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-support-teal/30 bg-primary-bg/50 p-5">
                <h4 className="text-lg font-semibold text-surface-warm">{reason.title}</h4>
                <p className="mt-2 text-sm text-surface-light/85">{reason.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold md:text-3xl">3 lý do phù hợp mua ở dài hạn</h3>
          <ul className="mt-5 space-y-4 text-sm text-surface-light/90 md:text-base">
            {livingReasons.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <ChevronRight size={18} className="mt-0.5 text-surface-warm" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-accent px-5 py-3 text-sm font-bold hover:bg-primary-accent-hover"
          >
            Nhận tư vấn theo nhu cầu ở thật <ChevronRight size={16} />
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-support-teal/40">
          <Image
            src="https://vinhomeshocmonsr.vn/wp-content/uploads/2025/11/phoi-canh-vinhomes-hoc-mon.jpg"
            alt="Khu đô thị Vinhomes Saigon Park"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-light px-4 py-14 text-primary-bg">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">Loại hình sản phẩm phù hợp từng mục tiêu</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productCards.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-warm/70 bg-white p-5">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm text-primary-bg/70">{item.desc}</p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-accent hover:gap-2"
                >
                  Nhận giỏ hàng tham khảo <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-2xl font-bold md:text-3xl">FAQ – câu hỏi thường gặp</h3>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg border border-support-teal/30 bg-support-teal/10 p-4">
                <h4 className="font-semibold text-surface-warm">{faq.q}</h4>
                <p className="mt-1 text-sm text-surface-light/85">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-support-teal/30 bg-support-teal/15 p-8 text-center">
          <h3 className="text-2xl font-bold">Nhận bảng giá + file phân tích + chính sách mới nhất</h3>
          <p className="mx-auto mt-3 max-w-2xl text-surface-light/85">
            Đăng ký trong 30 giây để nhận tài liệu đầy đủ theo mục tiêu ở thực hoặc đầu tư của anh/chị.
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
        <a href="tel:0975442140" className="flex-1 rounded-lg bg-support-teal px-3 py-3 text-center text-sm font-bold">
          Gọi ngay
        </a>
        <button onClick={() => setIsFormOpen(true)} className="flex-1 rounded-lg bg-primary-accent px-3 py-3 text-sm font-bold">
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
