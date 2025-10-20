"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Thị Hà Nhi",
      role: "Khách hàng thân thiết",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content: "Chất lượng dịch vụ tại đây rất tốt, nhân viên tư vấn nhiệt tình. Da mình đã cải thiện rõ rệt sau 3 buổi điều trị. Rất hài lòng!",
      rating: 5
    },
    {
      name: "Trần Minh Anh",
      role: "Khách hàng VIP",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      content: "Mình đã thử nhiều spa khác nhưng chỉ ở đây mình mới thấy hiệu quả thực sự. Công nghệ hiện đại, không gian sang trọng.",
      rating: 5
    },
    {
      name: "Lê Thị Mai",
      role: "Khách hàng",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      content: "Giá cả hợp lý, chất lượng dịch vụ vượt mong đợi. Đội ngũ chuyên viên rất chuyên nghiệp và tận tâm. Sẽ quay lại!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">NHẬN XÉT CỦA KHÁCH HÀNG</h2>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <div className="font-bold text-primary text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
