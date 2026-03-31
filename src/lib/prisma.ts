import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Truly lazy proxy for the prisma export
export const prisma = new Proxy({} as PrismaClient, {
    get: (target, prop) => {
        if (!globalForPrisma.prisma) {
            // Initialize on first access
            if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
                // If on Vercel/Production without DB, return a fake client
                globalForPrisma.prisma = new Proxy({}, {
                    get: () => () => ({
                        findMany: async () => [],
                        findUnique: async () => null,
                        count: async () => 0,
                        create: async () => ({}),
                        update: async () => ({}),
                        delete: async () => ({}),
                        findFirst: async () => null,
                    })
                }) as unknown as PrismaClient;
            } else {
                globalForPrisma.prisma = new PrismaClient();
            }
        }
        return (globalForPrisma.prisma as any)[prop];
    }
});
