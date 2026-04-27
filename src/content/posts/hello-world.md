---
title: Hello World
description: The first post — how this blog was built and what to expect.
pubDate: 2026-04-27
tags: [astro, meta]
author: Ted
---

Welcome to the blog. This site is built with **Astro 5**, **Tailwind CSS**, and **MDX**. Posts live in `src/content/posts/` and deploy to Vercel on every push to `master`.

## What's wired up

- MDX with syntax highlighting via Shiki (tokyo-night theme)
- RSS feed at `/rss.xml`
- Custom sitemap at `/sitemap.xml` — no `@astrojs/sitemap` (crashes on Astro 4.16+)
- Tag pages at `/tags/:tag`
- Inter + JetBrains Mono fonts via fontsource (zero Google Fonts requests)
- Full SEO meta, Open Graph, Twitter Card on every page

## Adding a post

Drop a `.md` or `.mdx` file in `src/content/posts/your-slug.md`:

```yaml
---
title: Your Post Title
description: One sentence summary for meta and listing page.
pubDate: 2026-04-27
tags: [tag1, tag2]
draft: false
---
```

Set `draft: true` to write without publishing. Push to master to deploy.
