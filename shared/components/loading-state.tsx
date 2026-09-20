import { cn } from '@/shared/lib/utils'

/** A single shimmering skeleton block. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-muted', className)}
      aria-hidden="true"
    />
  )
}

type LoadingStateProps = {
  label?: string
  rows?: number
  className?: string
}

/** Skeleton placeholder used while content loads. */
export function LoadingState({
  label = 'Loading…',
  rows = 3,
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn('space-y-4', className)}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">{label}</span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-2xl border border-border bg-card p-4"
          >
            <Skeleton className="aspect-[4/3] w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
