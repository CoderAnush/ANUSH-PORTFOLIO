'use client'
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="mt-4 text-slate-600">{error?.message}</p>
          </div>
        </div>
      </body>
    </html>
  )
}
