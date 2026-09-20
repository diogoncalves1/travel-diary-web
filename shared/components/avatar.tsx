import { cn } from '@/shared/lib/utils'

type AvatarProps = {
  src: string
  name: string
  className?: string
}

/** Circular user avatar with an initials fallback beneath the image. */
export function Avatar({ src, name, className }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <span
      className={cn(
        'relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary text-xs font-medium text-secondary-foreground ring-1 ring-border',
        className,
      )}
    >
      <span aria-hidden="true">{initials}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || '/placeholder.svg'}
        alt={name}
        className="absolute inset-0 size-full object-cover"
      />
    </span>
  )
}
