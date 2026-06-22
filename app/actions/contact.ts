'use server';

import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string()
    .min(2, { message: 'Full Name must be at least 2 characters.' })
    .max(100, { message: 'Full Name must be under 100 characters.' }),
  phone: z.string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
      message: 'Please provide a valid U.S. phone number (e.g., 954-701-0752).',
    }),
  email: z.string()
    .email({ message: 'Please enter a valid email address.' }),
  vesselClass: z.enum(['Yacht', 'Sailboat', 'Motor Boat', 'Commercial Vessel', 'Other'], {
    message: 'Please select a valid vessel class.',
  }),
  serviceType: z.enum([
    'Marine Air Conditioning',
    'Refrigeration Systems',
    'Chilled Water Pipe Insulation',
    'Mold Cleaning & Preventative Measures',
    'Watermaker Services & Repairs',
    'Preventative Maintenance',
    'Diagnostics & Repair',
    'Ground Support Unit Rental',
  ], {
    message: 'Please select from the services catalog.',
  }),
  message: z.string()
    .min(10, { message: 'Please provide at least 10 characters describing your request.' })
    .max(1000, { message: 'Message is too long (maximum 1000 characters).' }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export interface ServerActionResponse {
  success: boolean;
  message: string;
  errors?: Record<keyof ContactInput, string[]>;
}

export async function submitContactForm(
  prevState: any,
  formData: FormData
): Promise<ServerActionResponse> {
  // Artificial delay to demonstrate premium loading transitions
  await new Promise((resolve) => setTimeout(resolve, 800));

  const rawData: Record<string, any> = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    vesselClass: formData.get('vesselClass'),
    serviceType: formData.get('serviceType'),
    message: formData.get('message'),
  };

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    const formattedErrors = validation.error.flatten().fieldErrors as Record<keyof ContactInput, string[]>;
    return {
      success: false,
      message: 'Please review the input fields and correct any highlighted errors.',
      errors: formattedErrors,
    };
  }

  const data = validation.data;
  
  // Here, we log the lead submission securely server-side.
  console.log('--- NEW LEAD ACQUIRED FOR SIGNATURE YACHT SERVICES ---');
  console.log(`FullName: ${data.fullName}`);
  console.log(`Phone: ${data.phone}`);
  console.log(`Email: ${data.email}`);
  console.log(`Vessel Class: ${data.vesselClass}`);
  console.log(`Service Type: ${data.serviceType}`);
  console.log(`Message: ${data.message}`);
  console.log('------------------------------------------------------');

  // Return elegant success outcome to trigger conversion feedback loop
  return {
    success: true,
    message: `Thank you, ${data.fullName}. Your request for ${data.serviceType} has been dispatched to our expert dockside technicians. We will contact you at ${data.phone} within 24 hours.`,
  };
}
