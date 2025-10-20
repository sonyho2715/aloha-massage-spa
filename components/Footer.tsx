import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hoàng Hồng Spa</h3>
            <p className="text-white/80 mb-4">
              Trung tâm chăm sóc sắc đẹp hàng đầu với công nghệ hiện đại và dịch vụ chuyên nghiệp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>Y</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  Hình Ảnh
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-white/80">
              <li>Điều trị mụn chuyên sâu</li>
              <li>Trị nám, tàn nhang</li>
              <li>Triệt lông công nghệ cao</li>
              <li>Trẻ hóa da mặt</li>
              <li>Giảm mỡ, tan mỡ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+1 (808) 942-5000</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉</span>
                <span>info@alohamassagespahi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>8:00 - 22:00 (Hàng ngày)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Hoàng Hồng Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
