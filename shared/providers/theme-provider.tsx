"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const storageKey = "travel-journal-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getDocumentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyDocumentTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  const setTheme = useCallback((nextTheme: Theme) => {
    applyDocumentTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getDocumentTheme() === "dark" ? "light" : "dark");
  }, [setTheme]);

  useEffect(() => {
    setThemeState(getDocumentTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleStorage(event: StorageEvent) {
      if (event.key !== storageKey) return;

      const nextTheme =
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : mediaQuery.matches
            ? "dark"
            : "light";

      applyDocumentTheme(nextTheme);
      setThemeState(nextTheme);
    }

    function handleSystemTheme(event: MediaQueryListEvent) {
      if (localStorage.getItem(storageKey)) return;

      const nextTheme: Theme = event.matches ? "dark" : "light";
      applyDocumentTheme(nextTheme);
      setThemeState(nextTheme);
    }

    window.addEventListener("storage", handleStorage);
    mediaQuery.addEventListener("change", handleSystemTheme);

    return () => {
      window.removeEventListener("storage", handleStorage);
      mediaQuery.removeEventListener("change", handleSystemTheme);
    };
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
