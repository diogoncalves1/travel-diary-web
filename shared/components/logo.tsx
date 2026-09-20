import { cn } from '@/shared/lib/utils'

/** Open journal, route and destination combined into the brand mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm',
        className,
      )}
      aria-hidden="true"
    >
      <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
        <path d="M7.5 13.5C13 11.7 18.4 12.7 24 16V37C18.4 33.7 13 32.7 7.5 34.5V13.5Z" fill="currentColor" />
        <path d="M40.5 13.5C35 11.7 29.6 12.7 24 16V37C29.6 33.7 35 32.7 40.5 34.5V13.5Z" fill="currentColor" />
        <polyline points="13,27 18,21.5 22.5,24.6 28,26 33,22" fill="none" stroke="#0F5F5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="27" r="2.5" fill="#0F5F5C" />
        <path d="M33 18.5C30.5 18.5 28.5 20.4 28.5 22.8C28.5 26.1 33 30 33 30C33 30 37.5 26.1 37.5 22.8C37.5 20.4 35.5 18.5 33 18.5Z" fill="#0F5F5C" />
        <circle cx="33" cy="22.8" r="1.35" fill="currentColor" />
      </svg>
    </span>
  )
}

export function Logo({
  className,
  subtitle = true,
}: {
  className?: string
  subtitle?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
          Travel Journal
        </span>
        {subtitle ? (
          <span className="text-xs text-muted-foreground">
            Every place, remembered
          </span>
        ) : null}
      </div>
    </div>
  )
}
