export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
    primary: string;
    background: string;
    text: string;
    border: string;
    grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
}

export interface Theme {
    colors: ThemeColors;
    mode: ThemeMode;
}

export interface ThemeContextType {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}
