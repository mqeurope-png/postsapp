# Radar Keywords Hashtags MVP

App privada en español para detectar referencias mediante keywords/hashtags, importar candidatos, deduplicar, clasificar con IA/mock, calcular scoring editorial, revisar una biblioteca interna, ver dashboard y exportar CSV.

## Stack

- Next.js + TypeScript
- PostgreSQL + Prisma
- pnpm
- Tailwind CSS
- Vitest
- Clasificador local por reglas con integración OpenAI preparada como extensión opcional

## Instalación

```bash
cd radar-keywords-mvp
pnpm install
cp .env.example .env
docker compose up -d
```

Arranque PostgreSQL local:

```bash
docker compose up -d
```

Migraciones y seed:

```bash
pnpm db:migrate
pnpm db:seed
```

Desarrollo:

```bash
pnpm dev
```

Abre `http://localhost:3000`.

## Datos de prueba

1. Ejecuta el seed para crear keywords iniciales.
2. En `/keywords`, pulsa `Mock run` sobre cualquier keyword.
3. Revisa los resultados en `/library` y `/`.

## Importación CSV

Pantalla: `/imports`.

Columnas soportadas:

```csv
platform,external_id,canonical_url,author_name,published_at,caption_text,hashtags,mentions,thumbnail_url,media_type
manual,abc-1,https://example.com/post/1,Demo Author,2026-06-19,Demo impresion uv,#impresionuv,,https://picsum.photos/300/200,image
```

## Exportación CSV

Endpoint:

```bash
curl http://localhost:3000/api/posts/export.csv -o radar-posts.csv
```

## Tests

```bash
pnpm test
```

Cubre deduplicación y scoring.

## Limitaciones pendientes

- La integración OpenAI está preparada como punto de extensión, pero el MVP usa clasificador local por reglas por defecto.
- No hay scraping real ni conexión con Instagram/Facebook.
- No hay generación de posts, calendario, publicación automática ni workflows avanzados.
- La protección por password es mínima mediante `APP_PASSWORD` y cookie HTTP-only; no sustituye a un sistema multiusuario.
- Los jobs son síncronos/manuales; BullMQ/Redis queda para una fase posterior.
