export type BlogPost = {
  slug: string
  title: string
  date: string
  isTest?: boolean
  paragraphs: string[]
}

// Add new posts here, newest first. An empty array keeps the article body empty.
export const posts: BlogPost[] = [
  {
    slug: 'test-post',
    title: 'Test post',
    date: '2026-11-01',
    isTest: true,
    paragraphs: [],
  },
]
