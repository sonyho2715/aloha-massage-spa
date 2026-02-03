import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Users, DollarSign, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, Badge, Button } from '@/components/ui';
import { requireAdmin } from '@/lib/auth';
import { db } from '@/lib/db';
import { formatPrice, formatDate, formatTime } from '@/lib/utils';
import type { Booking, Service, Therapist, User } from '@/app/generated/prisma/client';

type AdminBooking = Booking & {
  user: Pick<User, 'name' | 'email'>;
  service: Pick<Service, 'name' | 'duration'>;
  therapist: Pick<Therapist, 'name'> | null;
};

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage your spa business.',
};

export default async function AdminDashboard() {
  await requireAdmin();

  // Get today's date range
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Fetch stats
  const [
    todayBookings,
    totalCustomers,
    pendingBookings,
    recentBookings,
  ] = await Promise.all([
    db.booking.count({
      where: {
        date: { gte: today, lt: tomorrow },
        status: { in: ['PENDING', 'CONFIRMED'] },
      },
    }),
    db.user.count({ where: { role: 'CUSTOMER' } }),
    db.booking.count({ where: { status: 'PENDING' } }),
    db.booking.findMany({
      where: { status: { in: ['PENDING', 'CONFIRMED'] } },
      include: {
        user: { select: { name: true, email: true } },
        service: { select: { name: true, duration: true } },
        therapist: { select: { name: true } },
      },
      orderBy: { date: 'asc' },
      take: 10,
    }),
  ]);

  // Calculate this week's revenue (simplified)
  const weekStart = new Date(today);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weeklyBookings = await db.booking.aggregate({
    where: {
      date: { gte: weekStart },
      status: 'COMPLETED',
    },
    _sum: { totalPrice: true },
  });
  const weeklyRevenue = weeklyBookings._sum.totalPrice || 0;

  const stats = [
    {
      label: "Today's Appointments",
      value: todayBookings.toString(),
      icon: Calendar,
      color: 'text-sky-600 bg-sky-100',
      href: '/admin/bookings?date=today',
    },
    {
      label: 'Pending Confirmation',
      value: pendingBookings.toString(),
      icon: Clock,
      color: 'text-amber-600 bg-amber-100',
      href: '/admin/bookings?status=pending',
    },
    {
      label: 'Total Customers',
      value: totalCustomers.toString(),
      icon: Users,
      color: 'text-blue-600 bg-blue-100',
      href: '/admin/customers',
    },
    {
      label: 'This Week Revenue',
      value: formatPrice(weeklyRevenue),
      icon: DollarSign,
      color: 'text-green-600 bg-green-100',
      href: '/admin/reports',
    },
  ];

  const statusColors = {
    PENDING: 'warning',
    CONFIRMED: 'success',
    CANCELLED: 'danger',
    COMPLETED: 'default',
    NO_SHOW: 'danger',
  } as const;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Welcome to your admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card variant="elevated" className="hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Upcoming Bookings */}
      <Card variant="elevated">
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Upcoming Bookings</h2>
            <Link href="/admin/bookings">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {recentBookings.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              No upcoming bookings
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Date & Time</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Therapist</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-slate-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking: AdminBooking) => (
                    <tr key={booking.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-slate-900">{booking.user.name}</p>
                          <p className="text-sm text-slate-500">{booking.user.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-slate-900">{booking.service.name}</p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-slate-900">{formatDate(booking.date)}</p>
                        <p className="text-sm text-slate-500">{formatTime(booking.date)}</p>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {booking.therapist?.name || 'Any'}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={statusColors[booking.status]} size="sm">
                          {booking.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link href={`/admin/bookings/${booking.id}`}>
                          <Button variant="ghost" size="sm">View</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Link href="/admin/bookings/new">
          <Card variant="outlined" className="hover:border-sky-300 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">New Booking</p>
                <p className="text-sm text-slate-500">Create a walk-in booking</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/customers/new">
          <Card variant="outlined" className="hover:border-sky-300 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Add Customer</p>
                <p className="text-sm text-slate-500">Register a new customer</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/services/new">
          <Card variant="outlined" className="hover:border-sky-300 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">New Service</p>
                <p className="text-sm text-slate-500">Add a service offering</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
