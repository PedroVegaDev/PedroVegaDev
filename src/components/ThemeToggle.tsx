import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400 border border-indigo-400/30 dark:border-cyan-400/30"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;