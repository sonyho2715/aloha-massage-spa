export default function Benefits() {
  const benefits = [
    {
      icon: "👥",
      title: "Đội ngũ chuyên gia",
      description: "Đội ngũ chuyên viên giàu kinh nghiệm, tận tâm"
    },
    {
      icon: "✓",
      title: "Thương hiệu uy tín",
      description: "Thương hiệu được hàng ngàn khách hàng tin tưởng"
    },
    {
      icon: "🎯",
      title: "Máy móc hiện đại",
      description: "Công nghệ và thiết bị hiện đại nhất"
    },
    {
      icon: "💼",
      title: "Phục vụ chuyên nghiệp",
      description: "Dịch vụ chăm sóc chu đáo và chuyên nghiệp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">LỢI ÍCH VỀ HOÀNG HỒNG SPA</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
