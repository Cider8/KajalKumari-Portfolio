// src/Providers.jsx
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Providers component:
 * - wraps the app with ThemeProvider
 * - sets dark theme automatically on mobile devices (if user hasn't chosen a theme)
 */
export default function Providers({ children }) {
  return (
    // attribute="class" makes next-themes toggle the class "dark" on <html>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MobileDefaultTheme>{children}</MobileDefaultTheme>
    </ThemeProvider>
  );
}

// nested component uses useTheme (must be inside ThemeProvider)
function MobileDefaultTheme({ children }) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // If user already selected a theme (stored in localStorage by next-themes),
    // don't override it. Only set default when no selection exists.
    const stored = localStorage.getItem("theme");
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

    if (!stored && isMobile && theme !== "dark") {
      setTheme("dark");
    }
    // no dependency on setTheme or theme so it runs once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
