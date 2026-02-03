import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, LogOut, Gift } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { getCurrentUser, getSession } from '@/lib/auth';

const navItems = [
  { href: '/dashboard', label: 'My Bookings', icon: Calendar },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
  { href: '/dashboard/gift-cards', label: 'Gift Cards', icon: Gift },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  async function handleLogout() {
    'use server';
    const session = await getSession();
    session.destroy();
    redirect('/');
  }

  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">My Account</h1>
              <p className="text-sm text-slate-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/book">
                <Button size="sm">Book Appointment</Button>
              </Link>
              <form action={handleLogout}>
                <Button type="submit" variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl p-4 shadow-sm">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-600 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </Container>
    </div>
  );
}
