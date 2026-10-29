
import { useEffect, useState } from 'react';

export type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'preetom_theme_mode';

function getResolvedTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'light' || mode === 'dark') {
    return mode;
  }

  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getSavedThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === 'light' || saved === 'dark' || saved === 'system') {
    return saved;
  }

  return 'system';
}

export function useTheme() {
  const [themeMode, setThemeModeState] =
    useState<ThemeMode>(getSavedThemeMode);

  const [resolvedTheme, setResolvedTheme] =
    useState<'light' | 'dark'>(() => getResolvedTheme(getSavedThemeMode()));

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const applyTheme = () => {
      const activeTheme = getResolvedTheme(themeMode);
      const root = document.documentElement;
      const body = document.body;

      setResolvedTheme(activeTheme);

      root.setAttribute('data-theme', activeTheme);
      root.classList.toggle('dark', activeTheme === 'dark');
      root.style.colorScheme = activeTheme;

      body.setAttribute('data-theme', activeTheme);
      body.style.backgroundColor = 'var(--bg-page)';
      body.style.color = 'var(--text-main)';
    };

    applyTheme();

    mediaQuery.addEventListener('change', applyTheme);

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  }, [themeMode]);

  const setThemeMode = (mode: ThemeMode) => {
    localStorage.setItem(STORAGE_KEY, mode);
    setThemeModeState(mode);
  };

  return {
    themeMode,
    resolvedTheme,
    setThemeMode,
  };
}
