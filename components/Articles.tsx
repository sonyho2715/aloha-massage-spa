export default function Articles() {
  const articles = [
    {
      title: "Bí quyết chăm sóc da mặt đúng cách",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80",
      date: "20/10/2025",
      excerpt: "Hướng dẫn chi tiết các bước chăm sóc da mặt hàng ngày..."
    },
    {
      title: "Top 5 dịch vụ làm đẹp hot nhất 2025",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
      date: "18/10/2025",
      excerpt: "Khám phá xu hướng làm đẹp được yêu thích nhất..."
    },
    {
      title: "Triệt lông công nghệ Laser Diode",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
      date: "15/10/2025",
      excerpt: "Công nghệ triệt lông an toàn và hiệu quả cao..."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">BÀI VIẾT - TIN TỨC</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <a href="#" className="text-primary font-semibold hover:text-accent transition-colors">
                Đọc thêm →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
