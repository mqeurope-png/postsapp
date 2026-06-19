import type { Language, Market, Sector, TrendLevel } from '@prisma/client';
export type PostClassificationResult = { languageDetected: Language; marketDetected: Market; sector: Sector; productFamily: string; topic: string; format: string; commercialIntent: string; editorialUse: string; trendLevel: TrendLevel; confidence: number; explanation: string };
export type PostScoreResult = { relevanceScore: number; commercialScore: number; visualScore: number; trendScore: number; editorialScore: number; marketPriorityScore: number; totalScore: number; explanation: string };
