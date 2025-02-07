import { ButtonProps } from '../Button';

export interface WalletContextType {
    isConnected: boolean;
    address: string | null;
    connect: () => Promise<void>;
    disconnect: () => void;
}

export interface WalletProviderProps {
    children: React.ReactNode;
}

export interface ConnectWalletProps extends Omit<ButtonProps, 'onClick'> {
    /**
     * Text to show when wallet is not connected
     * @default "Connect Wallet"
     */
    connectText?: string;
    /**
     * Custom function to format the displayed address
     * @param address The full wallet address
     * @returns Formatted address string (default: shows first 3 and last 3 characters)
     */
    formatAddress?: (address: string) => string;
}
