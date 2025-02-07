import React from 'react';
import { Button } from '../Button';
import { useWallet } from './WalletProvider';
import { ConnectWalletProps } from './types';

/**
 * Default function to format wallet address
 * Shows first 3 and last 3 characters
 */
const defaultFormatAddress = (address: string) => {
    if (address.length < 6) return address;
    return `${address.slice(0, 3)}...${address.slice(-3)}`;
};

/**
 * ConnectWallet component that extends the base Button component with wallet connection functionality.
 * Must be used within a WalletProvider component.
 */
export const ConnectWallet: React.FC<ConnectWalletProps> = ({
    connectText = 'Connect Wallet',
    formatAddress = defaultFormatAddress,
    variant = 'primary',
    ...buttonProps
}) => {
    const { isConnected, address, connect, disconnect } = useWallet();

    const handleClick = async () => {
        if (isConnected) {
            disconnect();
        } else {
            await connect();
        }
    };

    const buttonText = isConnected && address
        ? formatAddress(address)
        : connectText;

    return (
        <Button
            {...buttonProps}
            variant={variant}
            onClick={handleClick}
        >
            {buttonText}
        </Button>
    );
};
