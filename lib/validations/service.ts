import { z } from 'zod';

export const createServiceSchema = z.object({
  name: z.string().min(2, 'Service name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  duration: z.number().min(15, 'Duration must be at least 15 minutes').max(480, 'Duration cannot exceed 8 hours'),
  price: z.number().min(100, 'Price must be at least $1.00'), // cents
  category: z.enum(['MASSAGE', 'FACIAL', 'BODY_TREATMENT', 'PACKAGE']),
  imageUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  isActive: z.boolean().default(true),
  sortOrder: z.number().default(0),
});

export const updateServiceSchema = createServiceSchema.partial();

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
