import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const listeners = new Set<(t: Theme) => void>();

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readTheme);

  useEffect(() => {
    listeners.add(setThemeState);
    return () => {
      listeners.delete(setThemeState);
    };
  }, []);

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {
      // storage unavailable, theme still applies for this session
    }
    listeners.forEach((l) => l(t));
  }, []);

  const toggle = useCallback(
    () => setTheme(readTheme() === "dark" ? "light" : "dark"),
    [setTheme]
  );

  return { theme, toggle };
}
