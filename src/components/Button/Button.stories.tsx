import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A flexible button component with various styles and states.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
            description: 'The visual style of the button'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the button'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled'
        },
        loading: {
            control: 'boolean',
            description: 'Whether to show a loading spinner'
        },
        onClick: {
            action: 'clicked',
            description: 'Function called when the button is clicked'
        },
        children: {
            control: 'text',
            description: 'The content to display inside the button'
        },
        startIcon: {
            control: 'text',
            description: 'Icon to display before the button text'
        },
        endIcon: {
            control: 'text',
            description: 'Icon to display after the button text'
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button'
    }
};

// Secondary button
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button'
    }
};

// Outline button
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button'
    }
};

// Button sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
    )
};

// Button states
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
        </div>
    )
};

// Button with icons
export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button startIcon={<span>🚀</span>}>Start Icon</Button>
            <Button endIcon={<span>🎯</span>}>End Icon</Button>
            <Button startIcon={<span>💫</span>} endIcon={<span>✨</span>}>Both Icons</Button>
        </div>
    )
};

// Interactive example
export const Interactive: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        disabled: false,
        loading: false,
        children: 'Interactive Button',
        startIcon: undefined,
        endIcon: undefined
    }
};
