import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextType, ThemeMode } from './types';
import {
    applyTheme,
    getSystemThemePreference,
    loadPersistedTheme,
    persistTheme,
    setupSystemThemeListener
} from './utils';
import './variables.css';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
}

/**
 * ThemeProvider component that manages theme state and provides theme context
 * to all child components. It handles system theme preference detection,
 * theme persistence, and theme switching.
 */
export function ThemeProvider({
    children,
    defaultTheme = 'light'
}: ThemeProviderProps): JSX.Element {
    // Initialize theme state from persisted theme, system preference, or default
    const [theme, setTheme] = useState<ThemeMode>(() => {
        const persistedTheme = loadPersistedTheme();
        if (persistedTheme) return persistedTheme;

        return getSystemThemePreference() || defaultTheme;
    });

    // Apply theme whenever it changes
    useEffect(() => {
        applyTheme(theme);
        persistTheme(theme);
    }, [theme]);

    // Listen for system theme changes
    useEffect(() => {
        return setupSystemThemeListener((newTheme) => {
            // Only update if user hasn't explicitly set a theme
            if (!loadPersistedTheme()) {
                setTheme(newTheme);
            }
        });
    }, []);

    const value = {
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

/**
 * Hook to access the current theme and theme setter function
 * @throws Error if used outside of ThemeProvider
 */
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

/**
 * Hook to toggle between light and dark themes
 * @returns Function to toggle the theme
 */
export function useThemeToggle(): () => void {
    const { theme, setTheme } = useTheme();
    return () => setTheme(theme === 'light' ? 'dark' : 'light');
}
