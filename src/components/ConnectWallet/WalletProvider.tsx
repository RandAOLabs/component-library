import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { WalletContextType, WalletProviderProps } from './types';

declare global {
    interface Window {
        arweaveWallet?: {
            connect: (permissions: string[]) => Promise<void>;
            getActiveAddress: () => Promise<string>;
        };
    }
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

/**
 * Provider component that manages wallet connection state and provides
 * wallet-related functionality to child components.
 */
export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);

    const checkWalletConnection = useCallback(async () => {
        if (window.arweaveWallet) {
            try {
                const address = await window.arweaveWallet.getActiveAddress();
                if (address) {
                    setIsConnected(true);
                    setAddress(address);
                }
            } catch (error) {
                console.error('Error checking wallet connection:', error);
            }
        }
    }, []);

    const connect = async () => {
        if (window.arweaveWallet) {
            try {
                await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
                await checkWalletConnection();
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        } else {
            console.warn('Arweave wallet extension not found');
        }
    };

    const disconnect = () => {
        setIsConnected(false);
        setAddress(null);
    };

    useEffect(() => {
        checkWalletConnection();
    }, [checkWalletConnection]);

    const value = {
        isConnected,
        address,
        connect,
        disconnect
    };

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
};

/**
 * Hook to access wallet state and functions.
 * Must be used within a WalletProvider component.
 */
export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
