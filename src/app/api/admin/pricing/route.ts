import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const items = await prisma.pricingTier.findMany({ include: { productCategory: true }, orderBy: { label: 'asc' } });
        return NextResponse.json(items);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.pricingTier.create({
            data: { productCategoryId: body.productCategoryId, label: body.label, quantityRange: body.quantityRange, pricePerUnit: parseFloat(body.pricePerUnit), notes: body.notes },
        });
        return NextResponse.json(item, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const item = await prisma.pricingTier.update({
            where: { id: body.id },
            data: { productCategoryId: body.productCategoryId, label: body.label, quantityRange: body.quantityRange, pricePerUnit: parseFloat(body.pricePerUnit), notes: body.notes },
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
        await prisma.pricingTier.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
