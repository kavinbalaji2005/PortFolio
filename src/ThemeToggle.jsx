import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-icon">
        <FontAwesomeIcon 
          icon={theme === 'dark' ? faSun : faMoon} 
          className={`theme-icon ${theme === 'dark' ? 'sun' : 'moon'}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
