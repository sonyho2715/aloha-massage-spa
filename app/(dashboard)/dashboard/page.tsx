import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, Button, Badge } from '@/components/ui';
import { requireAuth } from '@/lib/auth';
import { db } from '@/lib/db';
import { formatPrice, formatDate, formatTime, formatDuration } from '@/lib/utils';
import type { Booking, Service, Therapist } from '@/app/generated/prisma/client';

type BookingWithRelations = Booking & {
  service: Service;
  therapist: Therapist | null;
};

export const metadata: Metadata = {
  title: 'My Bookings',
  description: 'View and manage your spa appointments.',
};

const statusColors = {
  PENDING: 'warning',
  CONFIRMED: 'success',
  CANCELLED: 'danger',
  COMPLETED: 'default',
  NO_SHOW: 'danger',
} as const;

const statusLabels = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  CANCELLED: 'Cancelled',
  COMPLETED: 'Completed',
  NO_SHOW: 'No Show',
};

export default async function DashboardPage() {
  const session = await requireAuth();

  const bookings = await db.booking.findMany({
    where: { userId: session.userId },
    include: {
      service: true,
      therapist: true,
    },
    orderBy: { date: 'desc' },
    take: 20,
  });

  const upcomingBookings = bookings.filter(
    (b: BookingWithRelations) => b.date > new Date() && b.status !== 'CANCELLED'
  );
  const pastBookings = bookings.filter(
    (b: BookingWithRelations) => b.date <= new Date() || b.status === 'CANCELLED'
  );

  return (
    <div className="space-y-8">
      {/* Upcoming Bookings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Upcoming Appointments</h2>
          <Link href="/book">
            <Button size="sm">
              Book New
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {upcomingBookings.length === 0 ? (
          <Card variant="outlined">
            <CardContent className="text-center py-12">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">No Upcoming Appointments</h3>
              <p className="text-slate-600 mb-4">Ready for some relaxation?</p>
              <Link href="/book">
                <Button>Book Your First Appointment</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {upcomingBookings.map((booking: BookingWithRelations) => (
              <Card key={booking.id} variant="elevated">
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{booking.service.name}</h3>
                        <Badge variant={statusColors[booking.status]} size="sm">
                          {statusLabels[booking.status]}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(booking.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatTime(booking.date)} ({formatDuration(booking.service.duration)})
                        </span>
                        {booking.therapist && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            with {booking.therapist.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-sky-600">
                        {formatPrice(booking.totalPrice)}
                      </span>
                      {booking.status === 'PENDING' && (
                        <form action={`/api/bookings/${booking.id}/cancel`} method="POST">
                          <Button variant="ghost" size="sm" type="submit">
                            Cancel
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Past Bookings */}
      {pastBookings.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Past Appointments</h2>
          <div className="space-y-3">
            {pastBookings.map((booking: BookingWithRelations) => (
              <Card key={booking.id} variant="outlined" padding="sm">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium text-slate-900">{booking.service.name}</h3>
                        <Badge variant={statusColors[booking.status]} size="sm">
                          {statusLabels[booking.status]}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">
                        {formatDate(booking.date)} at {formatTime(booking.date)}
                      </p>
                    </div>
                    <span className="text-slate-600">{formatPrice(booking.totalPrice)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
