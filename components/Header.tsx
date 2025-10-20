"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-primary text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>CHÀO MỜI VÀO SẾP HOÀNG HỒNG SPA</div>
          <div className="flex gap-4">
            <span>📞 +1 (808) 942-5000</span>
            <span>✉ info@alohamassagespahi.com</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Hoàng Hồng Spa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              Giới Thiệu
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
              Dịch Vụ
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary transition-colors">
              Hình Ảnh
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Liên Hệ
            </Link>
            <button className="btn-primary">
              Đặt Lịch Ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary transition-colors">
              Giới Thiệu
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-primary transition-colors">
              Dịch Vụ
            </Link>
            <Link href="/gallery" className="block text-gray-700 hover:text-primary transition-colors">
              Hình Ảnh
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary transition-colors">
              Liên Hệ
            </Link>
            <button className="btn-primary w-full">
              Đặt Lịch Ngay
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
