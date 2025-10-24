import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        id, name, name_vi, name_zh, name_ja,
        description, description_vi, description_zh, description_ja,
        duration_minutes, price_usd, category, display_order
      FROM services
      WHERE is_active = true
      ORDER BY display_order, id
    `);

    return NextResponse.json({
      success: true,
      services: result.rows,
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}
