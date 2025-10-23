"use client";

export default function FloatingBookButton() {
  return (
    <a
      href="tel:8089121000"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-white rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 font-bold text-lg"
      aria-label="Book Now"
    >
      <span className="text-2xl">📞</span>
      <span>Book Now</span>
    </a>
  );
}
