import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5 text-gray-700" />;
      case 'dark':
        return <Moon className="w-5 h-5 text-gray-300" />;
      default:
        return <Sun className="w-5 h-5 text-gray-700" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl glass-effect hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;