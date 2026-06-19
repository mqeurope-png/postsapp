import { describe, expect, it } from 'vitest';
import { createDedupeHash, normalizeText, normalizeUrl } from './dedupe';
describe('dedupe utilities', () => {
  it('normaliza URLs eliminando tracking', () => { expect(normalizeUrl('https://Example.com/Post/?utm_source=x#frag')).toBe('https://example.com/post'); });
  it('normaliza texto para comparación', () => { expect(normalizeText('Impresión UV!!!  https://x.test')).toBe('impresion uv'); });
  it('genera el mismo hash para textos equivalentes', () => { const a = createDedupeHash({ platform: 'manual', canonicalUrl: 'https://x.test/a', authorName: 'Bomedia', captionText: 'Impresión UV demo', publishedAt: '2026-06-19T10:00:00Z' }); const b = createDedupeHash({ platform: 'manual', canonicalUrl: 'https://x.test/b', authorName: 'bomedia', captionText: 'impresion uv demo!!!', publishedAt: '2026-06-19T22:00:00Z' }); expect(a).toBe(b); });
});
