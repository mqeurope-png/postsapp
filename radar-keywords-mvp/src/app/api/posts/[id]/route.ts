import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function GET(_r: Request, { params }: { params: { id: string } }) { return NextResponse.json(await prisma.post.findUniqueOrThrow({ where: { id: params.id }, include: { postKeywords: { include: { keyword: true, ingestionRun: true } }, classifications: true, scores: true, notes: { orderBy: { createdAt: 'desc' } }, assets: true } })); }
