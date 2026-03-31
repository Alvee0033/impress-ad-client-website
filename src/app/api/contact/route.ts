import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import { z } from 'zod';

const contactSchema = z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().min(1),
    subject: z.string().min(1),
    message: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = contactSchema.parse(body);

        const lead = await prisma.lead.create({
            data: {
                type: 'contact',
                fullName: data.fullName,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
                status: 'new',
            },
        });

        return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
