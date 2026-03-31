import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import { z } from 'zod';

const quoteSchema = z.object({
    fullName: z.string().min(1),
    businessName: z.string().optional(),
    phone: z.string().min(1),
    email: z.string().email(),
    productCategory: z.string().min(1),
    product: z.string().min(1),
    quantity: z.string().min(1),
    designReady: z.string().min(1),
    deliveryDate: z.string().optional(),
    notes: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = quoteSchema.parse(body);

        const lead = await prisma.lead.create({
            data: {
                type: 'quote',
                fullName: data.fullName,
                businessName: data.businessName || null,
                email: data.email,
                phone: data.phone,
                productCategory: data.productCategory,
                product: data.product,
                quantity: parseInt(data.quantity) || 0,
                designReady: data.designReady,
                deliveryDate: data.deliveryDate || null,
                notes: data.notes || null,
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
