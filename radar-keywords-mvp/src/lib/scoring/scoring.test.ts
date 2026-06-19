import { describe, expect, it } from 'vitest';
import { calculateTotalScore } from './scoring';
describe('calculateTotalScore', () => {
  it('aplica los pesos editoriales', () => { expect(calculateTotalScore({ relevanceScore: 100, commercialScore: 80, trendScore: 60, visualScore: 40, editorialScore: 70, marketPriorityScore: 50 })).toBe(74); });
  it('limita el resultado entre 0 y 100', () => { expect(calculateTotalScore({ relevanceScore: 200, commercialScore: 200, trendScore: 200, visualScore: 200, editorialScore: 200, marketPriorityScore: 200 })).toBe(100); });
});
