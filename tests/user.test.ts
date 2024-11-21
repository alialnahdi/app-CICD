// tests/user.test.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User Model', () => {
  beforeAll(async () => {
    // Optional: Seed the database
    await prisma.user.deleteMany();
  });

  it('should create a new user', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'testuser@example.com',
      },
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Test User');
    expect(user.email).toBe('testuser@example.com');
  });

  afterAll(async () => {
    // Cleanup
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });
});
