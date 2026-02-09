'use client'
import React, { useState, useRef } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const nameRef = useRef<HTMLInputElement | null>(null)

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all fields.')
      return false
    }
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) {
      setErrorMsg('Please provide a valid email address.')
      return false
    }
    setErrorMsg('')
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error || 'Something went wrong. Please try again.')
        setState('error')
        return
      }
      setState('success')
      setName('')
      setEmail('')
      setMessage('')
      nameRef.current?.focus()
    } catch (err) {
      setErrorMsg('Network error. Please try again.')
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid gap-3">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Name</span>
          <input
            ref={nameRef}
            className="mt-1 px-3 py-2 rounded border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-required
            aria-label="Name"
            required
            disabled={state === 'loading'}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            className="mt-1 px-3 py-2 rounded border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required
            aria-label="Email"
            required
            disabled={state === 'loading'}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Message</span>
          <textarea
            className="mt-1 px-3 py-2 rounded border min-h-[120px] resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-required
            aria-label="Message"
            required
            disabled={state === 'loading'}
          />
        </label>

        {errorMsg && <div role="alert" className="text-red-600">{errorMsg}</div>}
        {state === 'success' && <div role="status" className="text-green-600">Message sent — thank you!</div>}

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-primary text-white disabled:opacity-60"
            disabled={state === 'loading'}
            aria-busy={state === 'loading'}
          >
            {state === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded border"
            onClick={() => {
              setName('')
              setEmail('')
              setMessage('')
              setErrorMsg('')
              setState('idle')
              nameRef.current?.focus()
            }}
            disabled={state === 'loading'}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  )
}
