# Pixelwise Apps (Next.js + MDX)

A static-exportable Next.js app for the Pixelwise Privacy Framework.

## Stack

- Next.js App Router
- MDX content files for framework chapters
- Static export for GitHub Pages

## Project structure

- `app/page.tsx` → homepage
- `app/framework/[slug]/page.tsx` → dynamic chapter pages
- `content/framework/*.mdx` → chapter content source of truth
- `lib/content.ts` → reads MDX, frontmatter, and chapter order
- `components/*` → reusable docs UI components
- `mdx-components.tsx` → MDX component mapping (including YouTube embed)

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build (production)

```bash
npm run build
```

## Export static site

Static export is enabled by default via `output: 'export'` in `next.config.mjs`.

```bash
npm run build
```

Exported files are generated in `out/`.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In GitHub Actions, set up a workflow that:
   - installs dependencies
   - runs `npm run build`
   - publishes the `out/` directory
3. In repository settings, configure GitHub Pages to deploy from the workflow.

`next.config.mjs` auto-sets `basePath`/`assetPrefix` during GitHub Actions builds using `GITHUB_REPOSITORY`.

## Edit framework content (MDX-only workflow)

All framework chapter body content lives in `content/framework/*.mdx`.

Each chapter should include frontmatter:

```mdx
---
title: Chapter title
description: Short summary
order: 1
---

## Heading

Chapter body text here.
```

- Add a new chapter by adding a new `.mdx` file in `content/framework/`.
- `order` controls sidebar and chapter sequencing.
- Route slug is the filename (e.g., `risk-assessment.mdx` → `/framework/risk-assessment`).

### YouTube embeds in MDX

Use:

```mdx
<VideoEmbed id="YOUTUBE_VIDEO_ID" title="Optional title" />
```

No edits are required in page components to update chapter body content.
