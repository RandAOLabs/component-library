import { ThemeMode } from './types';

const THEME_STORAGE_KEY = 'component-library-theme';

/**
 * Detects the user's system theme preference
 * @returns 'dark' if user prefers dark mode, 'light' otherwise
 */
export function getSystemThemePreference(): ThemeMode {
    if (typeof window === 'undefined') return 'light';

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

/**
 * Saves the theme preference to localStorage
 * @param theme The theme to persist
 */
export function persistTheme(theme: ThemeMode): void {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn('Failed to save theme preference:', error);
    }
}

/**
 * Loads the persisted theme from localStorage
 * @returns The persisted theme or null if none exists
 */
export function loadPersistedTheme(): ThemeMode | null {
    try {
        const theme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
        return theme && (theme === 'light' || theme === 'dark') ? theme : null;
    } catch (error) {
        console.warn('Failed to load theme preference:', error);
        return null;
    }
}

/**
 * Applies the theme to the document
 * @param theme The theme to apply
 */
export function applyTheme(theme: ThemeMode): void {
    document.documentElement.setAttribute('data-theme', theme);
    // Also update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute(
            'content',
            theme === 'dark' ? '#000000' : '#ffffff'
        );
    }
}

/**
 * Sets up a listener for system theme changes
 * @param callback Function to call when system theme changes
 * @returns Cleanup function to remove the listener
 */
export function setupSystemThemeListener(
    callback: (theme: ThemeMode) => void
): () => void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = (e: MediaQueryListEvent) => {
        callback(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
}
