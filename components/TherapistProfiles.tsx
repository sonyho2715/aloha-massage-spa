"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TherapistProfiles() {
  const { t, language } = useLanguage();

  const therapists = [
    {
      name: "Angela Yang",
      title: language === 'en' ? "Owner & Master Therapist" :
             language === 'vi' ? "Chủ Sở Hữu & Chuyên Gia Trị Liệu" :
             language === 'zh' ? "业主和按摩治疗师" : "オーナー＆マスターセラピスト",
      license: "Licensed #MAT-14098",
      specialty: language === 'en' ? "Swedish, Lomi Lomi, Customer Care Expert" :
                 language === 'vi' ? "Swedish, Lomi Lomi, Chuyên Gia Chăm Sóc Khách Hàng" :
                 language === 'zh' ? "瑞典式、Lomi Lomi、客户服务专家" : "スウェーデン式、ロミロミ、カスタマーケアのエキスパート",
      description: language === 'en' ? "Angela brings the heart of aloha to every session. Known for her warm welcome and genuine care, she treats every guest like family. Her expert hands and wise advice create a truly healing experience." :
                   language === 'vi' ? "Angela mang trái tim aloha đến mỗi buổi trị liệu. Được biết đến với sự chào đón ấm áp và quan tâm chân thành, cô đối xử với mọi khách như gia đình. Đôi bàn tay chuyên nghiệp và lời khuyên khôn ngoan của cô tạo nên trải nghiệm chữa lành thực sự." :
                   language === 'zh' ? "Angela为每次疗程带来阿罗哈精神。以热情欢迎和真诚关怀而闻名，她像对待家人一样对待每位客人。她专业的双手和明智的建议创造了真正的治愈体验。" : "Angelaは毎回のセッションにアロハの心を持ち込みます。温かい歓迎と誠実なケアで知られ、すべてのゲストを家族のように扱います。彼女の熟練した手と賢明なアドバイスは、真の癒しの体験を生み出します。",
      image: ""
    },
    {
      name: "Tony",
      title: language === 'en' ? "Licensed Massage Therapist" :
             language === 'vi' ? "Nhà Trị Liệu Massage Có Giấy Phép" :
             language === 'zh' ? "持证按摩治疗师" : "有資格マッサージセラピスト",
      license: "Licensed Professional",
      specialty: language === 'en' ? "Therapeutic Massage, Sports Recovery" :
                 language === 'vi' ? "Massage Trị Liệu, Phục Hồi Thể Thao" :
                 language === 'zh' ? "治疗性按摩、运动康复" : "治療マッサージ、スポーツリカバリー",
      description: language === 'en' ? "Tony is attentive and professional, taking time to understand your specific needs. Whether you're recovering from a workout or dealing with chronic tension, he tailors each session to bring you relief and relaxation." :
                   language === 'vi' ? "Tony chu đáo và chuyên nghiệp, dành thời gian để hiểu nhu cầu cụ thể của bạn. Cho dù bạn đang phục hồi sau tập luyện hay đối phó với căng thẳng mãn tính, anh ấy tùy chỉnh mỗi buổi để mang lại sự giảm nhẹ và thư giãn cho bạn." :
                   language === 'zh' ? "Tony细心且专业，花时间了解您的具体需求。无论您是在锻炼后恢复还是处理慢性紧张，他都会量身定制每次疗程，为您带来缓解和放松。" : "Tonyは細心で専門的で、お客様の具体的なニーズを理解するために時間をかけます。ワークアウト後の回復中であっても、慢性的な緊張に対処している場合でも、彼は各セッションをカスタマイズして、安心とリラクゼーションをもたらします。",
      image: ""
    },
    {
      name: "Andy",
      title: language === 'en' ? "Deep Tissue Specialist" :
             language === 'vi' ? "Chuyên Gia Deep Tissue" :
             language === 'zh' ? "深层组织专家" : "ディープティッシュのスペシャリスト",
      license: "Licensed Professional",
      specialty: language === 'en' ? "Deep Tissue, Trigger Point Therapy" :
                 language === 'vi' ? "Deep Tissue, Trị Liệu Điểm Kích Hoạt" :
                 language === 'zh' ? "深层组织、触发点治疗" : "ディープティッシュ、トリガーポイント療法",
      description: language === 'en' ? "Andy specializes in intensive deep tissue work for those who need serious pressure. His technique is strong and effective—perfect for stubborn knots and chronic pain. Note: His pressure can be intense, so please communicate your comfort level during your session." :
                   language === 'vi' ? "Andy chuyên về công việc mô sâu chuyên sâu cho những người cần áp lực nghiêm trọng. Kỹ thuật của anh ấy mạnh mẽ và hiệu quả—hoàn hảo cho các nút thắt cứng đầu và đau mãn tính. Lưu ý: Áp lực của anh ấy có thể mạnh, vì vậy hãy giao tiếp mức độ thoải mái của bạn trong buổi trị liệu." :
                   language === 'zh' ? "Andy专门从事强力深层组织工作，适合需要严重压力的人。他的技术强大而有效——非常适合顽固的结节和慢性疼痛。注意：他的压力可能很大，因此请在疗程期间告知您的舒适度。" : "Andyは、真剣な圧力が必要な人のために集中的なディープティッシュワークを専門としています。彼のテクニックは強力で効果的で、頑固な結び目や慢性的な痛みに最適です。注意：彼の圧力は激しい場合があるので、セッション中に快適なレベルを伝えてください。",
      image: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? "Meet Your Healing Hands" :
             language === 'vi' ? "Gặp Gỡ Đôi Bàn Tay Chữa Lành Của Bạn" :
             language === 'zh' ? "认识您的治愈之手" : "あなたの癒しの手に会う"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? "Meet our featured therapists. We have a team of professional licensed therapists with decades of combined experience and genuine aloha spirit." :
             language === 'vi' ? "Gặp gỡ các nhà trị liệu nổi bật của chúng tôi. Chúng tôi có một đội ngũ nhà trị liệu chuyên nghiệp có giấy phép với nhiều thập kỷ kinh nghiệm kết hợp và tinh thần aloha chân thực." :
             language === 'zh' ? "认识我们的特色治疗师。我们拥有一支专业的持证治疗师团队，拥有数十年的综合经验和真正的阿罗哈精神。" : "私たちの注目のセラピストに会いましょう。私たちは、数十年にわたる総合経験と本物のアロハスピリットを持つプロの有資格セラピストのチームを持っています。"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {therapists.map((therapist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {therapist.image ? (
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-48 h-48 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                    <div className="text-6xl text-primary font-bold">
                      {therapist.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {therapist.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-1">
                  {therapist.title}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {therapist.license}
                </p>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-primary mb-1">
                    {language === 'en' ? "Specialty:" :
                     language === 'vi' ? "Chuyên môn:" :
                     language === 'zh' ? "专长：" : "専門："}
                  </p>
                  <p className="text-sm text-gray-700">
                    {therapist.specialty}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {therapist.description}
                </p>

                <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-colors">
                  {language === 'en' ? `Request ${therapist.name}` :
                   language === 'vi' ? `Yêu Cầu ${therapist.name}` :
                   language === 'zh' ? `预约 ${therapist.name}` : `${therapist.name}を予約`}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">
            {language === 'en' ? "Not sure who to choose? We'll match you with the perfect therapist for your needs!" :
             language === 'vi' ? "Không chắc chọn ai? Chúng tôi sẽ ghép bạn với nhà trị liệu hoàn hảo cho nhu cầu của bạn!" :
             language === 'zh' ? "不确定选择谁？我们会为您匹配最适合您需求的治疗师！" : "誰を選べばよいかわかりませんか？あなたのニーズに最適なセラピストをマッチングします！"}
          </p>
          <a
            href="tel:8089425000"
            className="inline-block bg-accent hover:bg-accent/80 text-white font-bold text-lg py-4 px-8 rounded-full transition-colors shadow-lg"
          >
            📞 {language === 'en' ? "Call to Book Your Therapist" :
                language === 'vi' ? "Gọi để Đặt Nhà Trị Liệu" :
                language === 'zh' ? "致电预约治疗师" : "セラピストを予約する"}
          </a>
        </div>
      </div>
    </section>
  );
}
