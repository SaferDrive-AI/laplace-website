import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { posts } from '../../lib/posts'

const formatDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
})

export function BlogPage({ path }: { path: string }) {
  const isIndex = path === '/blog'
  const post = posts.find((entry) => path === `/blog/${entry.slug}`)

  useEffect(() => {
    document.title = `${isIndex ? 'Blog' : post?.title ?? 'Post not found'} — Laplace`
  }, [isIndex, post])

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-24 min-h-[80vh]">
      {isIndex ? (
        <>
          <p className="text-xs tracking-[0.2em] uppercase text-teal mb-5">From Laplace</p>
          <h1 className="text-6xl md:text-8xl mb-6" style={{ fontFamily: 'var(--font-family-serif)' }}>Blog</h1>
          <p className="text-lg text-ink-muted max-w-xl mb-16">Ideas and updates from Laplace.</p>
          <div className="border-t border-ink/10">
            {posts.map((entry) => (
              <a key={entry.slug} href={`/blog/${entry.slug}`} className="group flex items-center justify-between gap-6 py-8 md:py-10 border-b border-ink/10 hover:bg-cream-dark/50 transition-colors focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted mb-3">
                    <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                    {entry.isTest && <span className="rounded-full bg-teal-lighter text-teal px-3 py-1">Test post</span>}
                  </div>
                  <h2 className="text-3xl md:text-4xl group-hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-family-serif)' }}>{entry.title}</h2>
                </div>
                <ArrowUpRight aria-hidden="true" className="shrink-0 text-teal" size={24} />
              </a>
            ))}
          </div>
        </>
      ) : (
        <article className="max-w-3xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-sm text-teal hover:underline mb-12"><ArrowLeft size={16} aria-hidden="true" />All posts</a>
          {post ? (
            <>
              <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted mb-5">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.isTest && <span className="rounded-full bg-teal-lighter text-teal px-3 py-1">Test post · Empty draft for testing</span>}
              </div>
              <h1 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'var(--font-family-serif)' }}>{post.title}</h1>
              <div className="border-t border-ink/10 pt-10 space-y-6 text-lg leading-relaxed text-ink-light">
                {post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-5xl mb-6" style={{ fontFamily: 'var(--font-family-serif)' }}>Post not found</h1>
              <p className="text-ink-muted">This post does not exist. Browse all posts to find the latest from Laplace.</p>
            </>
          )}
        </article>
      )}
    </main>
  )
}
