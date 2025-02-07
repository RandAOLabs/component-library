import type { Meta, StoryObj } from '@storybook/react';
import { ConnectWallet } from './ConnectWallet';
import { WalletProvider } from './WalletProvider';

const meta = {
    title: 'Components/ConnectWallet',
    component: ConnectWallet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <WalletProvider>
                <Story />
            </WalletProvider>
        )
    ]
} satisfies Meta<typeof ConnectWallet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const CustomText: Story = {
    args: {
        connectText: 'Connect ArWeave'
    }
};

export const CustomVariant: Story = {
    args: {
        variant: 'outline',
        size: 'large'
    }
};

export const CustomAddressFormat: Story = {
    args: {
        formatAddress: (address) => `${address.slice(0, 4)}...${address.slice(-4)}`
    }
};

// Documentation and examples
export const Documentation: Story = {
    parameters: {
        docs: {
            description: {
                component: `
# Connect Wallet Button

A button component that handles wallet connection and displays the connected wallet's address.

## Features

- Extends the base Button component functionality
- Integrates with WalletProvider context
- Displays truncated wallet address when connected (first 3 and last 3 characters)
- Customizable text and address formatting
- Theme-aware with all button variants

## Usage

First, wrap your app with the WalletProvider:

\`\`\`tsx
import { WalletProvider } from '@randaotoken/component-library';

function App() {
    return (
        <WalletProvider>
            <YourApp />
        </WalletProvider>
    );
}
\`\`\`

Then use the ConnectWallet component:

\`\`\`tsx
import { ConnectWallet } from '@randaotoken/component-library';

function YourComponent() {
    return (
        <ConnectWallet
            connectText="Connect Wallet"
            variant="primary"
            size="medium"
            formatAddress={(address) => \`\${address.slice(0, 3)}...\${address.slice(-3)}\`}
        />
    );
}
\`\`\`

## Props

Extends all Button props except \`onClick\`, plus:

- \`connectText\`: Text to show when wallet is not connected
- \`formatAddress\`: Function to customize how the address is displayed (default: shows first 3 and last 3 characters)
                `
            }
        }
    }
};
