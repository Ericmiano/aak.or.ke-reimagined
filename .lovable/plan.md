# AAK Homepage Overhaul

A complete rebuild of the Architectural Association of Kenya homepage: calmer structure, professional architectural character, clear focus on featured content and upcoming events, and strong SEO foundations.

## What's wrong today

The current homepage repeats the same three initiative blocks four times, stacks eight or more competing sections with no visual hierarchy, and squeezes cards edge-to-edge with almost no breathing room. Nothing signals what matters most, and events are buried below the fold.

## Design direction

- **Palette**: terracotta/red as the primary brand accent, charcoal as the structural dark, warm white as the page ground, and a controlled green used only for sustainability content (Safari Green Building Index).
- **Typography**: Urbanist for headings, Epilogue for body — clean, spacious, built-environment neutral.
- **Character**: architectural and editorial. Generous whitespace, a visible column grid, thin rules instead of heavy borders, large image treatments, sharp-to-subtle corner radii, numbered section markers.
- **Motion**: restrained. Scroll-reveal fades and short upward drifts on section entry, a slow image scale on hover for cards, an animated underline on links, and a marquee-free ticker only for the events strip. No parallax overload, no animation on every element, and full `prefers-reduced-motion` support.

## Homepage structure (top to bottom)

```text
1  Sticky header  — logo, primary nav, "Member Portal" CTA
2  Hero           — one full-bleed architectural image, single headline,
                    one primary CTA, small "since 1967" credibility line
3  Events strip   — horizontally scrolling band of ongoing + upcoming
                    events with dates, status pills, and register links
4  Featured spotlight — one large editorial block for the current
                    priority item (Awards of Excellence 2026)
5  Initiatives    — Mulika Mjengo, Grow A Classroom, Safari Green
                    Building Index (shown ONCE, three cards)
6  Chapters       — the eight professional chapters as an image grid
7  Media & projects — a gallery-style grid mixing project and event
                    imagery, sized asymmetrically for visual interest
8  Publications   — Status of the Built Environment report + downloads
9  Membership CTA — join / validate certificate / directory
10 Footer         — contact, chapters, quick links, socials
```

Removals: all duplicated initiative blocks, the redundant logo strip, and the feature-firm block (moves to a later inner page).

## SEO plan

- Route-level `head()` on the homepage with a unique keyword-led title (under 60 chars), meta description under 160 chars, `og:title`, `og:description`, `og:type`, `twitter:card`, and a self-referencing canonical.
- Sitewide defaults (viewport, charset, `og:site_name`) stay in the root route.
- JSON-LD: `Organization` for AAK plus an `ItemList` of upcoming `Event` entries so events are eligible for rich results.
- Semantic HTML: one `<h1>`, ordered heading levels, `<nav>`, `<main>`, `<section>` with accessible labels.
- Descriptive alt text on every image, lazy loading below the fold, responsive `sizes`.
- `public/robots.txt` allowing crawl, plus a `/sitemap.xml` server route listing the homepage now and expanding as pages are added.

## Technical notes

- TanStack Start route at `src/routes/index.tsx` replaces the placeholder.
- Design tokens (terracotta, charcoal, warm white, sustainability green, radii, shadows) defined as oklch variables in `src/styles.css` and mapped through `@theme inline` — no hardcoded colour classes in components.
- Urbanist + Epilogue loaded via `<link>` tags in the root route head and registered as `--font-*` theme tokens.
- Homepage broken into section components under `src/components/home/`, plus a shared `Header` and `Footer` rendered in the root layout.
- Content hardcoded in typed data modules (`src/data/events.ts`, `initiatives.ts`, `chapters.ts`, `publications.ts`) so a CMS can swap in later without touching the UI.
- Imagery: architectural photography generated where no suitable asset exists, saved under `src/assets/`.
- Motion via a small `useInView` reveal hook with CSS transitions — no heavy animation library.

## Not in this pass

Inner pages (About, Chapters detail, Events index, Projects, Media, News, Contact) and any CMS/admin. Those follow once the homepage direction is signed off.
