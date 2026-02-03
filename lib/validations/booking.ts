import { z } from 'zod';

export const createBookingSchema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
  therapistId: z.string().optional(),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
  giftCardCode: z.string().optional(),
});

export const updateBookingSchema = z.object({
  status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED', 'NO_SHOW']).optional(),
  therapistId: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export const cancelBookingSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  reason: z.string().max(500, 'Reason must be less than 500 characters').optional(),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
export type UpdateBookingInput = z.infer<typeof updateBookingSchema>;
export type CancelBookingInput = z.infer<typeof cancelBookingSchema>;
