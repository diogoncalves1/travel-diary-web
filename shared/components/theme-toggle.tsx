"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/shared/providers/theme-provider";
import { cn } from "@/shared/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "group relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Sun
        className="absolute size-[18px] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        className="absolute size-[17px] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
