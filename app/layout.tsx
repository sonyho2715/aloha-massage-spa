import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aloha Massage Spa - Chăm sóc sắc đẹp toàn diện",
  description: "Aloha Massage Spa - Dịch vụ chăm sóc sắc đẹp và thư giãn hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
