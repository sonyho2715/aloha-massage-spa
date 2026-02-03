'use server';

import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { loginSchema, registerSchema } from '@/lib/validations/user';

export async function login(formData: FormData) {
  try {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const validated = loginSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        error: 'Invalid email or password',
        errors: validated.error.issues,
      };
    }

    const user = await db.user.findUnique({
      where: { email: validated.data.email.toLowerCase() },
    });

    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }

    const isValidPassword = await bcrypt.compare(validated.data.password, user.password);
    if (!isValidPassword) {
      return { success: false, error: 'Invalid email or password' };
    }

    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.name = user.name;
    session.role = user.role;
    session.isLoggedIn = true;
    await session.save();

    return {
      success: true,
      redirectTo: user.role === 'ADMIN' ? '/admin' : '/dashboard',
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function register(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    };

    const validated = registerSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        error: 'Please fix the errors below',
        errors: validated.error.issues,
      };
    }

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email: validated.data.email.toLowerCase() },
    });

    if (existingUser) {
      return { success: false, error: 'An account with this email already exists' };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validated.data.password, 12);

    // Create user
    const user = await db.user.create({
      data: {
        name: validated.data.name,
        email: validated.data.email.toLowerCase(),
        phone: validated.data.phone,
        password: hashedPassword,
        role: 'CUSTOMER',
      },
    });

    // Create session
    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.name = user.name;
    session.role = user.role;
    session.isLoggedIn = true;
    await session.save();

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function logout() {
  try {
    const session = await getSession();
    session.destroy();
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
