import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export async function POST(request: Request, { params }: { params: { id: string } }) { const { note } = await request.json(); return NextResponse.json(await prisma.postNote.create({ data: { postId: params.id, note } }), { status: 201 }); }
