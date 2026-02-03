'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Input, Button } from '@/components/ui';
import { login } from '@/app/actions/auth';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);

    const result = await login(formData);

    if (result.success) {
      router.push(result.redirectTo || '/dashboard');
      router.refresh();
    } else {
      setError(result.error || 'An error occurred');
      setIsLoading(false);
    }
  }

  return (
    <Card variant="elevated">
      <CardContent>
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-slate-600 text-center mb-6">
          Sign in to manage your appointments
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-sky-600 hover:text-sky-700"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-sky-600 hover:text-sky-700 font-medium">
              Create one
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
