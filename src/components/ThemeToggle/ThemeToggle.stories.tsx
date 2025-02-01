import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A toggle switch component for changing between light and dark themes.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the toggle switch'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply'
        }
    }
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic toggle
export const Basic: Story = {
    args: {}
};

// Different sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <ThemeToggle size="small" />
            <ThemeToggle size="medium" />
            <ThemeToggle size="large" />
        </div>
    )
};

// With custom styling
export const CustomStyling: Story = {
    args: {
        className: 'custom-theme-toggle'
    },
    parameters: {
        docs: {
            description: {
                story: 'The ThemeToggle component can be customized using CSS classes.'
            }
        }
    }
};

// Interactive example
export const Interactive: Story = {
    args: {
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'Try toggling between light and dark themes. The theme change will affect the entire documentation.'
            }
        }
    }
};
