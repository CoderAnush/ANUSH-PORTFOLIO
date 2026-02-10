import React from 'react'
import { getPostData, getSortedPostsData } from '../../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import MDXComponents from '../../../components/blog/MDXComponents'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params

    try {
        const post = getPostData(slug)

        return (
            <main className="min-h-screen py-16 px-4">
                <article className="max-w-3xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
                    </Link>

                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{post.title}</h1>
                        <div className="flex items-center gap-2 text-slate-500 mb-6">
                            <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>
                    </header>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <MDXRemote source={post.content} components={MDXComponents} />
                    </div>
                </article>
            </main>
        )
    } catch (error) {
        notFound()
    }
}
