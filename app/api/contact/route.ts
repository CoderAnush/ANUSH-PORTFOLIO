import { NextResponse } from 'next/server'
import { sendContactEmail } from '../../../lib/mailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await sendContactEmail({ name, email, message })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
