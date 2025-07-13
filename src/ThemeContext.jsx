import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export { ThemeContext };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or system preference
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
        setTheme(savedTheme);
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('Error accessing localStorage or system preferences:', error);
      setTheme('dark'); // Default fallback
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    try {
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      console.warn('Error saving theme preference:', error);
    }
  }, [theme, isLoading]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
    isLoading
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
