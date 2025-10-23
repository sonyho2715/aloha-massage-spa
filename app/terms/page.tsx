"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By booking an appointment or using the services of Aloha Massage Spa, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">2. Services Provided</h2>
            <p className="text-gray-700 mb-4">
              Aloha Massage Spa provides professional therapeutic massage services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Foot massage</li>
              <li>Full body massage</li>
              <li>Targeted relief massage</li>
              <li>Combination massage</li>
              <li>Couples massage</li>
              <li>Deep tissue massage</li>
              <li>Swedish massage</li>
              <li>Lomi lomi massage</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All services are provided by licensed massage therapists (License #MAT-14098 for Angela Yang and other licensed professionals).
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">3. Booking and Appointments</h2>
            <h3 className="text-2xl font-semibold text-primary mb-2">3.1 Scheduling</h3>
            <p className="text-gray-700 mb-4">
              Appointments can be made by calling (808) 942-5000. We also welcome walk-ins based on availability.
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-2">3.2 Cancellations</h3>
            <p className="text-gray-700 mb-4">
              We request at least 2 hours notice for cancellations. Late cancellations or no-shows may result in a cancellation fee.
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-2">3.3 Tardiness</h3>
            <p className="text-gray-700 mb-6">
              If you arrive late for your appointment, your session may be shortened to accommodate other scheduled clients, and you will be charged the full session rate.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment is due at the time of service. We accept:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Cash</li>
              <li>Credit cards (Visa, Mastercard, American Express, Discover)</li>
              <li>Debit cards</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Gratuities are optional but appreciated for exceptional service.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">5. Health and Safety</h2>
            <h3 className="text-2xl font-semibold text-primary mb-2">5.1 Medical Conditions</h3>
            <p className="text-gray-700 mb-4">
              You must disclose any medical conditions, injuries, allergies, or recent surgeries that may affect your massage therapy. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Cardiovascular conditions</li>
              <li>Pregnancy</li>
              <li>Recent injuries or surgeries</li>
              <li>Skin conditions</li>
              <li>Blood clots or circulatory issues</li>
              <li>Cancer or ongoing cancer treatment</li>
              <li>Infectious diseases</li>
            </ul>
            <h3 className="text-2xl font-semibold text-primary mb-2">5.2 Contraindications</h3>
            <p className="text-gray-700 mb-4">
              Massage therapy may not be appropriate for certain conditions. We reserve the right to refuse service if we believe it could be harmful to your health.
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-2">5.3 Pressure Communication</h3>
            <p className="text-gray-700 mb-6">
              Please communicate with your therapist about pressure preferences during your session. Some of our therapists (particularly Andy) specialize in deep tissue work, which can be intense. Always speak up if the pressure is too much.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">6. Professional Conduct</h2>
            <p className="text-gray-700 mb-4">
              Aloha Massage Spa is a professional therapeutic massage establishment. We maintain strict professional boundaries:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>All services are therapeutic and non-sexual in nature</li>
              <li>Inappropriate behavior, comments, or requests will result in immediate termination of service without refund</li>
              <li>Clients will be asked to leave and may be banned from future services</li>
              <li>We reserve the right to refuse service to anyone</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4">7. Privacy and Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We respect your privacy. All client information, including health history and treatment records, is kept confidential in accordance with applicable laws. We do not share your information with third parties except as required by law.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">8. Liability</h2>
            <p className="text-gray-700 mb-6">
              While we take every precaution to ensure your safety and comfort, massage therapy involves physical manipulation and carries inherent risks. By using our services, you acknowledge these risks and agree that Aloha Massage Spa, its owners, and therapists are not liable for any injuries or adverse reactions that may occur during or after treatment, provided services are performed in a professional manner.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">9. Gift Certificates and Promotions</h2>
            <p className="text-gray-700 mb-6">
              Gift certificates and promotional offers are subject to the terms and conditions stated at the time of purchase. Unless otherwise stated, gift certificates do not expire but cannot be redeemed for cash.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on our website and at our location. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Aloha Massage Spa</strong></p>
              <p className="text-gray-700 mb-2">1960 Kapiolani Blvd, Suite 202</p>
              <p className="text-gray-700 mb-2">Honolulu, HI 96826</p>
              <p className="text-gray-700 mb-2">Phone: (808) 942-5000</p>
              <p className="text-gray-700 mb-2">Email: info@alohamassagespahi.com</p>
              <p className="text-gray-700">Hours: 10:00 AM - 11:00 PM Daily</p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded mt-8">
              <p className="text-gray-700 italic">
                By booking an appointment with Aloha Massage Spa, you acknowledge that you have read, understood, and agree to these Terms of Service.
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
