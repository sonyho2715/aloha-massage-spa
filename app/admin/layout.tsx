import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Calendar, Users, Sparkles, Settings, LogOut } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { getCurrentUser, getSession } from '@/lib/auth';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/services', label: 'Services', icon: Sparkles },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user || user.role !== 'ADMIN') {
    redirect('/login');
  }

  async function handleLogout() {
    'use server';
    const session = await getSession();
    session.destroy();
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Admin Header */}
      <header className="bg-slate-900 text-white">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-semibold">Admin Panel</span>
              </Link>
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">{user.email}</span>
              <form action={handleLogout}>
                <Button type="submit" variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <LogOut className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-slate-800 border-t border-slate-700">
        <Container>
          <nav className="flex overflow-x-auto py-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <main className="py-8">
        <Container>
          {children}
        </Container>
      </main>
    </div>
  );
}
