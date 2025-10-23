"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Important Information About Our Services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded mb-8">
              <p className="text-gray-700 font-semibold">
                Please read this disclaimer carefully before booking or receiving massage therapy services at Aloha Massage Spa.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Medical Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              <strong>Massage therapy is not a substitute for medical care.</strong> The information and services provided by Aloha Massage Spa are for relaxation and therapeutic purposes only. Our massage therapists are licensed professionals but are not physicians, and we do not diagnose, treat, or cure any medical conditions.
            </p>
            <p className="text-gray-700 mb-6">
              You should consult with a qualified healthcare provider before receiving massage therapy if you have any concerns about your health or specific medical conditions.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Consultation with Healthcare Provider Required For:</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Pregnancy (especially first trimester)</li>
              <li>Recent surgery or injury</li>
              <li>Blood clots, deep vein thrombosis (DVT), or circulatory disorders</li>
              <li>Cancer or ongoing cancer treatment</li>
              <li>Cardiovascular conditions (heart disease, high blood pressure, etc.)</li>
              <li>Osteoporosis or bone fractures</li>
              <li>Skin conditions or open wounds</li>
              <li>Infectious diseases or fever</li>
              <li>Severe pain of unknown origin</li>
              <li>Any condition that requires medical supervision</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Limitations of Service</h2>
            <h3 className="text-2xl font-semibold text-primary mb-2">Massage Therapy Cannot:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Diagnose medical conditions</li>
              <li>Prescribe medications or medical treatments</li>
              <li>Replace medical treatment or physical therapy prescribed by a doctor</li>
              <li>Cure diseases or chronic conditions</li>
              <li>Guarantee specific health outcomes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mb-2">Massage Therapy May Help With:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Relaxation and stress reduction</li>
              <li>Muscle tension and soreness relief</li>
              <li>Improved circulation</li>
              <li>Increased range of motion and flexibility</li>
              <li>Temporary pain relief</li>
              <li>General wellness and self-care</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Potential Risks and Side Effects</h2>
            <p className="text-gray-700 mb-4">
              While massage therapy is generally safe, some individuals may experience temporary side effects, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Temporary soreness or fatigue (especially after deep tissue work)</li>
              <li>Lightheadedness</li>
              <li>Increased need to urinate (due to improved circulation)</li>
              <li>Emotional release or heightened emotions</li>
              <li>Skin reactions to oils or lotions (please inform us of any allergies)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              These effects typically resolve within 24-48 hours. If symptoms persist or worsen, please consult your healthcare provider.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Deep Tissue Massage Warning</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
              <p className="text-gray-700 mb-2 font-semibold">
                ⚠️ Important Notice About Pressure Intensity
              </p>
              <p className="text-gray-700">
                Some of our therapists, particularly Andy, specialize in deep tissue massage with significant pressure. This type of massage can be intense and may cause temporary discomfort or soreness.
                <strong> Always communicate with your therapist about pressure levels during your session.</strong> You should never experience pain that feels unbearable or causes you to hold your breath or tense up.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">Client Responsibility</h2>
            <p className="text-gray-700 mb-4">
              By receiving services at Aloha Massage Spa, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>You have disclosed all relevant medical conditions and health concerns</li>
              <li>You have consulted with your healthcare provider if you have any conditions that may be affected by massage therapy</li>
              <li>You will communicate immediately if you experience any pain or discomfort during your session</li>
              <li>You understand massage therapy is not a medical treatment</li>
              <li>You take responsibility for seeking appropriate medical care when needed</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">Results May Vary</h2>
            <p className="text-gray-700 mb-6">
              Individual results from massage therapy vary based on many factors including your overall health, the specific condition being addressed, frequency of treatment, and lifestyle factors. We cannot guarantee specific outcomes or results from our services.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Organic Products</h2>
            <p className="text-gray-700 mb-6">
              We use organic oils and lotions whenever possible. However, if you have allergies or sensitivities to any ingredients, please inform your therapist before your session. We cannot guarantee that all products will be suitable for every individual.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Professional Boundaries</h2>
            <p className="text-gray-700 mb-6">
              Aloha Massage Spa provides therapeutic massage services only. All services are professional and non-sexual in nature. Any inappropriate behavior will result in immediate termination of service without refund.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">License Information</h2>
            <p className="text-gray-700 mb-6">
              Our therapists are licensed by the State of Hawaii. Angela Yang holds License #MAT-14098. All other therapists maintain current professional licenses and certifications. You may request to see license credentials at any time.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Website Information</h2>
            <p className="text-gray-700 mb-6">
              The information on our website (alohamassagespahi.com) is provided for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties about the completeness, accuracy, reliability, or availability of any information on the website.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Third-Party Links and Reviews</h2>
            <p className="text-gray-700 mb-6">
              Our website or promotional materials may contain links to third-party websites (Yelp, Groupon, etc.) or display third-party reviews. We are not responsible for the content, accuracy, or practices of these third-party sites. Reviews reflect individual experiences and results may vary.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, Aloha Massage Spa, its owners, employees, and therapists shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to the use of our services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this disclaimer or our services, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Aloha Massage Spa</strong></p>
              <p className="text-gray-700 mb-2">1960 Kapiolani Blvd, Suite 202</p>
              <p className="text-gray-700 mb-2">Honolulu, HI 96826</p>
              <p className="text-gray-700 mb-2">Phone: (808) 942-5000</p>
              <p className="text-gray-700 mb-2">Email: info@alohamassagespahi.com</p>
              <p className="text-gray-700">Hours: 10:00 AM - 11:00 PM Daily</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mt-8">
              <p className="text-gray-700 font-semibold mb-2">
                Medical Emergency
              </p>
              <p className="text-gray-700">
                If you experience a medical emergency during or after your massage, please call 911 immediately or go to the nearest emergency room. Massage therapy is not a substitute for emergency medical care.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mt-8">
              <p className="text-gray-700 italic">
                <strong>By booking and receiving services at Aloha Massage Spa, you acknowledge that you have read, understood, and agree to this disclaimer.</strong>
              </p>
              <p className="text-gray-700 italic mt-2">
                Last Updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
