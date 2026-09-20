import { cn } from "@/shared/lib/utils";

type SectionAppProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

/** A lightweight header used to separate content sections within a page. */
export function SectionApp({
  title,
  description,
  action,
  className,
}: SectionAppProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-3",
        className,
      )}
    >
      <div className="space-y-1">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground text-balance">
          {title}
        </h2>
        {description ? (
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
