/**
 * Component Library
 * A modern React component library with TypeScript support and theming
 * 
 * @packageDocumentation
 */

// Re-export everything but let components handle their own CSS imports
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

export { ThemeToggle } from './components/ThemeToggle';
export type { ThemeToggleProps } from './components/ThemeToggle';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { InfoIcon } from './components/InfoIcon';
export type { InfoIconProps } from './components/InfoIcon';

export { Table } from './components/Table';
export type {
    TableProps,
    TableColumn,
    SortDirection,
    CellAlignment
} from './components/Table';

export {
    SocialIcons,
    DiscordIcon,
    XIcon,
    TelegramIcon,
    RedditIcon,
    YoutubeIcon
} from './components/SocialIcons';
export type {
    SocialIconProps,
    SocialIconsProps,
    SocialLink,
    SocialPlatform
} from './components/SocialIcons';

export {
    ConnectWallet,
    WalletProvider,
    useWallet
} from './components/ConnectWallet';
export type {
    ConnectWalletProps,
    WalletContextType,
    WalletProviderProps
} from './components/ConnectWallet';

export { TextInput } from './components/TextInput';
export type { TextInputProps } from './components/TextInput';

export { TextArea } from './components/TextArea';
export type { TextAreaProps } from './components/TextArea';

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
