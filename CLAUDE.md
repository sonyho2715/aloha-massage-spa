# Aloha Massage Spa

## Project Overview
Booking and management system for a massage spa in Hawaii. Features appointment scheduling, service management, and admin dashboard.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19
- **Database:** PostgreSQL on Railway + Prisma 7.x
- **Styling:** Tailwind CSS 4
- **Auth:** iron-session + bcryptjs + jose
- **Validation:** Zod 4
- **Icons:** Lucide React
- **Dates:** date-fns

## Key Features (Planned)
- Service catalog management
- Online booking system
- Admin dashboard
- Customer management
- Appointment calendar

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
import { getSession, requireAuth } from '@/lib/auth';
const session = await getSession();
```

## Environment Variables
- `DATABASE_URL` - Railway PostgreSQL connection string
- `SESSION_SECRET` - iron-session secret (generate with `openssl rand -base64 32`)

## Deployment
- **Hosting:** Vercel
- **Database:** Railway PostgreSQL

## Current Status
Fresh project setup. Ready for feature development.
