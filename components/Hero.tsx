export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Chăm thượm may lần
              <span className="block text-accent">lần nhất Việt Nam</span>
            </h1>

            <p className="text-lg text-gray-600">
              Trải nghiệm dịch vụ chăm sóc sắc đẹp đẳng cấp với công nghệ hiện đại
              và đội ngũ chuyên viên giàu kinh nghiệm
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary text-lg px-8 py-3">
                Đặt Lịch Ngay
              </button>
              <button className="btn-outline text-lg px-8 py-3">
                Xem Dịch Vụ
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Khách Hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Hài Lòng</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                alt="Beautiful woman at spa"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-primary">Chứng Nhận</div>
                  <div className="text-sm text-gray-600">Tiêu Chuẩn Quốc Tế</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
