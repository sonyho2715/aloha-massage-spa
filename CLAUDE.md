# Aloha Massage Spa

## Project Overview
Booking and management system for a massage spa in Hawaii. Features appointment scheduling, service management, customer portal, and admin dashboard.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19
- **Database:** PostgreSQL on Railway + Prisma 7.x with `@prisma/adapter-pg`
- **Styling:** Tailwind CSS 4
- **Auth:** iron-session + bcryptjs
- **Validation:** Zod 4
- **Icons:** Lucide React
- **Dates:** date-fns

## Implemented Features
- **Public Pages:** Home, Services, About, Contact
- **Online Booking:** Multi-step booking flow with service/time/therapist selection
- **Authentication:** Login, Register with session management
- **Customer Dashboard:** View/manage appointments
- **Admin Dashboard:** Stats, bookings overview, quick actions
- **Database Models:** Users, Services, Therapists, Bookings, GiftCards, Reviews

## Project Structure
```
app/
├── (auth)/           # Login, Register pages
├── (dashboard)/      # Customer dashboard
├── admin/            # Admin dashboard
├── actions/          # Server Actions (auth, booking)
├── book/             # Booking flow
├── services/         # Service catalog
├── about/            # About page
├── contact/          # Contact page
├── generated/prisma/ # Prisma client (generated)
components/
├── ui/               # Reusable components (Button, Card, Input, etc.)
├── Navigation.tsx    # Site header
├── Footer.tsx        # Site footer
lib/
├── db.ts             # Prisma client singleton
├── auth.ts           # Session utilities
├── utils.ts          # Helper functions
├── validations/      # Zod schemas
prisma/
├── schema.prisma     # Database schema
├── seed.ts           # Seed data
```

## Database Commands
```bash
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to DB
npm run db:migrate    # Create migration
npm run db:seed       # Seed database
npm run db:studio     # Open Prisma Studio
```

## Auth Pattern
Uses iron-session:
```typescript
import { getSession, requireAuth, requireAdmin, getCurrentUser } from '@/lib/auth';

// Get current session
const session = await getSession();

// Require authentication (throws if not logged in)
const session = await requireAuth();

// Require admin role
const session = await requireAdmin();

// Get current user info (returns null if not logged in)
const user = await getCurrentUser();
```

## Server Actions
```typescript
// Authentication
import { login, register, logout } from '@/app/actions/auth';

// Bookings
import { createBooking, cancelBooking, updateBookingStatus } from '@/app/actions/booking';
```

## Environment Variables
- `DATABASE_URL` - Railway PostgreSQL connection string
- `SESSION_SECRET` - iron-session secret (generate with `openssl rand -base64 32`)

## Test Accounts (after seeding)
- **Admin:** admin@alohaspa.com / Admin123!
- **Customer:** customer@example.com / Customer123!

## Deployment
- **Hosting:** Vercel (auto-deploy from main)
- **Database:** Railway PostgreSQL

## Next Steps
- [ ] Connect to Railway database and run migrations
- [ ] Set environment variables in Vercel
- [ ] Test booking flow end-to-end
- [ ] Add email notifications (Resend)
- [ ] Implement gift card purchase flow
- [ ] Add calendar view for admin
- [ ] Implement therapist availability management
