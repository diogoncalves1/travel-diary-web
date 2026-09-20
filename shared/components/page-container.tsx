import { cn } from '@/shared/lib/utils'

/** Consistent content wrapper with sensible max width and page padding. */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
