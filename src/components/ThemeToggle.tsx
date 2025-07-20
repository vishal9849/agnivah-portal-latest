import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-apple-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-apple-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="w-5 h-5 text-apple-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;