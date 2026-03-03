'use client'
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  as?: 'button'
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
  as: 'a'
}

type Props = ButtonProps | AnchorProps

export function Button({ variant = 'primary', className = '', as = 'button', ...props }: Props) {
  const base = 'inline-flex items-center px-4 py-2 rounded-md font-medium focus:outline-none focus-visible:ring transition-colors'
  const variants = {
    primary: 'bg-primary text-white hover:opacity-95',
    ghost: 'bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (as === 'a') {
    return <a className={cls} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
}
