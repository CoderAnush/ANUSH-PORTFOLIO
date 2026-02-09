/**
 * Server-side mailer wrapper
 * - Uses SendGrid when SENDGRID_API_KEY is provided
 * - Exported function: sendContactEmail({ name, email, message })
 *
 * Note: This module is server-only and should be called from API routes or server components.
 */

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail({ name, email, message }: ContactPayload): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY
  const from = process.env.SENDGRID_FROM_EMAIL
  const site = process.env.SITE_URL || 'http://localhost:3000'

  if (!apiKey || !from) {
    throw new Error('Mail provider not configured. Set SENDGRID_API_KEY and SENDGRID_FROM_EMAIL in environment.')
  }

  const body = {
    personalizations: [
      {
        to: [{ email: from }],
        subject: `New contact from ${name} — ${site}`,
      },
    ],
    from: { email: from },
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      },
    ],
  }

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`SendGrid error: ${res.status} ${res.statusText} ${text}`)
  }
}

export default sendContactEmail
