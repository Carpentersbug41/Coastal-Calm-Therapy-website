import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Replace with your actual email service
    // For now, we'll just log the data
    console.log('Application received:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would send this via:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Or your preferred email service
    
    // Example with a generic email service:
    /*
    await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: process.env.CONTACT_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: `New Anxiety Protocol Application from ${name}`,
        html: `
          <h2>New Application Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    });
    */

    return NextResponse.json(
      { 
        success: true,
        message: 'Application submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}

