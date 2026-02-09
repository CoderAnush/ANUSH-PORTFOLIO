'use client'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center px-4 py-2 rounded-md font-medium focus:outline-none focus-visible:ring'
  const variants = {
    primary: 'bg-primary text-white hover:opacity-95',
    ghost: 'bg-transparent text-slate-900'
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
