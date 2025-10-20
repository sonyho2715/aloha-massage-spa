export default function Videos() {
  const videos = [
    {
      title: "Video trải nghiệm dịch vụ Spa",
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
      views: "10K"
    },
    {
      title: "Quy trình điều trị mụn chuyên sâu",
      thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
      views: "8K"
    },
    {
      title: "Công nghệ trị nám hiện đại",
      thumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
      views: "12K"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">VIDEO TRẢI NGHIỆM DỊCH VỤ</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.views} lượt xem
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
