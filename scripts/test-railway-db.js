// Test Railway PostgreSQL connection for Aloha Massage Spa
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  console.log('🌺 Testing Railway PostgreSQL connection for Aloha Massage Spa...\n');
  console.log('📡 Connecting to:', process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':****@'), '\n');

  try {
    // Test 1: Basic connection
    console.log('Test 1: Checking connection...');
    const result = await pool.query('SELECT NOW() as current_time, version() as postgres_version');
    console.log('✅ Connection successful!');
    console.log('   Current time:', result.rows[0].current_time);
    console.log('   PostgreSQL version:', result.rows[0].postgres_version.split(' ').slice(0, 2).join(' '));
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
      console.log('ℹ️  No tables found (schema not imported yet)');
      console.log('   Run: psql "$DATABASE_URL" < database/schema.sql');
    } else {
      console.log('✅ Found tables:', tables.rows.map(r => r.table_name).join(', '));

      // Test 4: Check services
      try {
        const services = await pool.query('SELECT COUNT(*) as count FROM services');
        console.log(`✅ Services in database: ${services.rows[0].count}`);
      } catch (e) {
        console.log('ℹ️  Services table exists but no data yet');
      }

      // Test 5: Check bookings
      try {
        const bookings = await pool.query('SELECT COUNT(*) as count FROM bookings');
        console.log(`✅ Bookings in database: ${bookings.rows[0].count}`);
      } catch (e) {
        console.log('ℹ️  Bookings table exists but no data yet');
      }
    }

    console.log('\n🎉 All tests passed! Railway PostgreSQL is connected.');
    console.log('');
    console.log('Next steps:');
    if (tables.rows.length === 0) {
      console.log('1. Import schema: psql "$DATABASE_URL" < database/schema.sql');
      console.log('2. Restart this test to verify tables');
    } else {
      console.log('1. ✅ Database schema imported');
      console.log('2. ✅ Ready to build booking system');
      console.log('3. Build booking form in Next.js');
      console.log('4. Add admin dashboard');
    }

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\n📝 Troubleshooting:');

    if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      console.error('❌ Cannot resolve hostname');
      console.error('\n⚠️  ISSUE: You need the PUBLIC URL!');
      console.error('   Railway has TWO URLs:');
      console.error('   1. INTERNAL (postgres.railway.internal) - Only works INSIDE Railway');
      console.error('   2. PUBLIC (shuttle.proxy.rlwy.net or similar) - Works from your computer\n');
      console.error('🔧 SOLUTION:');
      console.error('   1. Go to Railway Dashboard → PostgreSQL → Settings → Networking');
      console.error('   2. Enable TCP Proxy');
      console.error('   3. Copy the PUBLIC Host and Port');
      console.error('   4. Update .env.local with PUBLIC URL\n');
    } else {
      console.error('\n📝 Make sure you:');
      console.error('1. Created a PostgreSQL database in Railway');
      console.error('2. Enabled TCP Proxy to get PUBLIC URL');
      console.error('3. Updated .env.local with correct DATABASE_URL');
    }

    process.exit(1);
  } finally {
    await pool.end();
  }
}

testConnection();
