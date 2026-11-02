# Laplace — public marketing site

Marketing site for Laplace, the what-if engine for the physical world.

## Dev

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Lint

```
npm run lint
```

## Blog

The blog index is at `/blog`; the intentionally empty test article is at
`/blog/test-post`. Navigation and footer links work from both the homepage
and blog pages. Vercel rewrites support opening or refreshing article URLs.

To publish a post, add an entry to `src/lib/posts.ts` with a unique URL-safe
`slug`, `title`, ISO `date` (`YYYY-MM-DD`), and `paragraphs` (one string per
paragraph). Put newest posts first. Omit `isTest` for real posts. Commit and
deploy through the existing Vercel workflow. There is no CMS or admin editor.

The test post deliberately has `paragraphs: []`; remove its entry when testing
is complete. Unknown blog URLs display a post-not-found page.

### First official article

The TeraSim-DT launch article is at `/blog/terasim-dt-open-source-traffic-simulation`.
Its exact source text and inline links are in `src/content/terasim-dt.json`;
its original diagram is in `public/blog/terasim-dt/workflow.png`.
`FeatureArticle.tsx` provides the responsive editorial layout and section links.
The test post remains directly accessible but is hidden from the blog index.
