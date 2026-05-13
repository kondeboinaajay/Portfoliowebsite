import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Palette, Check } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

export interface Theme {
  id: string;
  name: string;
  mode: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    muted: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    buttonGradient: string;
    badgeColor: string;
  };
}

export const themes: Theme[] = [
  {
    id: "light",
    name: "Classic Light",
    mode: "light",
    colors: {
      primary: "purple-600",
      secondary: "pink-600",
      accent: "indigo-500",
      background: "slate-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-purple-600",
      gradientVia: "via-pink-600",
      gradientTo: "to-indigo-600",
      buttonGradient: "from-purple-600 to-pink-600",
      badgeColor: "purple-600"
    }
  },
  {
    id: "dark",
    name: "Classic Dark",
    mode: "dark",
    colors: {
      primary: "purple-400",
      secondary: "pink-400",
      accent: "indigo-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-purple-400",
      gradientVia: "via-pink-400",
      gradientTo: "to-indigo-400",
      buttonGradient: "from-purple-600 to-pink-600",
      badgeColor: "purple-400"
    }
  },
  {
    id: "ocean",
    name: "Ocean Breeze",
    mode: "light",
    colors: {
      primary: "cyan-600",
      secondary: "blue-600",
      accent: "teal-500",
      background: "sky-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-cyan-500",
      gradientVia: "via-blue-500",
      gradientTo: "to-indigo-600",
      buttonGradient: "from-cyan-600 to-blue-600",
      badgeColor: "cyan-600"
    }
  },
  {
    id: "ocean-dark",
    name: "Deep Ocean",
    mode: "dark",
    colors: {
      primary: "cyan-400",
      secondary: "blue-400",
      accent: "teal-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-cyan-400",
      gradientVia: "via-blue-400",
      gradientTo: "to-indigo-400",
      buttonGradient: "from-cyan-600 to-blue-600",
      badgeColor: "cyan-400"
    }
  },
  {
    id: "sunset",
    name: "Sunset Glow",
    mode: "light",
    colors: {
      primary: "orange-600",
      secondary: "rose-600",
      accent: "amber-500",
      background: "orange-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-orange-500",
      gradientVia: "via-rose-500",
      gradientTo: "to-pink-600",
      buttonGradient: "from-orange-600 to-rose-600",
      badgeColor: "orange-600"
    }
  },
  {
    id: "sunset-dark",
    name: "Midnight Sunset",
    mode: "dark",
    colors: {
      primary: "orange-400",
      secondary: "rose-400",
      accent: "amber-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-orange-400",
      gradientVia: "via-rose-400",
      gradientTo: "to-pink-400",
      buttonGradient: "from-orange-600 to-rose-600",
      badgeColor: "orange-400"
    }
  },
  {
    id: "forest",
    name: "Forest Green",
    mode: "light",
    colors: {
      primary: "emerald-600",
      secondary: "green-600",
      accent: "lime-500",
      background: "emerald-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-emerald-500",
      gradientVia: "via-green-500",
      gradientTo: "to-teal-600",
      buttonGradient: "from-emerald-600 to-green-600",
      badgeColor: "emerald-600"
    }
  },
  {
    id: "forest-dark",
    name: "Dark Forest",
    mode: "dark",
    colors: {
      primary: "emerald-400",
      secondary: "green-400",
      accent: "lime-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-emerald-400",
      gradientVia: "via-green-400",
      gradientTo: "to-teal-400",
      buttonGradient: "from-emerald-600 to-green-600",
      badgeColor: "emerald-400"
    }
  },
  {
    id: "neon",
    name: "Neon Nights",
    mode: "dark",
    colors: {
      primary: "fuchsia-400",
      secondary: "violet-400",
      accent: "purple-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-fuchsia-500",
      gradientVia: "via-violet-500",
      gradientTo: "to-purple-600",
      buttonGradient: "from-fuchsia-600 to-violet-600",
      badgeColor: "fuchsia-400"
    }
  },
  {
    id: "royal",
    name: "Royal Purple",
    mode: "light",
    colors: {
      primary: "violet-600",
      secondary: "purple-600",
      accent: "indigo-500",
      background: "violet-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-violet-600",
      gradientVia: "via-purple-600",
      gradientTo: "to-fuchsia-600",
      buttonGradient: "from-violet-600 to-purple-600",
      badgeColor: "violet-600"
    }
  },
  {
    id: "monochrome",
    name: "Monochrome",
    mode: "light",
    colors: {
      primary: "slate-700",
      secondary: "gray-700",
      accent: "zinc-600",
      background: "gray-50",
      foreground: "slate-900",
      card: "white",
      muted: "slate-600",
      gradientFrom: "from-slate-600",
      gradientVia: "via-gray-600",
      gradientTo: "to-zinc-700",
      buttonGradient: "from-slate-700 to-gray-700",
      badgeColor: "slate-700"
    }
  },
  {
    id: "monochrome-dark",
    name: "Monochrome Dark",
    mode: "dark",
    colors: {
      primary: "slate-300",
      secondary: "gray-300",
      accent: "zinc-400",
      background: "slate-950",
      foreground: "white",
      card: "slate-900",
      muted: "slate-400",
      gradientFrom: "from-slate-400",
      gradientVia: "via-gray-400",
      gradientTo: "to-zinc-400",
      buttonGradient: "from-slate-600 to-gray-600",
      badgeColor: "slate-300"
    }
  }
];

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

// Generate a theme from gradient colors
const generateThemeFromGradient = (startColor: string, endColor: string): Theme => {
  // Determine if gradient is light or dark based on luminance
  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const startLum = getLuminance(startColor);
  const endLum = getLuminance(endColor);
  const avgLum = (startLum + endLum) / 2;
  const isDark = avgLum < 0.5;

  // Convert hex to Tailwind-like class name
  const hexToTailwind = (hex: string) => {
    return hex.toLowerCase();
  };

  return {
    id: 'custom-gradient',
    name: 'Custom Gradient',
    mode: isDark ? 'dark' : 'light',
    colors: {
      primary: hexToTailwind(startColor),
      secondary: hexToTailwind(endColor),
      accent: hexToTailwind(endColor),
      background: isDark ? 'slate-950' : 'slate-50',
      foreground: isDark ? 'white' : 'slate-900',
      card: isDark ? 'slate-900' : 'white',
      muted: isDark ? 'slate-400' : 'slate-600',
      gradientFrom: `from-[${startColor}]`,
      gradientVia: `via-[${endColor}]`,
      gradientTo: `to-[${endColor}]`,
      buttonGradient: `from-[${startColor}] to-[${endColor}]`,
      badgeColor: hexToTailwind(startColor)
    }
  };
};

export default function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const [open, setOpen] = useState(false);
  const [customGradientStart, setCustomGradientStart] = useState("#9333ea");
  const [customGradientEnd, setCustomGradientEnd] = useState("#db2777");

  // Load custom gradient from localStorage on mount
  useEffect(() => {
    const savedGradient = localStorage.getItem("customGradient");
    if (savedGradient) {
      const { start, end } = JSON.parse(savedGradient);
      setCustomGradientStart(start);
      setCustomGradientEnd(end);
    }
  }, []);

  const handleThemeSelect = (theme: Theme) => {
    onThemeChange(theme);
    setOpen(false);
  };

  const handleSaveCustomGradient = () => {
    const customTheme = generateThemeFromGradient(customGradientStart, customGradientEnd);

    // Save gradient colors to localStorage
    localStorage.setItem("customGradient", JSON.stringify({
      start: customGradientStart,
      end: customGradientEnd
    }));

    // Apply the custom theme
    onThemeChange(customTheme);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-2 border-slate-300 dark:border-slate-700 hover:border-transparent rounded-full transition-all duration-300 overflow-hidden group hover:scale-110 hover:shadow-lg cursor-pointer"
          style={{
            background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
            boxShadow: open ? `0 0 20px color-mix(in srgb, var(--theme-primary) 50%, transparent)` : 'none'
          }}
          title="Customize Theme"
        >
          <div className="absolute inset-0 bg-white dark:bg-slate-900 group-hover:opacity-0 transition-opacity duration-300"></div>
          <Palette className="h-5 w-5 relative z-10 text-slate-700 dark:text-slate-300 group-hover:text-white transition-all duration-300 group-hover:rotate-12" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Customize Theme</SheetTitle>
          <SheetDescription>
            Choose your preferred theme to personalize your experience
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          {/* Existing Themes */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-slate-700 dark:text-slate-300">Light Themes</h3>
            <div className="grid grid-cols-2 gap-4">
              {themes.filter(t => t.mode === "light").map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme)}
                  title={`Select ${theme.name}`}
                  className={`relative p-4 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${
                    currentTheme.id === theme.id
                      ? 'border-purple-500 shadow-lg'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {currentTheme.id === theme.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-left text-slate-900 dark:text-white">
                      {theme.name}
                    </div>

                    <div className={`h-20 rounded-md bg-gradient-to-br ${theme.colors.gradientFrom} ${theme.colors.gradientVia} ${theme.colors.gradientTo}`}>
                    </div>

                    <div className="flex gap-2">
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.primary}`}></div>
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.secondary}`}></div>
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.accent}`}></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-slate-700 dark:text-slate-300">Dark Themes</h3>
            <div className="grid grid-cols-2 gap-4">
              {themes.filter(t => t.mode === "dark").map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme)}
                  title={`Select ${theme.name}`}
                  className={`relative p-4 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 cursor-pointer bg-slate-900 ${
                    currentTheme.id === theme.id
                      ? 'border-purple-500 shadow-lg'
                      : 'border-slate-700'
                  }`}
                >
                  {currentTheme.id === theme.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-left text-white">
                      {theme.name}
                    </div>

                    <div className={`h-20 rounded-md bg-gradient-to-br ${theme.colors.gradientFrom} ${theme.colors.gradientVia} ${theme.colors.gradientTo}`}>
                    </div>

                    <div className="flex gap-2">
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.primary}`}></div>
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.secondary}`}></div>
                      <div className={`h-4 w-4 rounded-full bg-${theme.colors.accent}`}></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <Separator className="my-6" />

          {/* Custom Gradient Theme */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-slate-700 dark:text-slate-300">Custom Gradient Theme</h3>

            <button
              onClick={() => {
                if (currentTheme.id === 'custom-gradient') {
                  // Already using custom gradient, just highlight it
                }
              }}
              className={`relative w-full p-4 rounded-lg border-2 transition-all mb-4 cursor-default hover:shadow-xl ${
                currentTheme.id === 'custom-gradient'
                  ? 'border-purple-500 shadow-lg'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
              style={{
                background: `linear-gradient(to right, ${customGradientStart}, ${customGradientEnd})`
              }}
            >
              {currentTheme.id === 'custom-gradient' && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Check className="h-4 w-4 text-purple-500" />
                </div>
              )}
              <div className="text-white font-medium drop-shadow-lg">
                {currentTheme.id === 'custom-gradient' ? 'Active Custom Gradient' : 'Preview Custom Gradient'}
              </div>
            </button>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-2">
                  Start Color
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={customGradientStart}
                    onChange={(e) => setCustomGradientStart(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
                    title="Pick start color"
                  />
                  <input
                    type="text"
                    value={customGradientStart}
                    onChange={(e) => setCustomGradientStart(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="#9333ea"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-2">
                  End Color
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={customGradientEnd}
                    onChange={(e) => setCustomGradientEnd(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-slate-300 dark:border-slate-600 hover:border-pink-500 transition-all duration-300 hover:scale-110"
                    title="Pick end color"
                  />
                  <input
                    type="text"
                    value={customGradientEnd}
                    onChange={(e) => setCustomGradientEnd(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    placeholder="#db2777"
                  />
                </div>
              </div>

              <Button
                onClick={handleSaveCustomGradient}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer mb-8"
              >
                Save & Apply Custom Gradient
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
