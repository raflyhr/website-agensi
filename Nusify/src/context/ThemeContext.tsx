import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check local storage or time-based default
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) return saved;
    
    const hour = new Date().getHours();
    return (hour < 6 || hour >= 18) ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Periodic auto-theme check
  useEffect(() => {
    const checkTheme = () => {
      const saved = localStorage.getItem('theme');
      if (saved) return; // User manual choice persists

      const h = new Date().getHours();
      const shouldBeDark = h < 6 || h >= 18;
      setThemeState(shouldBeDark ? 'dark' : 'light');
    };

    const interval = setInterval(checkTheme, 60_000);
    return () => clearInterval(interval);
  }, []);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
