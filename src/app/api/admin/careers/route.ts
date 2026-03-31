import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try { return NextResponse.json(await prisma.job.findMany({ orderBy: { createdAt: 'desc' } })); }
    catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function POST(request: Request) {
    try {
        const b = await request.json();
        const item = await prisma.job.create({ data: { title: b.title, department: b.department, location: b.location, summary: b.summary, deadline: b.deadline ? new Date(b.deadline) : null, status: b.status || 'active' } });
        return NextResponse.json(item, { status: 201 });
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function PUT(request: Request) {
    try {
        const b = await request.json();
        const item = await prisma.job.update({ where: { id: b.id }, data: { title: b.title, department: b.department, location: b.location, summary: b.summary, deadline: b.deadline ? new Date(b.deadline) : null, status: b.status } });
        return NextResponse.json(item);
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(request: Request) {
    try {
        const id = new URL(request.url).searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
        await prisma.job.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
