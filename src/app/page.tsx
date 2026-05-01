"use client";

import { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Leaf, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  Clock, 
  Download,
  CheckCircle2,
  X
} from 'lucide-react';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fake submit handler for now, will connect to Google Sheets later
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-primary-bg font-sans pb-20 md:pb-0">
      {/* 1. HERO CLICKBAIT SECTION */}
      <section className="relative w-full bg-primary-bg pt-12 pb-16 px-4">
        {/* Background Overlay (could be replaced with a real image later) */}
        <div className="absolute inset-0 bg-gradient-to-b from-support-teal/40 to-primary-bg z-0 opacity-50 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-10">
          <div className="inline-block bg-primary-accent text-surface-light px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider animate-pulse border border-primary-accent-hover shadow-[0_0_10px_rgba(178,34,52,0.5)]">
            🔥 Cập nhật quỹ căn VIP mới nhất
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-surface-light leading-tight mb-4 tracking-tight drop-shadow-md">
            SUẤT NỘI BỘ VINHOMES HÓC MÔN <br className="hidden md:block"/> 
            <span className="text-surface-warm">CHIẾT KHẤU TRỰC TIẾP TỪ CĐT</span>
          </h1>
          
          <p className="text-base md:text-xl text-surface-light/90 mb-8 max-w-2xl mx-auto">
            Tổng hợp nhanh vị trí, mặt bằng, quỹ căn liên kề/biệt thự và chính sách bán hàng dự án Vinhomes Saigon Park. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto bg-primary-accent hover:bg-primary-accent-hover text-surface-light font-bold text-lg py-4 px-8 rounded-lg shadow-lg shadow-primary-accent/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Nhận Bảng Giá Đợt 1
            </button>
            <a 
              href="tel:0900000000" 
              className="w-full sm:w-auto bg-support-teal hover:bg-support-teal/80 text-surface-light font-semibold text-lg py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Gọi Tư Vấn Ngay
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-surface-warm font-medium opacity-80">
            <div className="flex items-center gap-1"><ShieldCheck size={14} /> Bảo mật thông tin</div>
            <div className="flex items-center gap-1"><Clock size={14} /> Cập nhật 24/7</div>
            <div className="flex items-center gap-1"><CheckCircle2 size={14} /> Trực tiếp Đại lý F1</div>
          </div>
        </div>
      </section>

      {/* 2. SNAPSHOT DỰ ÁN */}
      <section className="py-12 bg-surface-light text-primary-bg px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">TỔNG QUAN DỰ ÁN</h2>
            <div className="w-16 h-1 bg-primary-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Quy mô", value: "924ha", icon: <Building2 className="mb-2 text-primary-accent" size={32} /> },
              { label: "Mật độ xây dựng", value: "25%", icon: <Leaf className="mb-2 text-primary-accent" size={32} /> },
              { label: "Vị trí", value: "Hóc Môn, HCM", icon: <MapPin className="mb-2 text-primary-accent" size={32} /> },
              { label: "Dự kiến mở bán", value: "Quý 2/2026", icon: <Clock className="mb-2 text-primary-accent" size={32} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-surface-warm/30 text-center flex flex-col items-center">
                {stat.icon}
                <div className="text-xl font-bold text-primary-bg">{stat.value}</div>
                <div className="text-sm text-primary-bg/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VỊ TRÍ CHIẾN LƯỢC */}
      <section className="py-16 px-4 bg-primary-bg border-t border-support-teal/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-surface-light">
              VỊ TRÍ "CỬA NGÕ TÂY BẮC" <br/>
              <span className="text-surface-warm">ĐÓN ĐẦU QUY HOẠCH</span>
            </h2>
            <p className="text-surface-light/80 mb-6">
              Nằm tại Tân Thới Nhì, Hóc Môn, dự án sở hữu lợi thế lớn từ mạng lưới hạ tầng trọng điểm đang được Thành phố đẩy mạnh:
            </p>
            <ul className="space-y-4 text-surface-light/90">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-accent/20 p-1 rounded-full"><ChevronRight size={16} className="text-primary-accent" /></div>
                <div><strong>Quốc lộ 22:</strong> Trục xương sống kết nối nội đô TP.HCM với Tây Ninh, cửa ngõ giao thương nhộn nhịp.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-accent/20 p-1 rounded-full"><ChevronRight size={16} className="text-primary-accent" /></div>
                <div><strong>Metro số 2:</strong> Tuyến Tham Lương - Bến Thành khi vận hành sẽ kéo mặt bằng giá khu vực tăng mạnh.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-accent/20 p-1 rounded-full"><ChevronRight size={16} className="text-primary-accent" /></div>
                <div><strong>Cao tốc Mộc Bài:</strong> Rút ngắn thời gian di chuyển, nâng vị thế khu Tây Bắc thành cửa ngõ vùng kinh tế.</div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-support-teal/20 rounded-2xl p-4 border border-support-teal/50">
            {/* Placeholder for Map Image */}
            <div className="aspect-[4/3] bg-primary-bg/50 rounded-xl flex items-center justify-center text-surface-warm">
              [Bản đồ vị trí sẽ được chèn vào đây]
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOẠI HÌNH SẢN PHẨM (CARD CLICKBAIT) */}
      <section className="py-16 bg-surface-warm/10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-surface-light">QUỸ HÀNG SẮP MỞ BÁN</h2>
            <p className="text-surface-light/70">Đăng ký ngay để nhận layout và giá dự kiến từng phân khu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Nhà Phố / Shophouse", desc: "Sản phẩm lõi, kinh doanh sầm uất, tiềm năng tăng giá mạnh nhất." },
              { title: "Biệt Thự Song Lập", desc: "Không gian riêng tư, giá thành hợp lý, phù hợp gia đình nhiều thế hệ." },
              { title: "Biệt Thự Đơn Lập", desc: "Khẳng định đẳng cấp, số lượng giới hạn, thanh khoản cao." }
            ].map((item, i) => (
              <div key={i} className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform">
                <div className="h-40 bg-support-teal/20 flex items-center justify-center text-primary-bg text-sm font-medium border-b border-support-teal/10">
                  [Hình phối cảnh {item.title}]
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-bg mb-2">{item.title}</h3>
                  <p className="text-primary-bg/70 text-sm mb-4">{item.desc}</p>
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="text-primary-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Xem chi tiết <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STICKY BOTTOM BAR CHO MOBILE */}
      <div className="fixed bottom-0 left-0 w-full bg-primary-bg border-t border-surface-warm/20 p-3 flex gap-3 z-40 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <a 
          href="tel:0900000000" 
          className="flex-1 bg-support-teal text-surface-light font-bold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Gọi Ngay
        </a>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="flex-1 bg-primary-accent text-surface-light font-bold py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse"
        >
          <Download size={18} />
          Bảng Giá
        </button>
      </div>

      {/* 6. POPUP FORM CHỐT LEAD */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface-light rounded-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-primary-bg/50 hover:text-primary-bg transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="bg-primary-bg p-6 text-center">
              <h3 className="text-xl font-bold text-surface-light mb-1">Đăng Ký Nhận Thông Tin</h3>
              <p className="text-surface-warm text-sm">Chuyên viên tư vấn F1 sẽ liên hệ gửi file báo giá sau 5 phút.</p>
            </div>
            
            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="mx-auto text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-primary-bg mb-2">Đăng ký thành công!</h4>
                  <p className="text-primary-bg/70">Chúng tôi đã nhận được yêu cầu. Chuyên viên sẽ sớm liên hệ với quý khách.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-bg mb-1">Họ và tên *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nhập họ tên của bạn" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent text-primary-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-bg mb-1">Số điện thoại *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Nhập số điện thoại" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent text-primary-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-bg mb-1">Nhu cầu quan tâm</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent text-primary-bg bg-white">
                      <option>Mua để ở</option>
                      <option>Mua đầu tư dài hạn</option>
                      <option>Mua kinh doanh / cho thuê</option>
                      <option>Chưa xác định - Cần tư vấn</option>
                    </select>
                  </div>
                  
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-primary-accent hover:bg-primary-accent-hover text-surface-light font-bold py-4 rounded-lg mt-4 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-surface-light border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "NHẬN BẢNG GIÁ NGAY"
                    )}
                  </button>
                  <p className="text-xs text-center text-primary-bg/60 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck size={12} /> Thông tin được bảo mật hoàn toàn
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
