import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const items = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
        return NextResponse.json(items);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.testimonial.create({
            data: { clientName: body.clientName, businessName: body.businessName, reviewText: body.reviewText, rating: parseInt(body.rating) || 5, photoUrl: body.photoUrl, status: body.status || 'published' },
        });
        return NextResponse.json(item, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.testimonial.update({
            where: { id: body.id },
            data: { clientName: body.clientName, businessName: body.businessName, reviewText: body.reviewText, rating: parseInt(body.rating), photoUrl: body.photoUrl, status: body.status },
        });
        return NextResponse.json(item);
    } catch {
        return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
        await prisma.testimonial.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
