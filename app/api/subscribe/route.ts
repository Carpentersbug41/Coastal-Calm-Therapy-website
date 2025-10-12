import { NextRequest, NextResponse } from 'next/server';

/**
 * OPTION B: Newsletter subscription API route using MailerLite API
 * 
 * This is an alternative to using the MailerLite embed form (Option A, which is the default).
 * 
 * To use this route:
 * 1. Set environment variables in .env:
 *    - MAILERLITE_API_KEY=your_mailerlite_api_key
 *    - MAILERLITE_GROUP_ID=your_group_id (optional, if you want to add to a specific group)
 * 2. Update app/(site)/subscribe/page.tsx to use a custom form that POSTs to /api/subscribe
 * 3. Uncomment the code below
 */

/*
import { z } from 'zod';

const SubscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = SubscribeSchema.parse(body);

    // Check required environment variables
    const apiKey = process.env.MAILERLITE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error. MailerLite API key not set.' },
        { status: 500 }
      );
    }

    // Prepare subscriber data
    const subscriberData: any = {
      email: validatedData.email,
    };

    if (validatedData.name) {
      subscriberData.fields = {
        name: validatedData.name,
      };
    }

    // Add to group if specified
    const groupId = process.env.MAILERLITE_GROUP_ID;
    if (groupId) {
      subscriberData.groups = [groupId];
    }

    // Call MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', responseData);
      
      // Check for specific error cases
      if (response.status === 422 && responseData.message?.includes('already exists')) {
        return NextResponse.json(
          { error: 'This email is already subscribed.' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address', details: error.errors },
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
      error: 'Subscribe API route not configured. Use MailerLite embed (Option A) or uncomment and configure this route (Option B).',
    },
    { status: 501 }
  );
}

