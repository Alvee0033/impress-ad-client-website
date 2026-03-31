import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: { category: true },
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const product = await prisma.product.create({
            data: {
                categoryId: body.categoryId,
                name: body.name,
                slug: body.slug || body.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
                shortDescription: body.shortDescription,
                fullDescription: body.fullDescription,
                images: body.images,
                variants: body.variants,
                moq: body.moq ? parseInt(body.moq) : null,
                leadTime: body.leadTime,
                startingPrice: body.startingPrice ? parseFloat(body.startingPrice) : null,
                status: body.status || 'active',
            },
        });
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const product = await prisma.product.update({
            where: { id: body.id },
            data: {
                categoryId: body.categoryId,
                name: body.name,
                slug: body.slug,
                shortDescription: body.shortDescription,
                fullDescription: body.fullDescription,
                images: body.images,
                variants: body.variants,
                moq: body.moq ? parseInt(body.moq) : null,
                leadTime: body.leadTime,
                startingPrice: body.startingPrice ? parseFloat(body.startingPrice) : null,
                status: body.status,
            },
        });
        return NextResponse.json(product);
    } catch {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
        await prisma.product.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}
