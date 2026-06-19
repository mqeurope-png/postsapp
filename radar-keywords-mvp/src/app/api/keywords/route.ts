export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { keywordSchema } from '@/lib/validators/keyword';
export async function GET() { return NextResponse.json(await prisma.keyword.findMany({ orderBy: { createdAt: 'desc' }, include: { _count: { select: { postKeywords: true } } } })); }
export async function POST(request: Request) { const data = keywordSchema.parse(await request.json()); return NextResponse.json(await prisma.keyword.create({ data }), { status: 201 }); }
