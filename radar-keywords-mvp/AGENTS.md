# AGENTS.md — Radar Keywords Hashtags MVP

## Scope
These instructions apply to all files under `radar-keywords-mvp/`.

## Isolation
- Do not modify files outside `radar-keywords-mvp/` without explicit user approval.
- Keep all dependencies, configuration, Docker services, Prisma schema, seeds, tests, and documentation local to this folder.
- Do not implement scraping, automatic publishing, social account connections, post generation, editorial calendars, or advanced approval workflows in this MVP.

## Product rules
- UI language: Spanish.
- Database: PostgreSQL via Prisma.
- Package manager: pnpm.
- Local development may use `docker-compose.yml` in this folder for PostgreSQL only.
- The app must work without external APIs: use MockProvider/manual imports and local rule classification when keys are missing.
- OpenAI integration may be prepared via `OPENAI_API_KEY`, but must be optional.

## Architecture rules
- Keep ingestion provider-based and swappable.
- Keep AI classification decoupled from ingestion.
- Keep scoring pure and testable.
- Keep deduplication utilities covered by tests.
- Prefer small server-side modules under `src/lib/` and simple internal UI under `src/app/`.
