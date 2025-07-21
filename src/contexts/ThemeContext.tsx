import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // Default to light theme
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'light');
    document.body.classList.remove('dark', 'light');
    
    // Add the current theme class to both html and body
    document.documentElement.classList.add(theme);
    document.body.classList.add(theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const colors = {
        dark: '#111827',
        light: '#ffffff'
      };
      meta.setAttribute('content', colors[theme]);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      return prev === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};