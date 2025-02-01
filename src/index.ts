/**
 * Component Library
 * A modern React component library with TypeScript support and theming
 * 
 * @packageDocumentation
 */

// Button
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

// Spinner
export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

// Theme Toggle
export { ThemeToggle } from './components/ThemeToggle';
export type { ThemeToggleProps } from './components/ThemeToggle';

// Tooltip
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

// Info Icon
export { InfoIcon } from './components/InfoIcon';
export type { InfoIconProps } from './components/InfoIcon';

// Table
export { Table } from './components/Table';
export type {
    TableProps,
    TableColumn,
    SortDirection,
    CellAlignment
} from './components/Table';

// Theme System
export {
    ThemeProvider,
    useTheme,
    useThemeToggle
} from './theme';

export type {
    ThemeMode,
    Theme,
    ThemeColors,
    ThemeContextType
} from './theme';
