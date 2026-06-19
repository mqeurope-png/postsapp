export type ScoreInput = { relevanceScore: number; commercialScore: number; visualScore: number; trendScore: number; editorialScore: number; marketPriorityScore: number };
const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));
export function calculateTotalScore(input: ScoreInput): number {
  return clamp(input.relevanceScore * 0.3 + input.commercialScore * 0.2 + input.trendScore * 0.15 + input.visualScore * 0.15 + input.editorialScore * 0.15 + input.marketPriorityScore * 0.05);
}
export function explainScore(input: ScoreInput): string { return `Score basado en relevancia ${input.relevanceScore}, aplicación comercial ${input.commercialScore}, tendencia ${input.trendScore}, calidad visual ${input.visualScore}, utilidad editorial ${input.editorialScore} y prioridad de mercado ${input.marketPriorityScore}.`; }
