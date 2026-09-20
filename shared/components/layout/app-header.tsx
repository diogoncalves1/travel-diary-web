"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { AppSidebar } from "@/shared/components/layout/app-sidebar";
import { SearchButton } from "@/features/dashboard/components/search-button";
import { NotificationButton } from "@/features/dashboard/components/notification-button";
import { UserMenu } from "@/features/dashboard/components/user-menu";
import { getPageTitle } from "@/features/dashboard/lib/navigation";

/** Sticky top bar: page title on the left, actions on the right. */
export function AppHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const title = getPageTitle(pathname);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu />
        </Button>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Travel Journal</p>
          <h1 className="truncate font-serif text-lg font-semibold leading-tight tracking-tight text-foreground">
            {title}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <SearchButton />
        <NotificationButton />
        <div className="hidden sm:block">
          <UserMenu />
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 flex w-[80%] max-w-xs flex-col">
            <Button
              variant="outline"
              size="icon"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute right-3 top-3 z-10 bg-background"
            >
              <X />
            </Button>
            <AppSidebar onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
