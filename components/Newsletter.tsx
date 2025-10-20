"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký nhận tin!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GIẢM GIÁ - NHẬN KHUYẾN MÃI TIN LIÊN
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Đăng ký email để nhận những ưu đãi hấp dẫn và tin tức mới nhất từ Hoàng Hồng Spa
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Đăng Ký Ngay
            </button>
          </form>

          <p className="mt-6 text-sm text-white/70">
            * Chúng tôi cam kết bảo mật thông tin của bạn
          </p>
        </div>
      </div>
    </section>
  );
}
