'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, Input, Textarea, Button } from '@/components/ui';
import { submitContactForm } from '@/app/actions/contact';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || 'Something went wrong');
    }

    setIsLoading(false);
  }

  if (isSuccess) {
    return (
      <Card variant="elevated">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-slate-600 mb-6">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <Button variant="outline" onClick={() => setIsSuccess(false)}>
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="elevated">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              name="firstName"
              label="First Name"
              placeholder="Your first name"
              required
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Your last name"
              required
            />
          </div>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <Input
            name="phone"
            label="Phone (Optional)"
            type="tel"
            placeholder="(808) 123-4567"
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              What can we help you with?
            </label>
            <select
              name="topic"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 bg-white"
            >
              <option value="">Select a topic</option>
              <option value="booking">I&apos;d like to book an appointment</option>
              <option value="services">Question about services</option>
              <option value="gift">Gift cards inquiry</option>
              <option value="feedback">Share feedback</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <Textarea
            name="message"
            label="Your Message"
            placeholder="Tell us how we can help you..."
            rows={5}
            required
          />

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <p className="text-center text-sm text-slate-500">
            We typically respond within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
