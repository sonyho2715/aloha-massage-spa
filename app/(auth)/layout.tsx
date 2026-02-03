import Link from 'next/link';
import { Container } from '@/components/ui';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <Container size="sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-2xl font-semibold text-stone-900">Aloha</span>
              <span className="text-2xl text-teal-600 ml-1">Massage Spa</span>
            </div>
          </Link>
        </div>
        {children}
      </Container>
    </div>
  );
}
