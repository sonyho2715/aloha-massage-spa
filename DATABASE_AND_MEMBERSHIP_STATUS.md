# 🗄️ Database & Membership Status

## Current Database Configuration

### **Platform: Railway PostgreSQL** ✅

**Connection Details:**
- **Host:** ballast.proxy.rlwy.net
- **Port:** 26709
- **Database:** railway
- **Connection String:** Stored in `.env.local`

---

## Database Schema (Current)

### **Tables Implemented:**

#### 1. **services**
- Stores all massage and spa services
- Multilingual support (EN, VI, ZH, JA)
- Pricing and duration information
- Category classification
- Active/inactive status

#### 2. **customers**
- Customer contact information
- Email and phone tracking
- Preferred language
- Purchase history tracking (total_bookings, total_spent)
- Notes field for preferences

#### 3. **bookings**
- Complete appointment management
- Links to customers and services
- Status tracking (pending, confirmed, completed, cancelled, no_show)
- Date/time scheduling
- Customer and therapist notes
- Multilingual support

#### 4. **business_hours**
- Operating hours by day of week
- Currently set: 9 AM - 8 PM, 7 days/week
- Configurable closed days

### **Database Views:**
- `upcoming_bookings` - Future appointments
- `todays_bookings` - Today's schedule

---

## Membership System Status

### **Current State: NOT IMPLEMENTED** ⚠️

The database currently tracks:
- ✅ Customer information
- ✅ Booking history
- ✅ Total spending
- ❌ No membership/authentication system
- ❌ No user accounts
- ❌ No password storage
- ❌ No membership tiers

### **What Exists:**
The `customers` table tracks:
- Customer contact info
- Total bookings count
- Total amount spent
- Customer notes

This provides a foundation for implementing a loyalty/membership program in the future.

---

## AI Chat Integration

### **New Feature: AI Chat Widget** ✅

**Replaces:** FloatingBookButton
**Component:** `components/AIChatWidget.tsx`

**Capabilities:**
1. **24/7 Availability** - Always online to help
2. **Service Information** - Answers questions about all services and pricing
3. **Booking Assistance** - Guides users to book appointments
4. **Business Hours** - Provides operating hours
5. **Gift Cards** - Information about gift card purchases
6. **Membership Inquiries** - Explains upcoming membership benefits
7. **Quick Actions** - One-click common questions

**Current Implementation:**
- ✅ Smart knowledge base with spa service info
- ✅ Beautiful UI matching luxury wellness design
- ✅ Quick action buttons
- ✅ Typing indicators and timestamps
- ✅ Mobile responsive
- ⚠️ Simulated AI responses (not connected to external API yet)

**Future Enhancement Options:**
- [ ] Connect to OpenAI GPT-4 API
- [ ] Connect to Anthropic Claude API
- [ ] Direct booking through chat
- [ ] Check real-time availability via chat
- [ ] Customer account lookup
- [ ] Personalized recommendations based on history

---

## Recommended Next Steps

### **Phase 1: Membership Foundation** (1-2 weeks)

1. **Add User Authentication**
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL,
     password_hash VARCHAR(255) NOT NULL,
     customer_id INT REFERENCES customers(id),
     role VARCHAR(20) DEFAULT 'customer',
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

2. **Add Membership Tiers**
   ```sql
   CREATE TABLE membership_tiers (
     id SERIAL PRIMARY KEY,
     name VARCHAR(50) NOT NULL,
     monthly_fee DECIMAL(10,2),
     discount_percentage INT,
     benefits JSONB,
     is_active BOOLEAN DEFAULT true
   );

   CREATE TABLE customer_memberships (
     id SERIAL PRIMARY KEY,
     customer_id INT REFERENCES customers(id),
     tier_id INT REFERENCES membership_tiers(id),
     start_date DATE NOT NULL,
     end_date DATE,
     status VARCHAR(20) DEFAULT 'active',
     auto_renew BOOLEAN DEFAULT true
   );
   ```

3. **Implement Authentication**
   - Use iron-session (already in tech stack)
   - Secure password hashing with bcrypt
   - Email verification
   - Password reset flow

### **Phase 2: Membership Features** (2-3 weeks)

1. **Member Dashboard**
   - View booking history
   - Track loyalty points
   - See membership status
   - Manage payment methods

2. **Loyalty Program**
   ```sql
   CREATE TABLE loyalty_points (
     id SERIAL PRIMARY KEY,
     customer_id INT REFERENCES customers(id),
     points INT DEFAULT 0,
     earned_date TIMESTAMP,
     expiry_date DATE,
     source VARCHAR(50)
   );
   ```

3. **Member Benefits**
   - Priority booking windows
   - 10-20% discounts based on tier
   - Birthday month specials
   - Referral rewards

### **Phase 3: AI Chat Enhancement** (1 week)

1. **Connect to Real AI API**
   - Option A: OpenAI GPT-4 (`gpt-4-turbo`)
   - Option B: Anthropic Claude (`claude-3-5-sonnet`)
   - Option C: Both with fallback logic

2. **Database Integration**
   - Query real-time availability
   - Check customer booking history
   - Personalized recommendations
   - Direct booking creation

3. **Advanced Features**
   - Multi-language support
   - Voice input option
   - SMS notification integration
   - Email transcripts of conversations

---

## Current API Endpoints

### **Existing:**
- `POST /api/bookings` - Create new booking
- `GET /api/services` - Fetch available services

### **Needed for Membership:**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/bookings` - Get user's booking history
- `POST /api/membership/subscribe` - Subscribe to membership
- `GET /api/membership/status` - Check membership status

---

## Environment Variables Needed

### **Current:**
```env
DATABASE_URL=postgresql://... # ✅ Already configured
```

### **For Membership:**
```env
SESSION_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=https://your-domain.com
```

### **For AI Chat (Choose One):**
```env
# Option A: OpenAI
OPENAI_API_KEY=sk-...

# Option B: Anthropic
ANTHROPIC_API_KEY=sk-ant-...
```

### **For Notifications:**
```env
# SendGrid for emails
SENDGRID_API_KEY=...
SENDGRID_FROM_EMAIL=...

# Twilio for SMS
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=...
```

---

## Cost Estimates

### **Database (Railway):**
- Current: Included in Hobby Plan ($5/month)
- With membership: May need Pro Plan ($20/month) if scaling

### **AI Chat API:**
- **OpenAI GPT-4 Turbo:**
  - Input: $0.01 per 1K tokens
  - Output: $0.03 per 1K tokens
  - Estimated: $20-50/month for moderate usage

- **Anthropic Claude 3.5 Sonnet:**
  - Input: $0.003 per 1K tokens
  - Output: $0.015 per 1K tokens
  - Estimated: $10-30/month for moderate usage

### **Notifications:**
- **SendGrid:** Free up to 100 emails/day
- **Twilio SMS:** ~$0.0075 per SMS

**Total Estimated Monthly Cost:**
- Basic (current): $5/month
- With Membership + AI: $35-75/month

---

## Migration Path (Zero Downtime)

1. **Week 1-2:** Add new tables alongside existing ones
2. **Week 3:** Implement authentication (optional at first)
3. **Week 4:** Soft launch membership beta
4. **Week 5:** Connect AI to real API
5. **Week 6:** Full public launch with promotions

---

## Security Considerations

### **Must Implement Before Membership:**

1. **Password Security**
   - Bcrypt hashing (cost factor 12+)
   - No plaintext passwords ever
   - Secure password reset tokens

2. **Session Management**
   - Secure HTTP-only cookies
   - CSRF protection
   - Session timeout

3. **Data Protection**
   - HTTPS only (Vercel provides this)
   - Input validation with Zod
   - SQL injection prevention (Prisma/parameterized queries)
   - Rate limiting on sensitive endpoints

4. **PCI Compliance** (if storing cards)
   - Use Stripe/Square tokenization
   - Never store card numbers
   - PCI-DSS compliant payment processor

---

## Documentation References

**Railway Database:**
- Connection URL: See `.env.local`
- Schema: See `database/schema.sql`
- Migrations: Manual SQL for now

**AI Chat:**
- Component: `components/AIChatWidget.tsx`
- Knowledge base: Inline in component (can be extracted)
- Styling: Matches luxury wellness theme

---

**Status Updated:** November 18, 2025
**Next Review:** When membership requirements are finalized
