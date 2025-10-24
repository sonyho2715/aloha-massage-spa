import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      serviceId,
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      notes,
      language,
    } = body;

    // Validate required fields
    if (!serviceId || !firstName || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get service details
    const serviceResult = await pool.query(
      'SELECT id, name, duration_minutes, price_usd FROM services WHERE id = $1',
      [serviceId]
    );

    if (serviceResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid service selected' },
        { status: 400 }
      );
    }

    const service = serviceResult.rows[0];

    // Combine date and time into datetime
    const bookingDatetime = new Date(`${date}T${time}`);

    // Check if booking is in the past
    if (bookingDatetime < new Date()) {
      return NextResponse.json(
        { success: false, error: 'Cannot book appointments in the past' },
        { status: 400 }
      );
    }

    // Check for existing booking at same time (optional - prevents double booking)
    const conflictCheck = await pool.query(`
      SELECT id FROM bookings
      WHERE booking_datetime = $1
      AND status NOT IN ('cancelled')
    `, [bookingDatetime]);

    if (conflictCheck.rows.length > 0) {
      return NextResponse.json(
        { success: false, error: 'This time slot is already booked. Please choose another time.' },
        { status: 409 }
      );
    }

    // Check if customer exists, if not create them
    let customerId = null;
    const customerCheck = await pool.query(
      'SELECT id FROM customers WHERE email = $1 OR phone = $2',
      [email, phone]
    );

    if (customerCheck.rows.length > 0) {
      customerId = customerCheck.rows[0].id;
      // Update customer info
      await pool.query(`
        UPDATE customers
        SET first_name = $1, last_name = $2, phone = $3, preferred_language = $4
        WHERE id = $5
      `, [firstName, lastName || '', phone, language || 'en', customerId]);
    } else {
      // Create new customer
      const customerResult = await pool.query(`
        INSERT INTO customers (first_name, last_name, email, phone, preferred_language)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
      `, [firstName, lastName || '', email, phone, language || 'en']);
      customerId = customerResult.rows[0].id;
    }

    // Create booking
    const bookingResult = await pool.query(`
      INSERT INTO bookings (
        customer_id,
        customer_first_name,
        customer_last_name,
        customer_email,
        customer_phone,
        service_id,
        service_name,
        duration_minutes,
        price_usd,
        booking_date,
        booking_time,
        booking_datetime,
        status,
        customer_notes,
        preferred_language
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING id, booking_datetime, status
    `, [
      customerId,
      firstName,
      lastName || '',
      email,
      phone,
      service.id,
      service.name,
      service.duration_minutes,
      service.price_usd,
      date,
      time,
      bookingDatetime,
      'pending',  // Initial status
      notes || '',
      language || 'en'
    ]);

    const booking = bookingResult.rows[0];

    // Update customer's total bookings count
    await pool.query(`
      UPDATE customers
      SET total_bookings = total_bookings + 1
      WHERE id = $1
    `, [customerId]);

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        service: service.name,
        datetime: booking.booking_datetime,
        status: booking.status,
      },
      message: 'Booking created successfully!',
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking. Please try again.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve bookings (optional - for admin dashboard later)
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        b.id,
        b.customer_first_name || ' ' || COALESCE(b.customer_last_name, '') as customer_name,
        b.customer_email,
        b.customer_phone,
        b.service_name,
        b.booking_date,
        b.booking_time,
        b.duration_minutes,
        b.price_usd,
        b.status,
        b.created_at
      FROM bookings b
      WHERE b.booking_datetime >= NOW()
      ORDER BY b.booking_datetime
      LIMIT 50
    `);

    return NextResponse.json({
      success: true,
      bookings: result.rows,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
