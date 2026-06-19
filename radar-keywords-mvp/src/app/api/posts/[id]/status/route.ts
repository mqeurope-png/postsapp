import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function PATCH(request: Request, { params }: { params: { id: string } }) { const { status } = await request.json(); return NextResponse.json(await prisma.post.update({ where: { id: params.id }, data: { status } })); }
