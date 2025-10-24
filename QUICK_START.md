# 🌺 Aloha Massage Spa - Railway PostgreSQL Quick Start

## 📋 What I've Created For You

✅ **RAILWAY_SETUP_GUIDE.md** - Step-by-step Railway setup instructions
✅ **database/schema.sql** - Complete database schema with:
   - Services table (Lomi Lomi, Deep Tissue, Reflexology, Combo)
   - Bookings table (appointments with status tracking)
   - Customers table (contact info and history)
   - Business hours table (9 AM - 8 PM, 7 days)
   - Auto-populated with your 4 services!

✅ **scripts/test-railway-db.js** - Database connection test script
✅ **.env.local.template** - Environment variables template

---

## 🚀 Your Action Items (Do This Now)

### **STEP 1: Create Railway Project** (5 minutes)

1. Go to: https://railway.app/dashboard
2. Click "New Project"
3. Choose "Empty Project"
4. Name it: "Aloha Massage Spa"
5. Click "+ New" → "Database" → "PostgreSQL"
6. Wait for deployment

### **STEP 2: Enable TCP Proxy** (2 minutes)

1. Click on PostgreSQL service
2. Settings → Networking
3. Enable "TCP Proxy"
4. **Copy these 3 things:**
   - Public Host: `__________.proxy.rlwy.net`
   - Public Port: `_____`
   - Go to Variables tab → copy `PGPASSWORD`

### **STEP 3: Share With Me**

Tell Claude Code:
```
Host: shuttle.proxy.rlwy.net
Port: 12345
Password: ABC123XYZ
```

### **STEP 4: Claude Code Will Do The Rest!**

Once you give me the info, I'll:
1. ✅ Update your .env.local file
2. ✅ Import the database schema
3. ✅ Test the connection
4. ✅ Verify all tables are created
5. ✅ Show you the data (4 services pre-loaded!)

---

## 📊 What's In The Database

### **Services Table** (Pre-loaded!)
1. **Lomi Lomi Massage** - $80 / 60 min
2. **Deep Tissue Massage** - $90 / 60 min
3. **Foot Reflexology** - $50 / 45 min
4. **Combo Massage** - $70 / 60 min

All services include multilingual names (EN, VI, ZH, JA)!

### **Bookings Table**
Stores all appointment bookings with:
- Customer info
- Service selected
- Date/time
- Status (pending/confirmed/completed/cancelled)
- Notes

### **Customers Table**
Tracks customer history:
- Contact information
- Preferred language
- Total bookings
- Total spent

### **Business Hours**
Default hours: 9 AM - 8 PM, 7 days a week

---

## 🎯 After Setup, We Can Build:

### **Phase 1: Basic Booking** (This Week)
- [ ] Simple booking form on website
- [ ] Store bookings in Railway PostgreSQL
- [ ] Email confirmation (SendGrid)
- [ ] View bookings in admin panel

### **Phase 2: Advanced Features** (Next Week)
- [ ] Calendar view of bookings
- [ ] Prevent double-booking
- [ ] SMS reminders (Twilio)
- [ ] Payment integration (Stripe/Square)

### **Phase 3: Customer Portal** (Next Month)
- [ ] Customer login
- [ ] View booking history
- [ ] Rebook favorite services
- [ ] Loyalty points/rewards

---

## 💰 Railway Costs

**Railway Hobby Plan: $5/month**
- Includes PostgreSQL
- 500 hours execution time
- More than enough for a spa website

---

## 🆘 Need Help?

**If Railway CLI isn't working**, that's OK! Just:
1. Use the web dashboard (easier anyway)
2. Follow RAILWAY_SETUP_GUIDE.md
3. Give me the 3 values (host, port, password)
4. I'll handle the rest!

---

**Ready? Go to Railway Dashboard and start Step 1!**

https://railway.app/dashboard
