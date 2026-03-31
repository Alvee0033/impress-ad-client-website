import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const settings = await prisma.settings.findMany();
        const result: Record<string, string> = {};
        settings.forEach(s => { result[s.key] = s.value; });
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        for (const [key, value] of Object.entries(body)) {
            await prisma.settings.upsert({
                where: { key },
                update: { value: String(value) },
                create: { key, value: String(value) },
            });
        }
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
