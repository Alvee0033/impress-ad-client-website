import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const items = await prisma.portfolioItem.findMany({
            include: { category: true },
            orderBy: { sortOrder: 'asc' },
        });
        return NextResponse.json(items);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.portfolioItem.create({
            data: {
                categoryId: body.categoryId || null,
                imageUrl: body.imageUrl,
                title: body.title,
                description: body.description,
                clientName: body.clientName,
                status: body.status || 'published',
                sortOrder: body.sortOrder || 0,
            },
        });
        return NextResponse.json(item, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.portfolioItem.update({
            where: { id: body.id },
            data: {
                categoryId: body.categoryId || null,
                imageUrl: body.imageUrl,
                title: body.title,
                description: body.description,
                clientName: body.clientName,
                status: body.status,
                sortOrder: body.sortOrder,
            },
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
        await prisma.portfolioItem.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
