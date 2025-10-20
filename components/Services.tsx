export default function Services() {
  const services = [
    {
      title: "THỰC HIỆN HOÀNG HỒNG CÔNG NGHỆ HIỆN ĐẠI",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
      description: "Ứng dụng công nghệ tiên tiến nhất trong lĩnh vực chăm sóc sắc đẹp"
    },
    {
      title: "TRỊ LIỆU DA MẶT CHUYÊN CÔNG NGHỆ HOÀNG HỒNG CHUẨN",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      description: "Liệu trình điều trị da chuyên sâu với công nghệ chuẩn Hàn Quốc"
    },
    {
      title: "TRIỆT LÔNG VÔ ƯU DI, GIẢM MỠ, KHÔNG LÀM TỔN",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
      description: "Công nghệ triệt lông hiện đại, an toàn và hiệu quả"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="section-title">CÔNG NGHỆ HIỆN ĐẠI TẠI HOÀNG HỒNG SPA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hoàng Hồng Spa tự hào sở hữu hệ thống công nghệ làm đẹp hiện đại nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Hot
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <button className="btn-outline w-full">
                Xem Thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
