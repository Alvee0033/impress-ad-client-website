import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try { return NextResponse.json(await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })); }
    catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function POST(request: Request) {
    try {
        const b = await request.json();
        const item = await prisma.post.create({ data: { title: b.title, slug: b.slug || b.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''), excerpt: b.excerpt, body: b.body, featuredImage: b.featuredImage, author: b.author, publishedAt: b.status === 'published' ? new Date() : null, status: b.status || 'draft' } });
        return NextResponse.json(item, { status: 201 });
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function PUT(request: Request) {
    try {
        const b = await request.json();
        const item = await prisma.post.update({ where: { id: b.id }, data: { title: b.title, slug: b.slug, excerpt: b.excerpt, body: b.body, featuredImage: b.featuredImage, author: b.author, publishedAt: b.status === 'published' && !b.publishedAt ? new Date() : b.publishedAt, status: b.status } });
        return NextResponse.json(item);
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(request: Request) {
    try {
        const id = new URL(request.url).searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
        await prisma.post.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
