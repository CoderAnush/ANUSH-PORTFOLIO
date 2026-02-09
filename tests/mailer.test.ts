import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendContactEmail } from '../lib/mailer'

describe('sendContactEmail', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    process.env = { ...OLD_ENV }
    delete (global as any).fetch
  })

  it('throws when env vars are missing', async () => {
    delete process.env.SENDGRID_API_KEY
    delete process.env.SENDGRID_FROM_EMAIL
    await expect(sendContactEmail({ name: 'a', email: 'b@c.com', message: 'hi' })).rejects.toThrow()
  })

  it('calls SendGrid API when configured', async () => {
    process.env.SENDGRID_API_KEY = 'key'
    process.env.SENDGRID_FROM_EMAIL = 'from@example.com'
    ;(global as any).fetch = vi.fn(() => Promise.resolve({ ok: true }))

    await expect(sendContactEmail({ name: 'A', email: 'b@c.com', message: 'hello' })).resolves.toBeUndefined()
    expect((global as any).fetch).toHaveBeenCalled()
  })
})
