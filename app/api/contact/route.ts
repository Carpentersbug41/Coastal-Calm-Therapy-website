import { NextRequest, NextResponse } from 'next/server';

/**
 * OPTION B: Contact form API route using Resend
 * 
 * This is an alternative to using Formspree (Option A, which is the default).
 * 
 * To use this route:
 * 1. Install Resend: npm install resend
 * 2. Set environment variables in .env:
 *    - RESEND_API_KEY=your_resend_api_key
 *    - CONTACT_TO=your@email.com
 *    - CONTACT_FROM=noreply@yourdomain.com
 * 3. Update app/(site)/contact/page.tsx to POST to /api/contact instead of Formspree
 * 4. Uncomment the code below
 */

/*
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = ContactFormSchema.parse(body);

    // Check required environment variables
    const contactTo = process.env.CONTACT_TO;
    const contactFrom = process.env.CONTACT_FROM;

    if (!contactTo || !contactFrom) {
      return NextResponse.json(
        { error: 'Server configuration error. Contact email not set.' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject: validatedData.subject || 'New Contact Form Submission',
      replyTo: validatedData.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.subject ? `<p><strong>Subject:</strong> ${validatedData.subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
*/

// Placeholder response when Option B is not enabled
export async function POST() {
  return NextResponse.json(
    {
      error: 'Contact API route not configured. Use Formspree (Option A) or uncomment and configure this route (Option B).',
    },
    { status: 501 }
  );
}

