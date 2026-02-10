'use client'
import React from 'react'

const MDXComponents = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-100" {...props} />,
    p: (props: any) => <p className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed" {...props} />,
    a: (props: any) => <a className="text-primary hover:underline font-medium" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-700 dark:text-slate-300" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-slate-700 dark:text-slate-300" {...props} />,
    li: (props: any) => <li className="" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600 dark:text-slate-400 my-4" {...props} />,
    code: (props: any) => <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm font-mono text-pink-500" {...props} />,
    pre: (props: any) => <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto my-6" {...props} />,
}

export default MDXComponents
