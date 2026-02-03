'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Container, Card, CardContent, Button, Input, Textarea, Badge } from '@/components/ui';
import { formatPrice, formatDuration } from '@/lib/utils';
import { createBooking } from '@/app/actions/booking';

// Services data (in production, fetch from API)
const services = [
  { id: '1', name: 'Lomi Lomi Massage', duration: 60, price: 9500, category: 'MASSAGE' },
  { id: '2', name: 'Deep Tissue Massage', duration: 60, price: 10500, category: 'MASSAGE' },
  { id: '3', name: 'Swedish Massage', duration: 60, price: 8500, category: 'MASSAGE' },
  { id: '4', name: 'Hot Stone Massage', duration: 75, price: 12500, category: 'MASSAGE' },
  { id: '5', name: 'Sports Massage', duration: 60, price: 11000, category: 'MASSAGE' },
  { id: '6', name: 'Prenatal Massage', duration: 60, price: 9500, category: 'MASSAGE' },
  { id: '7', name: 'Tropical Facial', duration: 45, price: 7500, category: 'FACIAL' },
  { id: '8', name: 'Anti-Aging Facial', duration: 60, price: 9500, category: 'FACIAL' },
  { id: '9', name: 'Deep Cleansing Facial', duration: 45, price: 6500, category: 'FACIAL' },
  { id: '10', name: 'Hawaiian Sea Salt Scrub', duration: 45, price: 7000, category: 'BODY' },
  { id: '11', name: 'Coconut Body Wrap', duration: 60, price: 8500, category: 'BODY' },
  { id: '12', name: 'Couples Retreat', duration: 90, price: 22000, category: 'PACKAGE' },
  { id: '13', name: 'Island Escape', duration: 150, price: 25000, category: 'PACKAGE' },
  { id: '14', name: 'Quick Refresh', duration: 60, price: 11000, category: 'PACKAGE' },
];

const therapists = [
  { id: '1', name: 'Angela', specialty: 'Lomi Lomi Specialist' },
  { id: '2', name: 'Tony', specialty: 'Deep Tissue Expert' },
  { id: '3', name: 'Andy', specialty: 'Swedish & Relaxation' },
  { id: '4', name: 'Malia', specialty: 'Facials & Skin Care' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

type Step = 'service' | 'datetime' | 'details' | 'confirm';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselectedService = searchParams.get('service');

  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<string | null>(preselectedService);
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [giftCardCode, setGiftCardCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const service = services.find(s => s.id === selectedService);
  const therapist = therapists.find(t => t.id === selectedTherapist);

  // Get minimum date (tomorrow)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedService) {
      setStep('datetime');
    }
  }, [preselectedService]);

  const handleSubmit = async () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      setError('Please complete all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.set('serviceId', selectedService);
    if (selectedTherapist) formData.set('therapistId', selectedTherapist);
    formData.set('date', selectedDate);
    formData.set('time', selectedTime);
    if (notes) formData.set('notes', notes);
    if (giftCardCode) formData.set('giftCardCode', giftCardCode);

    const result = await createBooking(formData);

    if (result.success) {
      setStep('confirm');
    } else {
      setError(result.error || 'Failed to create booking');
      if (result.error?.includes('log in')) {
        router.push('/login?redirect=/book');
      }
    }

    setIsLoading(false);
  };

  const renderStep = () => {
    switch (step) {
      case 'service':
        return (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Select a Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s) => (
                <Card
                  key={s.id}
                  variant={selectedService === s.id ? 'elevated' : 'outlined'}
                  padding="sm"
                  className={`cursor-pointer transition-all ${
                    selectedService === s.id ? 'ring-2 ring-sky-500' : 'hover:border-sky-300'
                  }`}
                  onClick={() => setSelectedService(s.id)}
                >
                  <CardContent className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-slate-900">{s.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatDuration(s.duration)}
                        </span>
                        <Badge size="sm">{s.category}</Badge>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-sky-600">
                      {formatPrice(s.price)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button
                onClick={() => setStep('datetime')}
                disabled={!selectedService}
                size="lg"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 'datetime':
        return (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose Date & Time</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Select Date
                </label>
                <input
                  type="date"
                  min={minDateStr}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Select Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Preferred Therapist (Optional)
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  onClick={() => setSelectedTherapist(null)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    !selectedTherapist
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  No Preference
                </button>
                {therapists.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTherapist(t.id)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all text-left ${
                      selectedTherapist === t.id
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <div>{t.name}</div>
                    <div className={`text-xs ${selectedTherapist === t.id ? 'text-sky-100' : 'text-slate-500'}`}>
                      {t.specialty}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep('service')}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                onClick={() => setStep('details')}
                disabled={!selectedDate || !selectedTime}
                size="lg"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 'details':
        return (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Details</h2>

            {/* Booking Summary */}
            <Card variant="outlined" className="mb-6">
              <CardContent>
                <h3 className="font-semibold text-slate-900 mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service:</span>
                    <span className="font-medium">{service?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration:</span>
                    <span>{service && formatDuration(service.duration)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Date:</span>
                    <span>{selectedDate && new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  {therapist && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Therapist:</span>
                      <span>{therapist.name}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-slate-100 text-base">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-sky-600">{service && formatPrice(service.price)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Textarea
                label="Special Requests or Notes (Optional)"
                placeholder="Any allergies, injuries, or preferences we should know about?"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <Input
                label="Gift Card Code (Optional)"
                placeholder="ALOHA-XXXXXXXX"
                value={giftCardCode}
                onChange={(e) => setGiftCardCode(e.target.value.toUpperCase())}
              />
            </div>

            {error && (
              <div className="mt-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep('datetime')}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button onClick={handleSubmit} isLoading={isLoading} size="lg">
                Confirm Booking
                <Check className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 'confirm':
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              We&apos;ve sent a confirmation email with your appointment details.
              We look forward to seeing you!
            </p>
            <Card variant="outlined" className="max-w-sm mx-auto mb-8">
              <CardContent>
                <div className="text-left space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service:</span>
                    <span className="font-medium">{service?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Date:</span>
                    <span>{selectedDate && new Date(selectedDate + 'T00:00:00').toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => router.push('/dashboard')}>
                View My Bookings
              </Button>
              <Button onClick={() => router.push('/')}>
                Return Home
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-12">
      <Container size="md">
        {/* Progress Steps */}
        {step !== 'confirm' && (
          <div className="flex items-center justify-center gap-4 mb-12">
            {['service', 'datetime', 'details'].map((s, i) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === s
                      ? 'bg-sky-600 text-white'
                      : ['service', 'datetime', 'details'].indexOf(step) > i
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {i + 1}
                </div>
                {i < 2 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      ['service', 'datetime', 'details'].indexOf(step) > i
                        ? 'bg-sky-600'
                        : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <Card variant="elevated">
          <CardContent>{renderStep()}</CardContent>
        </Card>
      </Container>
    </section>
  );
}
