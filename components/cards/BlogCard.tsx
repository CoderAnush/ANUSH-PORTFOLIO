'use client'
import React from 'react'
import Link from 'next/link'
import type { BlogPost } from '../../lib/mdx'
import { format, parseISO } from 'date-fns'

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="group mb-8">
            <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                </h3>
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
        </article>
    )
}
