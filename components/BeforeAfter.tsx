export default function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CẦU CHUYỆN DA ĐẸP TỪ LÀM ĐẸP</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before/After Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1614859324317-a53c1ef45a98?w=400&q=80"
                  alt="Before"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
                  Before
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560264357-8d9202250f21?w=400&q=80"
                  alt="After"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">
              CAM KẾT CHẤT LƯỢNG, KẾT QUẢ VƯỢT TRỘI
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Da sáng mịn, căng bóng tức thì sau liệu trình</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Giảm nám, tàn nhang hiệu quả chỉ sau 3-5 buổi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Trẻ hóa làn da, xóa mờ nếp nhăn rõ rệt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>An toàn tuyệt đối, không gây kích ứng</span>
              </li>
            </ul>
            <button className="mt-8 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors">
              Đặt Lịch Tư Vấn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
