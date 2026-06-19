export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { upsertCandidate } from '@/lib/posts/create-post';
import type { PostCandidate } from '@/lib/ingestion/types';
export async function POST(request: Request) { const { keywordId, candidates } = await request.json() as { keywordId: string; candidates: PostCandidate[] }; const run = await prisma.ingestionRun.create({ data: { keywordId, providerName: 'manual-json', status: 'running' } }); let created = 0, duplicates = 0; for (const candidate of candidates) { const result = await upsertCandidate(prisma, candidate, keywordId, run.id); result.duplicate ? duplicates++ : created++; } return NextResponse.json(await prisma.ingestionRun.update({ where: { id: run.id }, data: { status: 'success', finishedAt: new Date(), candidatesFound: candidates.length, postsCreated: created, duplicatesFound: duplicates } })); }
