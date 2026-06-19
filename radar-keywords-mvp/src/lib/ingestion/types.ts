export type TermType = 'hashtag' | 'keyword';
export type Language = 'ES' | 'DE' | 'FR' | 'NL' | 'EN';
export type Platform = 'instagram' | 'facebook' | 'linkedin' | 'web' | 'manual' | 'unknown';
export type MediaType = 'image' | 'video' | 'carousel' | 'text' | 'unknown';
export type SearchInput = { term: string; termType: TermType; language: Language; market: string; sector: string; since?: string; limit?: number };
export type PostCandidate = { platform: Platform; externalId?: string; canonicalUrl: string; authorName?: string; authorUrl?: string; publishedAt?: string; captionText?: string; hashtags?: string[]; mentions?: string[]; externalLink?: string; thumbnailUrl?: string; mediaType?: MediaType; visibleMetrics?: { likes?: number; comments?: number; shares?: number; views?: number }; rawPayload?: unknown };
export interface IngestionProvider { providerName: string; search(input: SearchInput): Promise<PostCandidate[]>; }
