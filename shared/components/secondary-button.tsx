'use client'

import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'

type SecondaryButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

/** Quieter companion action to the PrimaryButton, using the outline style. */
export function SecondaryButton({
  children,
  href,
  onClick,
  size = 'default',
  className,
}: SecondaryButtonProps) {
  const classes = cn('font-medium', className)

  if (href) {
    return (
      <Button
        variant="outline"
        size={size}
        className={classes}
        nativeButton={false}
        render={<Link href={href} />}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button variant="outline" size={size} className={classes} onClick={onClick}>
      {children}
    </Button>
  )
}
