import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function GET(_r: Request, { params }: { params: { id: string } }) { return NextResponse.json(await prisma.ingestionRun.findUniqueOrThrow({ where: { id: params.id }, include: { keyword: true, postKeywords: { include: { post: true } } } })); }
