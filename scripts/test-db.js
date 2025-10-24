// Test script to verify Railway PostgreSQL connection
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  console.log('🔍 Testing Railway PostgreSQL connection...\n');
  console.log('📡 Attempting to connect to:', process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':****@'), '\n');

  try {
    // Test 1: Basic connection
    console.log('Test 1: Checking connection...');
    const result = await pool.query('SELECT NOW() as current_time, version() as postgres_version');
    console.log('✅ Connection successful!');
    console.log('Current time:', result.rows[0].current_time);
    console.log('PostgreSQL version:', result.rows[0].postgres_version);
    console.log('');

    // Test 2: Check database name
    console.log('Test 2: Checking database info...');
    const dbInfo = await pool.query('SELECT current_database(), current_user');
    console.log('✅ Database:', dbInfo.rows[0].current_database);
    console.log('✅ User:', dbInfo.rows[0].current_user);
    console.log('');

    // Test 3: List all tables
    console.log('Test 3: Listing tables...');
    const tables = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    if (tables.rows.length === 0) {
      console.log('ℹ️  No tables found (this is normal for a new database)');
    } else {
      console.log('✅ Found tables:', tables.rows.map(r => r.table_name).join(', '));
    }

    console.log('\n🎉 All tests passed! Railway PostgreSQL is connected.');

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\n📝 Troubleshooting:');

    if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      console.error('❌ Cannot resolve hostname: postgres.railway.internal');
      console.error('\n⚠️  ISSUE: You provided the INTERNAL hostname!');
      console.error('   Railway has TWO URLs:');
      console.error('   1. INTERNAL (postgres.railway.internal) - Only works INSIDE Railway');
      console.error('   2. PUBLIC (containers-us-west-XXX.railway.app) - Works from your computer\n');
      console.error('🔧 SOLUTION:');
      console.error('   Go to Railway Dashboard > PostgreSQL > Variables');
      console.error('   Look for a variable like "RAILWAY_PUBLIC_DOMAIN" or "PUBLIC_URL"');
      console.error('   Or find DATABASE_URL with "containers-us-west" in it\n');
    } else {
      console.error('\n📝 Make sure you:');
      console.error('1. Created a PostgreSQL database in Railway');
      console.error('2. Copied the CORRECT DATABASE_URL from Railway');
      console.error('3. Pasted it in .env.local');
    }

    process.exit(1);
  } finally {
    await pool.end();
  }
}

testConnection();
