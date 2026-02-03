'use server';

import { contactFormSchema } from '@/lib/validations/contact';

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      topic: formData.get('topic') as string || undefined,
      message: formData.get('message') as string,
    };

    const validated = contactFormSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        error: 'Please fix the errors below',
        errors: validated.error.issues,
      };
    }

    // In production, send email via Resend or similar service
    // For now, log the submission and return success
    console.log('Contact form submission:', {
      name: `${validated.data.firstName} ${validated.data.lastName}`,
      email: validated.data.email,
      phone: validated.data.phone,
      topic: validated.data.topic,
      message: validated.data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Resend)
    // await resend.emails.send({
    //   from: 'Aloha Massage Spa <noreply@alohamassagespa.com>',
    //   to: 'aloha@massagespa.com',
    //   subject: `New Contact: ${validated.data.topic || 'General Inquiry'}`,
    //   text: `...`,
    // });

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
