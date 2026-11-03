import { featureTitle, featureSubtitle, featureSlug } from '../../lib/featurePost'
import { Fragment, type ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import content from '../../content/terasim-dt.json'

type Run = { text: string; href?: string; bold?: boolean; italic?: boolean }
function RichText({ runs = [] }: { runs?: Run[] }) {
  return runs.map((run, i) => {
    let child: ReactNode = run.text
    if (run.bold) child = <strong>{child}</strong>
    if (run.italic) child = <em>{child}</em>
    if (run.href) child = <a href={run.href}>{child}</a>
    return <Fragment key={i}>{child}</Fragment>
  })
}

export function FeatureCard() {
  return <a className="feature-card" href={`/blog/${featureSlug}`}>
    <div className="feature-card-copy">
      <span className="blog-eyebrow">November 2, 2026 · Product news</span>
      <h2>{featureTitle}</h2>
      <p>{featureSubtitle}</p>
      <span className="feature-read">Read article <ArrowUpRight size={18} aria-hidden="true" /></span>
    </div>
    <div className="feature-card-image"><img src="/blog/terasim-dt/workflow.png" alt="TeraSim-DT camera-informed simulation workflow" /></div>
  </a>
}

export function FeatureArticle() {
  const sections = content.map((block, index) => ({ ...block, index })).filter(block => block.type === 'heading')
  return <article className="feature-article">
    <a href="/blog" className="feature-back"><ArrowLeft size={16} aria-hidden="true" /> All posts</a>
    <header className="feature-header">
      <div className="blog-eyebrow"><time dateTime="2026-11-02">November 2, 2026</time><span aria-hidden="true"> / </span>Product news</div>
      <h1><RichText runs={content[0].runs} /></h1>
      <p className="feature-subtitle"><RichText runs={content[1].runs} /></p>
    </header>
    <div className="feature-layout">
      <aside className="feature-toc"><nav aria-label="Article sections"><span className="blog-eyebrow">In this article</span>{sections.map(section => <a key={section.index} href={`#section-${section.index}`}><RichText runs={section.runs} /></a>)}</nav></aside>
      <div className="feature-body">
        {content.slice(2).map((block, offset) => {
          const index = offset + 2
          if (block.type === 'heading') return <h2 id={`section-${index}`} key={index}><RichText runs={block.runs} /></h2>
          if (block.type === 'image') return <figure key={index}><a href={block.src} target="_blank" rel="noreferrer" aria-label="Open workflow diagram at full size"><img src={block.src} alt={block.alt} loading="lazy" /></a><figcaption><RichText runs={content[index+1].runs} /></figcaption></figure>
          if (block.type === 'caption') return null
          return <Fragment key={index}>
            {index === content.length - 1 && (
              <aside className="nvidia-blog-callout" aria-labelledby="nvidia-blog-title">
                <h3 id="nvidia-blog-title">Featured in NVIDIA’s Blog</h3>
                <p>Learn more about how physical and agentic AI are transforming urban mobility and city services in <a href="https://blogs.nvidia.com/blog/cities-physical-agentic-ai-applications/">NVIDIA’s blog, which highlights Laplace Intelligence’s TeraSim platform</a>.</p>
              </aside>
            )}
            <p className={index === 2 ? 'feature-lead' : index === content.length-1 ? 'feature-closing' : undefined}><RichText runs={block.runs} /></p>
          </Fragment>
        })}
      </div>
    </div>
    <a className="feature-back feature-bottom" href="/blog"><ArrowLeft size={16} aria-hidden="true" /> All posts</a>
  </article>
}
