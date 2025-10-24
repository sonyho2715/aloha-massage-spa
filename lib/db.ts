import { Pool } from 'pg';

// Create a PostgreSQL connection pool
// Uses DATABASE_URL from .env.local
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for Railway
  }
});

// Test the connection
pool.on('connect', () => {
  console.log('✅ Connected to Railway PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL connection error:', err);
});

// Export the pool for queries
export default pool;

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Helper function to get a client from the pool
export async function getClient() {
  const client = await pool.connect();
  return client;
}
