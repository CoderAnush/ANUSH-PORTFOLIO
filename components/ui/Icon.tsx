'use client'
import * as Icons from 'lucide-react'
import React from 'react'

type IconName = keyof typeof Icons

export function Icon({ name, className = '', ...props }: { name: IconName; className?: string } & React.SVGProps<SVGSVGElement>) {
  const Comp = (Icons as any)[name]
  if (!Comp) return null
  return <Comp className={className} {...props} />
}
