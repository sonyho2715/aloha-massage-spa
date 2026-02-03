import { z } from 'zod';

export const purchaseGiftCardSchema = z.object({
  amount: z.number().min(2500, 'Minimum gift card amount is $25').max(50000, 'Maximum gift card amount is $500'), // cents
  recipientEmail: z.string().email('Please enter a valid email address').optional(),
  recipientName: z.string().min(2, 'Recipient name must be at least 2 characters').optional(),
  message: z.string().max(200, 'Message must be less than 200 characters').optional(),
});

export const redeemGiftCardSchema = z.object({
  code: z.string().min(1, 'Gift card code is required'),
});

export type PurchaseGiftCardInput = z.infer<typeof purchaseGiftCardSchema>;
export type RedeemGiftCardInput = z.infer<typeof redeemGiftCardSchema>;
