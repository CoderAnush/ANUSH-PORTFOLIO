import { getSortedPostsData } from '../../lib/mdx'
import BlogCard from '../../components/cards/BlogCard'

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <main className="min-h-screen py-16 px-4">
      <section className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Thoughts on frontend development, design systems, and software engineering.
          </p>
        </header>
        <div className="space-y-12">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
