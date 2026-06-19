# AGENTS.md — Radar Keywords Hashtags MVP

## Scope
These instructions apply to the entire repository unless a more specific `AGENTS.md` exists in a subdirectory.

## Repository safety rules
- Keep the Radar Keywords Hashtags MVP isolated from any existing application code.
- Do not delete, rename, move, or modify existing production files unless the user explicitly approves it.
- Do not modify deployment configuration, CI/CD workflows, secrets, `.env` files, or shared global configuration without explaining the reason and receiving approval.
- Prefer creating the MVP in an isolated folder: `apps/radar-keywords-mvp/` for monorepos, or `radar-keywords-mvp/` for simple repositories.
- Create a nested `AGENTS.md` inside the MVP folder with MVP-specific instructions before implementing app code.

## MVP scope
Build only the private radar workflow:
keywords/hashtags → candidate import/capture → metadata capture → deduplication → AI/mock classification → editorial scoring → internal feed library → basic dashboard → CSV export.

Do not implement in this phase:
- post generation;
- editorial calendar;
- automatic publishing;
- owned social network connections;
- comment replies;
- advanced approval workflows;
- mandatory real Instagram/Facebook scraping.

## Technical approach
- Start with mock data, manual import, or CSV import; no external APIs should be mandatory for local development.
- Use a modular architecture with an ingestion provider abstraction, decoupled AI classifier service, pure scoring logic, and testable deduplication utilities.
- Preserve extension points for future real collectors, editorial idea generation, drafts, calendars, approval workflows, and owned social connections without implementing those features now.
