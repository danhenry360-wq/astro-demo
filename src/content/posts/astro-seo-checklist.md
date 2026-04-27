---
title: Astro SEO Checklist
description: Every on-page SEO element you need to cover before pushing an Astro blog live.
pubDate: 2026-04-26
tags: [seo, astro]
author: Ted
---

Before flipping a new Astro blog to production, run through this list.

## Technical

- **Canonical tag** on every page — prevents duplicate content from tag/pagination pages
- **Sitemap** at `/sitemap.xml` linked in `<head>` — submit to GSC after launch
- **RSS feed** at `/rss.xml` — drives indexing velocity for fresh content
- **robots.txt** — allow all by default, block `/api/` if you have one
- **Core Web Vitals** — Astro ships near-zero JS by default, check with PageSpeed Insights

## On-page

- `<title>` unique per page, under 60 chars
- `<meta name="description">` 120–160 chars, includes primary keyword
- `<h1>` matches title intent, not a clone of the `<title>` tag
- `<time datetime="...">` on all post dates for structured data signals
- `<link rel="canonical">` pointing to the clean URL

## Content schema

Add `updatedDate` to posts you revise — it updates `<lastmod>` in the sitemap and signals freshness to crawlers.

```markdown
---
updatedDate: 2026-05-01
---
```

## Deployment

Point GSC to your Vercel URL immediately. Submit sitemap. Done.
