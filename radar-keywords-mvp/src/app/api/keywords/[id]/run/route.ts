import { NextResponse } from 'next/server';
import { runKeywordSearchJob } from '@/lib/ingestion/run-keyword-search-job';
export async function POST(request: Request, { params }: { params: { id: string } }) { const body = await request.json().catch(() => ({})); return NextResponse.json(await runKeywordSearchJob({ keywordId: params.id, providerName: body.providerName, limit: body.limit })); }
