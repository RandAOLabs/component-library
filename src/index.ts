/**
 * Component Library
 * A modern React component library with TypeScript support and theming
 * 
 * @packageDocumentation
 */

// Import all CSS files
import './theme/variables.css';
import './components/base/BaseButton.css';
import './components/base/BaseCheckbox.css';
import './components/base/BaseToggle.css';
import './components/Button/Button.css';
import './components/InfoIcon/InfoIcon.css';
import './components/Spinner/Spinner.css';
import './components/Table/Table.css';
import './components/ThemeToggle/ThemeToggle.css';
import './components/Tooltip/Tooltip.css';
import './components/SocialIcons/SocialIcons.css';

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

// Social Icons
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

// Connect Wallet
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
