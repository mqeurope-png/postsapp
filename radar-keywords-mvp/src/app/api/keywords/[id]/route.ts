export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { keywordSchema } from '@/lib/validators/keyword';
export async function GET(_r: Request, { params }: { params: { id: string } }) { return NextResponse.json(await prisma.keyword.findUniqueOrThrow({ where: { id: params.id } })); }
export async function PATCH(request: Request, { params }: { params: { id: string } }) { const data = keywordSchema.partial().parse(await request.json()); return NextResponse.json(await prisma.keyword.update({ where: { id: params.id }, data })); }
export async function DELETE(_r: Request, { params }: { params: { id: string } }) { return NextResponse.json(await prisma.keyword.update({ where: { id: params.id }, data: { status: 'archived' } })); }
