"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PricingComparison() {
  const { t, language } = useLanguage();

  const services = [
    {
      name: language === 'en' ? "Foot Massage" : language === 'vi' ? "Massage Chân" : language === 'zh' ? "足部按摩" : "フットマッサージ",
      bestFor: language === 'en' ? "Travel fatigue, tired feet" : language === 'vi' ? "Mệt mỏi do đi lại, chân mỏi" : language === 'zh' ? "旅行疲劳，脚累" : "旅行疲労、足の疲れ",
      pressure: language === 'en' ? "Light-Medium" : language === 'vi' ? "Nhẹ-Trung bình" : language === 'zh' ? "轻-中" : "軽-中",
      duration30: "30 min",
      price30: "$35",
      duration60: "60 min",
      price60: "$55",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: false
    },
    {
      name: language === 'en' ? "Full Body Massage" : language === 'vi' ? "Massage Toàn Thân" : language === 'zh' ? "全身按摩" : "全身マッサージ",
      bestFor: language === 'en' ? "Full relaxation, stress relief" : language === 'vi' ? "Thư giãn hoàn toàn, giảm stress" : language === 'zh' ? "完全放松，缓解压力" : "完全なリラックス、ストレス解消",
      pressure: language === 'en' ? "Customizable" : language === 'vi' ? "Tùy chỉnh" : language === 'zh' ? "可定制" : "カスタマイズ可能",
      duration30: "60 min",
      price30: "$70",
      duration60: "90 min",
      price60: "$110",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: true
    },
    {
      name: language === 'en' ? "Targeted Relief" : language === 'vi' ? "Giảm Đau Mục Tiêu" : language === 'zh' ? "针对性缓解" : "集中的な緩和",
      bestFor: language === 'en' ? "Neck, shoulders, back pain" : language === 'vi' ? "Đau cổ, vai, lưng" : language === 'zh' ? "颈部、肩部、背部疼痛" : "首、肩、背中の痛み",
      pressure: language === 'en' ? "Medium-Firm" : language === 'vi' ? "Trung bình-Chắc" : language === 'zh' ? "中-硬" : "中-強",
      duration30: "30 min",
      price30: "$45",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: false
    },
    {
      name: language === 'en' ? "Deep Tissue" : language === 'vi' ? "Deep Tissue" : language === 'zh' ? "深层组织" : "ディープティッシュ",
      bestFor: language === 'en' ? "Chronic pain, stubborn knots" : language === 'vi' ? "Đau mãn tính, nút thắt cứng đầu" : language === 'zh' ? "慢性疼痛，顽固结节" : "慢性的な痛み、頑固な結び目",
      pressure: language === 'en' ? "Intense (⚠️ Strong)" : language === 'vi' ? "Mạnh (⚠️ Rất mạnh)" : language === 'zh' ? "强烈（⚠️强）" : "強烈（⚠️強い）",
      duration30: "60 min",
      price30: "$80",
      duration60: "90 min",
      price60: "$120",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: false
    },
    {
      name: language === 'en' ? "Combination" : language === 'vi' ? "Kết Hợp" : language === 'zh' ? "组合" : "コンビネーション",
      bestFor: language === 'en' ? "First-timers, full experience" : language === 'vi' ? "Lần đầu, trải nghiệm đầy đủ" : language === 'zh' ? "初次者，完整体验" : "初めての方、フル体験",
      pressure: language === 'en' ? "Medium" : language === 'vi' ? "Trung bình" : language === 'zh' ? "中" : "中",
      duration30: "60 min",
      price30: "$80",
      duration60: "90 min",
      price60: "$120",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: false
    },
    {
      name: language === 'en' ? "Couples Massage" : language === 'vi' ? "Massage Cặp Đôi" : language === 'zh' ? "情侣按摩" : "カップルマッサージ",
      bestFor: language === 'en' ? "Anniversaries, date night" : language === 'vi' ? "Kỷ niệm, hẹn hò" : language === 'zh' ? "周年纪念，约会之夜" : "記念日、デートナイト",
      pressure: language === 'en' ? "Customizable" : language === 'vi' ? "Tùy chỉnh" : language === 'zh' ? "可定制" : "カスタマイズ可能",
      duration30: "60 min",
      price30: "$140",
      duration60: "90 min",
      price60: "$220",
      therapist: language === 'en' ? "Any" : language === 'vi' ? "Bất kỳ" : language === 'zh' ? "任何" : "誰でも",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {language === 'en' ? "Compare Our Services" : language === 'vi' ? "So Sánh Dịch Vụ" : language === 'zh' ? "比较我们的服务" : "サービスを比較"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? "Find the perfect massage for your needs" : language === 'vi' ? "Tìm massage hoàn hảo cho nhu cầu của bạn" : language === 'zh' ? "找到适合您需求的完美按摩" : "あなたのニーズに最適なマッサージを見つけてください"}
            </p>
          </div>

          {/* Mobile View - Cards */}
          <div className="md:hidden space-y-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 shadow-lg ${service.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {service.popular && (
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                    {language === 'en' ? "MOST POPULAR" : language === 'vi' ? "PHỔ BIẾN NHẤT" : language === 'zh' ? "最受欢迎" : "最も人気"}
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-4">{service.name}</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">{language === 'en' ? "Best For:" : language === 'vi' ? "Tốt nhất cho:" : language === 'zh' ? "最适合：" : "最適："}</span> {service.bestFor}</div>
                  <div><span className="font-semibold">{language === 'en' ? "Pressure:" : language === 'vi' ? "Áp lực:" : language === 'zh' ? "压力：" : "圧力："}</span> {service.pressure}</div>
                  <div><span className="font-semibold">{language === 'en' ? "Therapist:" : language === 'vi' ? "Trị liệu:" : language === 'zh' ? "治疗师：" : "セラピスト："}</span> {service.therapist}</div>
                  <div className="pt-3 border-t mt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span>{service.duration30}</span>
                      <span className="text-lg font-bold text-primary">{service.price30}</span>
                    </div>
                    {service.duration60 && (
                      <div className="flex justify-between items-center">
                        <span>{service.duration60}</span>
                        <span className="text-lg font-bold text-primary">{service.price60}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">{language === 'en' ? "Service" : language === 'vi' ? "Dịch vụ" : language === 'zh' ? "服务" : "サービス"}</th>
                  <th className="px-6 py-4 text-left font-bold">{language === 'en' ? "Best For" : language === 'vi' ? "Tốt nhất cho" : language === 'zh' ? "最适合" : "最適"}</th>
                  <th className="px-6 py-4 text-left font-bold">{language === 'en' ? "Pressure" : language === 'vi' ? "Áp lực" : language === 'zh' ? "压力" : "圧力"}</th>
                  <th className="px-6 py-4 text-center font-bold">30-60 min</th>
                  <th className="px-6 py-4 text-center font-bold">60-90 min</th>
                  <th className="px-6 py-4 text-left font-bold">{language === 'en' ? "Therapist" : language === 'vi' ? "Trị liệu" : language === 'zh' ? "治疗师" : "セラピスト"}</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${service.popular ? 'bg-accent/5' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{service.name}</span>
                        {service.popular && (
                          <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-bold">
                            {language === 'en' ? "HOT" : language === 'vi' ? "HOT" : language === 'zh' ? "热门" : "人気"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{service.bestFor}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.pressure.includes('Intense') || service.pressure.includes('Mạnh') ? 'bg-red-100 text-red-700' :
                        service.pressure.includes('Customizable') || service.pressure.includes('Tùy chỉnh') ? 'bg-purple-100 text-purple-700' :
                        service.pressure.includes('Medium') || service.pressure.includes('Trung bình') ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {service.pressure}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-lg text-primary">{service.price30}</div>
                      <div className="text-xs text-gray-500">{service.duration30}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {service.price60 ? (
                        <>
                          <div className="font-bold text-lg text-primary">{service.price60}</div>
                          <div className="text-xs text-gray-500">{service.duration60}</div>
                        </>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{service.therapist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-600">
              {language === 'en' ? "⭐ All services include organic oils and personalized pressure" :
               language === 'vi' ? "⭐ Tất cả dịch vụ bao gồm dầu hữu cơ và áp lực cá nhân hóa" :
               language === 'zh' ? "⭐ 所有服务包括有机油和个性化压力" :
               "⭐ すべてのサービスにオーガニックオイルとパーソナライズされた圧力が含まれます"}
            </p>
            <a
              href="tel:8089425000"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              📞 {language === 'en' ? "Call to Book" : language === 'vi' ? "Gọi để Đặt" : language === 'zh' ? "致电预订" : "予約する"} (808) 942-5000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
