# Railway Setup Guide - Aloha Massage Spa

## Step 1: Create Railway Project

1. **Go to Railway Dashboard:**
   https://railway.app/dashboard

2. **Click "New Project"**

3. **Choose "Empty Project"**

4. **Name it:** `Aloha Massage Spa`

5. **Project created!** ✅

---

## Step 2: Add PostgreSQL Database

1. **In your new Aloha project, click "+ New"**

2. **Select "Database"**

3. **Choose "PostgreSQL"**

4. **Wait for deployment** (1-2 minutes)

5. **PostgreSQL created!** ✅

---

## Step 3: Enable TCP Proxy (Get PUBLIC URL)

1. **Click on the PostgreSQL service**

2. **Go to "Settings" tab**

3. **Scroll to "Networking" section**

4. **Find "TCP Proxy" toggle**

5. **Enable TCP Proxy**

6. **You'll see:**
   - **Public Host:** something like `shuttle.proxy.rlwy.net` or `monorail.proxy.rlwy.net`
   - **Public Port:** a number like `12345`

7. **Copy BOTH the Host and Port**

---

## Step 4: Get Database Credentials

1. **Still in PostgreSQL service, go to "Variables" tab**

2. **Look for these variables:**
   - `PGUSER` (usually "postgres")
   - `PGPASSWORD` (long random string)
   - `PGDATABASE` (usually "railway")

3. **Copy the password**

---

## Step 5: Build Your PUBLIC DATABASE_URL

**Format:**
```
postgresql://[USER]:[PASSWORD]@[PUBLIC_HOST]:[PUBLIC_PORT]/[DATABASE]
```

**Example:**
```
postgresql://postgres:ABC123XYZ@shuttle.proxy.rlwy.net:12345/railway
```

**Your URL will be:**
```
postgresql://postgres:[YOUR_PASSWORD]@[YOUR_PUBLIC_HOST]:[YOUR_PUBLIC_PORT]/railway
```

---

## Step 6: Share Information with Claude Code

Once you have:
- ✅ Public Host
- ✅ Public Port
- ✅ Password

Share them with Claude Code in this format:

```
Host: shuttle.proxy.rlwy.net
Port: 12345
Password: ABC123XYZ
```

Claude Code will then:
1. Update your .env.local file
2. Create database schema
3. Test the connection
4. Set up your booking system tables

---

## What Database Tables Will Be Created

For Aloha Massage Spa, we'll create:

### 1. **services** table
- Service name (Lomi Lomi, Deep Tissue, etc.)
- Duration
- Price
- Description

### 2. **bookings** table
- Customer name
- Email
- Phone
- Service selected
- Date/time
- Status (pending, confirmed, completed, cancelled)
- Notes

### 3. **customers** table (optional)
- Name
- Email
- Phone
- Preferences
- Booking history

### 4. **availability** table (optional)
- Business hours
- Blocked time slots
- Holiday closures

---

## Next Steps After Setup

Once Railway is connected, you can:

1. **Build booking form** (Next.js form → PostgreSQL)
2. **Add admin dashboard** (view/manage bookings)
3. **Email notifications** (SendGrid/Resend)
4. **Calendar integration** (Google Calendar sync)
5. **Payment integration** (Stripe/Square)

---

## Need Help?

If you get stuck:
1. Take a screenshot of the Railway dashboard
2. Share it with Claude Code
3. Claude will help troubleshoot

---

**Ready? Start with Step 1 and work your way down!**
