import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A loading spinner component with customizable size and color.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'number',
            description: 'The size of the spinner in pixels'
        },
        color: {
            control: 'color',
            description: 'The color of the spinner'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply'
        }
    }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic spinner
export const Basic: Story = {
    args: {
        size: 24
    }
};

// Different sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Spinner size={16} />
            <Spinner size={24} />
            <Spinner size={32} />
            <Spinner size={48} />
        </div>
    )
};

// Different colors
export const Colors: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            padding: '1rem',
            background: 'var(--color-background)',
            borderRadius: '8px'
        }}>
            <Spinner size={24} color="var(--color-primary)" />
            <Spinner size={24} color="#ff6b6b" />
            <Spinner size={24} color="#4ecdc4" />
            <Spinner size={24} color="#ffd93d" />
        </div>
    )
};

// With background
export const WithBackground: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{
                padding: '2rem',
                background: 'var(--color-primary)',
                borderRadius: '8px'
            }}>
                <Spinner size={24} color="white" />
            </div>
            <div style={{
                padding: '2rem',
                background: '#2c3e50',
                borderRadius: '8px'
            }}>
                <Spinner size={24} color="#ecf0f1" />
            </div>
        </div>
    )
};

// In context
export const InContext: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <button
                style={{
                    padding: '0.5rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--color-primary)',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'not-allowed'
                }}
                disabled
            >
                <Spinner size={16} color="currentColor" />
                Loading...
            </button>
            <div style={{
                padding: '2rem',
                background: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <Spinner size={20} />
                Loading content...
            </div>
        </div>
    )
};

// Interactive example
export const Interactive: Story = {
    args: {
        size: 24,
        color: 'var(--color-primary)'
    },
    parameters: {
        docs: {
            description: {
                story: 'Try adjusting the size and color to see how the spinner changes.'
            }
        }
    }
};
