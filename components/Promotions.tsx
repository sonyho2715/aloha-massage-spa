export default function Promotions() {
  const promotions = [
    {
      title: "ĐIỀU TRỊ MỤN CHUYÊN SÂU",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
      description: "Giảm giá 30% cho khách hàng mới",
      originalPrice: "2,000,000đ",
      salePrice: "1,400,000đ"
    },
    {
      title: "TRỊ NÁM TÀNG NHÂN HỮU HIỆU",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
      description: "Ưu đãi combo 5 buổi điều trị",
      originalPrice: "5,000,000đ",
      salePrice: "3,500,000đ"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CHƯƠNG TRÌNH KHUYẾN MẠI</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {promotions.map((promo, index) => (
            <div key={index} className="card">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  -30%
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {promo.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {promo.description}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-primary">
                  {promo.salePrice}
                </span>
                <span className="text-gray-400 line-through">
                  {promo.originalPrice}
                </span>
              </div>
              <button className="btn-primary w-full">
                Đặt Lịch Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
