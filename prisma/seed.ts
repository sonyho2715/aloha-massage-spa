import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin123!', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@alohaspa.com' },
    update: {},
    create: {
      email: 'admin@alohaspa.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      phone: '(808) 123-4567',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create test customer
  const customerPassword = await bcrypt.hash('Customer123!', 12);
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      name: 'John Doe',
      password: customerPassword,
      role: 'CUSTOMER',
      phone: '(808) 555-0123',
    },
  });
  console.log('✅ Test customer created:', customer.email);

  // Create therapists
  const therapists = await Promise.all([
    prisma.therapist.upsert({
      where: { id: 'therapist-angela' },
      update: {},
      create: {
        id: 'therapist-angela',
        name: 'Angela Kahale',
        bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer. Her passion for preserving traditional healing arts led her to open Aloha Massage Spa.',
        specialties: ['Lomi Lomi', 'Hawaiian Healing', 'Relaxation Massage'],
        yearsExp: 15,
        isActive: true,
      },
    }),
    prisma.therapist.upsert({
      where: { id: 'therapist-tony' },
      update: {},
      create: {
        id: 'therapist-tony',
        name: 'Tony Martinez',
        bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques that help athletes and active individuals recover and perform at their best.',
        specialties: ['Deep Tissue', 'Sports Massage', 'Therapeutic Massage'],
        yearsExp: 10,
        isActive: true,
      },
    }),
    prisma.therapist.upsert({
      where: { id: 'therapist-andy' },
      update: {},
      create: {
        id: 'therapist-andy',
        name: 'Andy Chen',
        bio: 'Andy brings a calm, intuitive approach to massage therapy. His gentle techniques create a deeply relaxing experience for every guest.',
        specialties: ['Swedish', 'Relaxation', 'Hot Stone'],
        yearsExp: 6,
        isActive: true,
      },
    }),
    prisma.therapist.upsert({
      where: { id: 'therapist-malia' },
      update: {},
      create: {
        id: 'therapist-malia',
        name: 'Malia Kealoha',
        bio: 'Malia is passionate about skincare and specializes in treatments using Hawaiian botanicals. She customizes every facial to address your unique skin needs.',
        specialties: ['Facials', 'Skin Care', 'Body Treatments'],
        yearsExp: 8,
        isActive: true,
      },
    }),
  ]);
  console.log('✅ Created', therapists.length, 'therapists');

  // Create services
  const services = await Promise.all([
    // Massage services
    prisma.service.upsert({
      where: { id: 'service-lomi-lomi' },
      update: {},
      create: {
        id: 'service-lomi-lomi',
        name: 'Lomi Lomi Massage',
        description: 'Traditional Hawaiian massage using long, flowing strokes that mimic the rhythm of the ocean. This nurturing technique promotes deep relaxation and restores harmony to your body and spirit.',
        duration: 60,
        price: 9500,
        category: 'MASSAGE',
        sortOrder: 1,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-deep-tissue' },
      update: {},
      create: {
        id: 'service-deep-tissue',
        name: 'Deep Tissue Massage',
        description: 'Targeted pressure therapy that reaches the deeper layers of muscle tissue to release chronic tension, break down adhesions, and restore natural movement patterns.',
        duration: 60,
        price: 10500,
        category: 'MASSAGE',
        sortOrder: 2,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-swedish' },
      update: {},
      create: {
        id: 'service-swedish',
        name: 'Swedish Massage',
        description: 'Classic relaxation massage using gentle to moderate pressure with long, flowing strokes. Perfect for stress relief and overall wellness.',
        duration: 60,
        price: 8500,
        category: 'MASSAGE',
        sortOrder: 3,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-hot-stone' },
      update: {},
      create: {
        id: 'service-hot-stone',
        name: 'Hot Stone Massage',
        description: 'Smooth, heated basalt stones are placed on key points and used to massage the body, melting away tension and promoting deep relaxation.',
        duration: 75,
        price: 12500,
        category: 'MASSAGE',
        sortOrder: 4,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-sports' },
      update: {},
      create: {
        id: 'service-sports',
        name: 'Sports Massage',
        description: 'Designed for athletes and active individuals. Focuses on areas of the body that are overused from repetitive movements.',
        duration: 60,
        price: 11000,
        category: 'MASSAGE',
        sortOrder: 5,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-prenatal' },
      update: {},
      create: {
        id: 'service-prenatal',
        name: 'Prenatal Massage',
        description: 'Gentle, nurturing massage designed specifically for expectant mothers. Helps relieve pregnancy-related discomforts.',
        duration: 60,
        price: 9500,
        category: 'MASSAGE',
        sortOrder: 6,
      },
    }),
    // Facial services
    prisma.service.upsert({
      where: { id: 'service-tropical-facial' },
      update: {},
      create: {
        id: 'service-tropical-facial',
        name: 'Tropical Facial',
        description: 'Rejuvenating facial featuring local Hawaiian botanicals including noni, kukui nut, and tropical fruit extracts for radiant, hydrated skin.',
        duration: 45,
        price: 7500,
        category: 'FACIAL',
        sortOrder: 10,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-anti-aging' },
      update: {},
      create: {
        id: 'service-anti-aging',
        name: 'Anti-Aging Facial',
        description: 'Advanced treatment targeting fine lines and wrinkles with collagen-boosting serums and specialized massage techniques.',
        duration: 60,
        price: 9500,
        category: 'FACIAL',
        sortOrder: 11,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-deep-cleansing' },
      update: {},
      create: {
        id: 'service-deep-cleansing',
        name: 'Deep Cleansing Facial',
        description: 'Thorough cleansing treatment that purifies pores, removes impurities, and leaves skin refreshed and balanced.',
        duration: 45,
        price: 6500,
        category: 'FACIAL',
        sortOrder: 12,
      },
    }),
    // Body treatments
    prisma.service.upsert({
      where: { id: 'service-salt-scrub' },
      update: {},
      create: {
        id: 'service-salt-scrub',
        name: 'Hawaiian Sea Salt Scrub',
        description: 'Exfoliating body treatment using Hawaiian sea salt and tropical oils to reveal smooth, glowing skin.',
        duration: 45,
        price: 7000,
        category: 'BODY_TREATMENT',
        sortOrder: 20,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-body-wrap' },
      update: {},
      create: {
        id: 'service-body-wrap',
        name: 'Coconut Body Wrap',
        description: 'Nourishing body wrap infused with pure coconut oil and tropical extracts. Deeply hydrates and softens skin.',
        duration: 60,
        price: 8500,
        category: 'BODY_TREATMENT',
        sortOrder: 21,
      },
    }),
    // Packages
    prisma.service.upsert({
      where: { id: 'service-couples' },
      update: {},
      create: {
        id: 'service-couples',
        name: 'Couples Retreat',
        description: 'Share a relaxing experience in our couples suite with side-by-side massages. Includes champagne and chocolates.',
        duration: 90,
        price: 22000,
        category: 'PACKAGE',
        sortOrder: 30,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-island-escape' },
      update: {},
      create: {
        id: 'service-island-escape',
        name: 'Island Escape',
        description: 'Complete spa journey including body scrub, wrap, and full-body massage. The ultimate relaxation experience.',
        duration: 150,
        price: 25000,
        category: 'PACKAGE',
        sortOrder: 31,
      },
    }),
    prisma.service.upsert({
      where: { id: 'service-quick-refresh' },
      update: {},
      create: {
        id: 'service-quick-refresh',
        name: 'Quick Refresh',
        description: 'Perfect for a lunch break. Includes 30-minute massage and express facial to refresh and revitalize.',
        duration: 60,
        price: 11000,
        category: 'PACKAGE',
        sortOrder: 32,
      },
    }),
  ]);
  console.log('✅ Created', services.length, 'services');

  // Create business hours
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let i = 0; i < 7; i++) {
    await prisma.businessHours.upsert({
      where: { dayOfWeek: i },
      update: {},
      create: {
        dayOfWeek: i,
        isOpen: i !== 0, // Closed on Sunday
        openTime: i === 0 ? '10:00' : '09:00',
        closeTime: i === 0 ? '18:00' : '20:00',
      },
    });
  }
  console.log('✅ Created business hours');

  // Create site settings
  await prisma.siteSettings.upsert({
    where: { id: 'settings' },
    update: {},
    create: {
      id: 'settings',
      businessName: 'Aloha Massage Spa',
      phone: '(808) 123-4567',
      email: 'aloha@massagespa.com',
      address: '123 Kalakaua Ave, Honolulu, HI 96815',
      bookingLeadTime: 24,
      cancellationWindow: 24,
      taxRate: 0,
    },
  });
  console.log('✅ Created site settings');

  // Create sample reviews
  const reviews = await Promise.all([
    prisma.review.create({
      data: {
        name: 'Sarah M.',
        rating: 5,
        comment: "The best massage I've ever had! Angela has magic hands. I felt completely renewed.",
        isApproved: true,
        isFeatured: true,
      },
    }),
    prisma.review.create({
      data: {
        name: 'James K.',
        rating: 5,
        comment: 'Perfect couples retreat for our anniversary. The ambiance and service were exceptional.',
        isApproved: true,
        isFeatured: true,
      },
    }),
    prisma.review.create({
      data: {
        name: 'Lisa T.',
        rating: 5,
        comment: 'Finally found relief from my chronic back pain. Tony really knows his craft.',
        isApproved: true,
        isFeatured: true,
      },
    }),
  ]);
  console.log('✅ Created', reviews.length, 'reviews');

  console.log('\n🎉 Database seeded successfully!');
  console.log('\nTest accounts:');
  console.log('  Admin: admin@alohaspa.com / Admin123!');
  console.log('  Customer: customer@example.com / Customer123!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
