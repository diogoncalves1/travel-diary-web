"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "default" | "lg";
  className?: string;
};

/** The app's consistent primary action button (used for "+ Add Trip"). */
export function PrimaryButton({
  children,
  href,
  onClick,
  size = "default",
  className,
}: PrimaryButtonProps) {
  const classes = cn("font-medium shadow-sm", className);

  if (href) {
    return (
      <Button
        size={size}
        className={classes}
        nativeButton={false}
        render={<Link href={href} />}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button size={size} className={classes} onClick={onClick}>
      {children}
    </Button>
  );
}
