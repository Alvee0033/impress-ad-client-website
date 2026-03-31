import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const admin = await prisma.adminUser.findUnique({
                    where: { email: credentials.email },
                });

                if (!admin || admin.status !== 'active') {
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, admin.passwordHash);
                if (!isValid) {
                    return null;
                }

                // Update last login
                await prisma.adminUser.update({
                    where: { id: admin.id },
                    data: { lastLoginAt: new Date() },
                });

                return {
                    id: admin.id,
                    name: admin.name,
                    email: admin.email,
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as Record<string, unknown>).id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || 'impress-ad-secret-key-change-in-production',
});

export { handler as GET, handler as POST };
