import React from 'react'

export default function ResumePage() {
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="mb-4 text-slate-600">Download or preview my resume below.</p>
        <div className="border rounded overflow-hidden">
          {/* If `public/resume.pdf` exists it will load here */}
          <object data="/resume.pdf" type="application/pdf" width="100%" height="640">
            <p>
              PDF preview unavailable. <a href="/resume.pdf">Download the resume</a>.
            </p>
          </object>
        </div>
        <div className="mt-4">
          <a className="px-4 py-2 rounded bg-primary text-white" href="/resume.pdf" download>
            Download PDF
          </a>
        </div>
      </section>
    </main>
  )
}
