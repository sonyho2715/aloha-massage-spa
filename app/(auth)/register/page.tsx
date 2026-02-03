'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Input, Button } from '@/components/ui';
import { register } from '@/app/actions/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);
    setErrors({});

    const result = await register(formData);

    if (result.success) {
      router.push('/dashboard');
      router.refresh();
    } else {
      if (result.errors) {
        const errorMap: Record<string, string> = {};
        result.errors.forEach((err) => {
          if (err.path?.[0]) {
            errorMap[err.path[0] as string] = err.message;
          }
        });
        setErrors(errorMap);
      }
      setError(result.error || 'An error occurred');
      setIsLoading(false);
    }
  }

  return (
    <Card variant="elevated">
      <CardContent>
        <h1 className="text-2xl font-bold text-stone-900 text-center mb-2">
          Create Your Account
        </h1>
        <p className="text-stone-600 text-center mb-6">
          Join us and start booking your wellness journey
        </p>

        {error && !Object.keys(errors).length && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            placeholder="John Doe"
            required
            autoComplete="name"
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            error={errors.email}
          />
          <Input
            label="Phone (optional)"
            name="phone"
            type="tel"
            placeholder="(808) 123-4567"
            autoComplete="tel"
            error={errors.phone}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            autoComplete="new-password"
            error={errors.password}
            helperText="Min 8 characters with uppercase, lowercase, and number"
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
            autoComplete="new-password"
            error={errors.confirmPassword}
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              required
              className="w-4 h-4 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-stone-600">
              I agree to the{' '}
              <Link href="/terms" className="text-teal-600 hover:text-teal-700">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-teal-600 hover:text-teal-700">
                Privacy Policy
              </Link>
            </span>
          </div>

          <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-stone-600">
            Already have an account?{' '}
            <Link href="/login" className="text-teal-600 hover:text-teal-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
