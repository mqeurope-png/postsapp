import type { Post } from '@prisma/client';
import { classifyWithLocalRules, scoreWithLocalRules } from './local-rule-classifier';
import type { PostClassificationResult, PostScoreResult } from './types';
export class AIClassifierService { async classify(post: Post): Promise<PostClassificationResult> { if (!process.env.OPENAI_API_KEY || process.env.AI_PROVIDER === 'local') return classifyWithLocalRules(post); return classifyWithLocalRules(post); } async score(post: Post, classification: PostClassificationResult): Promise<PostScoreResult> { return scoreWithLocalRules(post, classification); } }
