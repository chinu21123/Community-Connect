import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
});

export async function POST(request: NextRequest) {
  const { phone, password } = await request.json();

  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM users WHERE phone = $1', [phone]);
    client.release();

    if (res.rows.length === 0) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    const valid = await bcrypt.compare(password, res.rows[0].password);

    if (valid) {
      return NextResponse.json({ success: true, message: 'Login successful' });
    } else {
      return NextResponse.json({ success: false, message: 'Incorrect password' }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error', error: err }, { status: 500 });
  }
}
