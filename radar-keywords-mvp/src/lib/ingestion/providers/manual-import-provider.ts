import type { IngestionProvider, PostCandidate, SearchInput } from '../types';
export class ManualImportProvider implements IngestionProvider { providerName = 'manual'; constructor(private candidates: PostCandidate[] = []) {} async search(_input: SearchInput): Promise<PostCandidate[]> { return this.candidates; } }
