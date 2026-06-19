import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function GET() { return NextResponse.json(await prisma.ingestionRun.findMany({ include: { keyword: true }, orderBy: { startedAt: 'desc' }, take: 100 })); }
