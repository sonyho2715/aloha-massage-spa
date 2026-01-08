# Aloha Massage Spa

## Project Overview
Website for Aloha Massage Spa in Hawaii. Features service information, online booking, gallery, and contact.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Database:** PostgreSQL (raw pg driver, NOT Prisma)
- **Styling:** Tailwind CSS 4
- **Node:** 22.x

## Important: No Prisma
This project uses raw `pg` driver, not Prisma. Database queries are written directly:
```typescript
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const result = await pool.query('SELECT * FROM services');
```

## App Structure
```
app/
├── about/          # About the spa
├── services/       # Service listings
├── book/           # Booking system
├── gallery/        # Photo gallery
├── blog/           # Blog posts
├── contact/        # Contact form
├── faq/            # FAQs
├── why-us/         # Why choose us
├── terms/          # Terms of service
└── disclaimer/     # Legal disclaimer
```

## Key Features
- Service menu with pricing
- Online booking (time-slot based)
- Photo gallery
- Contact form
- Blog for SEO

## Database Scripts
```bash
npm run test-db     # Test database connection
```

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string

## Deployment
- **Hosting:** Vercel or Netlify (has @netlify/plugin-nextjs)
- **Database:** Railway PostgreSQL

## Notes
- Uses raw SQL queries, not an ORM
- Consider migrating to Prisma for type safety
- Booking system uses time-slot based scheduling (not calendar)
