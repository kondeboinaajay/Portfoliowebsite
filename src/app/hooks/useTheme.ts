import { useEffect } from 'react';
import { Theme } from '../components/ThemeSelector';

export const useTheme = (theme: Theme) => {
  useEffect(() => {
    const root = document.documentElement;

    // Map theme colors to CSS variables
    const colorMap: Record<string, string> = {
      'purple-600': '#9333ea',
      'purple-400': '#c084fc',
      'pink-600': '#db2777',
      'pink-400': '#f472b6',
      'indigo-600': '#4f46e5',
      'indigo-400': '#818cf8',
      'cyan-600': '#0891b2',
      'cyan-400': '#22d3ee',
      'blue-600': '#2563eb',
      'blue-400': '#60a5fa',
      'teal-500': '#14b8a6',
      'teal-400': '#2dd4bf',
      'orange-600': '#ea580c',
      'orange-400': '#fb923c',
      'rose-600': '#e11d48',
      'rose-400': '#fb7185',
      'amber-500': '#f59e0b',
      'amber-400': '#fbbf24',
      'emerald-600': '#059669',
      'emerald-400': '#34d399',
      'green-600': '#16a34a',
      'green-400': '#4ade80',
      'lime-500': '#84cc16',
      'lime-400': '#a3e635',
      'fuchsia-400': '#e879f9',
      'violet-600': '#7c3aed',
      'violet-400': '#a78bfa',
      'slate-700': '#334155',
      'slate-300': '#cbd5e1',
      'gray-700': '#374151',
      'gray-300': '#d1d5db',
      'zinc-600': '#52525b',
      'zinc-400': '#a1a1aa',
      'slate-50': '#f8fafc',
      'sky-50': '#f0f9ff',
      'orange-50': '#fff7ed',
      'emerald-50': '#ecfdf5',
      'violet-50': '#f5f3ff',
      'gray-50': '#f9fafb',
      'slate-950': '#020617',
      'white': '#ffffff',
      'slate-900': '#0f172a',
      'slate-600': '#475569',
      'slate-400': '#94a3b8',
    };

    const getColor = (colorClass: string) => {
      // Check if it's a hex color (starts with #)
      if (colorClass.startsWith('#')) {
        return colorClass;
      }
      // Otherwise look it up in the map
      return colorMap[colorClass] || colorClass;
    };

    root.style.setProperty('--theme-primary', getColor(theme.colors.primary));
    root.style.setProperty('--theme-secondary', getColor(theme.colors.secondary));
    root.style.setProperty('--theme-accent', getColor(theme.colors.accent));
    root.style.setProperty('--theme-background', getColor(theme.colors.background));
    root.style.setProperty('--theme-foreground', getColor(theme.colors.foreground));
    root.style.setProperty('--theme-card', getColor(theme.colors.card));
    root.style.setProperty('--theme-muted', getColor(theme.colors.muted));
    root.style.setProperty('--theme-badge', getColor(theme.colors.badgeColor));

  }, [theme]);
};
