'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { createBookingSchema, cancelBookingSchema } from '@/lib/validations/booking';
import { calculateEndTime } from '@/lib/utils';

export async function createBooking(formData: FormData) {
  try {
    const session = await requireAuth();

    const data = {
      serviceId: formData.get('serviceId') as string,
      therapistId: formData.get('therapistId') as string || undefined,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      notes: formData.get('notes') as string || undefined,
      giftCardCode: formData.get('giftCardCode') as string || undefined,
    };

    const validated = createBookingSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        error: 'Please fill in all required fields',
        errors: validated.error.issues,
      };
    }

    // Get service details
    const service = await db.service.findUnique({
      where: { id: validated.data.serviceId },
    });

    if (!service || !service.isActive) {
      return { success: false, error: 'Selected service is not available' };
    }

    // Parse date and time
    const [year, month, day] = validated.data.date.split('-').map(Number);
    const [hour, minute] = validated.data.time.split(':').map(Number);
    const appointmentDate = new Date(year, month - 1, day, hour, minute);

    // Validate appointment is in the future
    if (appointmentDate < new Date()) {
      return { success: false, error: 'Please select a future date and time' };
    }

    // Calculate end time
    const endTime = calculateEndTime(appointmentDate, service.duration);

    // Check for conflicting bookings (if therapist selected)
    if (validated.data.therapistId) {
      const conflictingBooking = await db.booking.findFirst({
        where: {
          therapistId: validated.data.therapistId,
          status: { in: ['PENDING', 'CONFIRMED'] },
          OR: [
            {
              AND: [
                { date: { lte: appointmentDate } },
                { endTime: { gt: appointmentDate } },
              ],
            },
            {
              AND: [
                { date: { lt: endTime } },
                { endTime: { gte: endTime } },
              ],
            },
          ],
        },
      });

      if (conflictingBooking) {
        return { success: false, error: 'Selected time slot is not available' };
      }
    }

    // Handle gift card if provided
    let giftCardId: string | undefined;
    let totalPrice = service.price;

    if (validated.data.giftCardCode) {
      const giftCard = await db.giftCard.findUnique({
        where: { code: validated.data.giftCardCode },
      });

      if (!giftCard || !giftCard.isActive || giftCard.balance < service.price) {
        return { success: false, error: 'Invalid or insufficient gift card balance' };
      }

      giftCardId = giftCard.id;

      // Deduct from gift card
      await db.giftCard.update({
        where: { id: giftCard.id },
        data: { balance: giftCard.balance - service.price },
      });
    }

    // Create booking
    const booking = await db.booking.create({
      data: {
        userId: session.userId,
        serviceId: service.id,
        therapistId: validated.data.therapistId || null,
        date: appointmentDate,
        endTime,
        totalPrice,
        notes: validated.data.notes,
        giftCardId,
        status: 'PENDING',
      },
      include: {
        service: true,
        therapist: true,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/admin/bookings');

    return {
      success: true,
      booking: {
        id: booking.id,
        date: booking.date,
        service: booking.service.name,
        therapist: booking.therapist?.name,
      },
    };
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return { success: false, error: 'Please log in to book an appointment' };
    }
    console.error('Booking error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function cancelBooking(formData: FormData) {
  try {
    const session = await requireAuth();

    const data = {
      bookingId: formData.get('bookingId') as string,
      reason: formData.get('reason') as string || undefined,
    };

    const validated = cancelBookingSchema.safeParse(data);
    if (!validated.success) {
      return { success: false, error: 'Invalid request' };
    }

    const booking = await db.booking.findUnique({
      where: { id: validated.data.bookingId },
      include: { giftCard: true },
    });

    if (!booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Check ownership (unless admin)
    if (booking.userId !== session.userId && session.role !== 'ADMIN') {
      return { success: false, error: 'You can only cancel your own bookings' };
    }

    // Check if booking can be cancelled (not already cancelled or completed)
    if (booking.status === 'CANCELLED' || booking.status === 'COMPLETED') {
      return { success: false, error: 'This booking cannot be cancelled' };
    }

    // Refund to gift card if applicable
    if (booking.giftCardId && booking.giftCard) {
      await db.giftCard.update({
        where: { id: booking.giftCardId },
        data: { balance: booking.giftCard.balance + booking.totalPrice },
      });
    }

    // Cancel booking
    await db.booking.update({
      where: { id: booking.id },
      data: {
        status: 'CANCELLED',
        notes: validated.data.reason
          ? `${booking.notes || ''}\n\nCancellation reason: ${validated.data.reason}`.trim()
          : booking.notes,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/admin/bookings');

    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return { success: false, error: 'Please log in to cancel a booking' };
    }
    console.error('Cancel booking error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function updateBookingStatus(bookingId: string, status: string) {
  try {
    await requireAuth();

    await db.booking.update({
      where: { id: bookingId },
      data: { status: status as 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW' },
    });

    revalidatePath('/admin/bookings');
    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Update booking status error:', error);
    return { success: false, error: 'Failed to update booking status' };
  }
}
