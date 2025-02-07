import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
    title: 'Components/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile text input component with support for labels, helper text, and icons.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'filled', 'outlined'],
            description: 'The visual style variant of the input'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the input'
        },
        label: {
            control: 'text',
            description: 'Label text displayed above the input'
        },
        helperText: {
            control: 'text',
            description: 'Helper text displayed below the input'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled'
        },
        error: {
            control: 'boolean',
            description: 'Whether to show error state'
        },
        success: {
            control: 'boolean',
            description: 'Whether to show success state'
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the input should take up full width'
        }
    }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input
export const Basic: Story = {
    args: {
        placeholder: 'Enter text...'
    }
};

// With label and helper text
export const WithLabelAndHelper: Story = {
    args: {
        label: 'Email',
        helperText: 'Enter your email address',
        placeholder: 'example@email.com',
        type: 'email'
    }
};

// Different variants
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <TextInput
                label="Default"
                placeholder="Default variant"
                variant="default"
            />
            <TextInput
                label="Filled"
                placeholder="Filled variant"
                variant="filled"
            />
            <TextInput
                label="Outlined"
                placeholder="Outlined variant"
                variant="outlined"
            />
        </div>
    )
};

// Different sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <TextInput
                label="Small"
                placeholder="Small input"
                size="small"
            />
            <TextInput
                label="Medium"
                placeholder="Medium input"
                size="medium"
            />
            <TextInput
                label="Large"
                placeholder="Large input"
                size="large"
            />
        </div>
    )
};

// With icons
export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextInput
                label="Search"
                placeholder="Search..."
                startIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                }
            />
            <TextInput
                label="Password"
                type="password"
                placeholder="Enter password"
                endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                }
            />
            <TextInput
                label="Email"
                type="email"
                placeholder="example@email.com"
                startIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                }
            />
        </div>
    )
};

// States
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextInput
                label="Error State"
                placeholder="Error input"
                error
                helperText="This field is required"
            />
            <TextInput
                label="Success State"
                placeholder="Success input"
                success
                helperText="Looks good!"
                value="Valid input"
            />
            <TextInput
                label="Disabled State"
                placeholder="Disabled input"
                disabled
                helperText="This field is disabled"
            />
        </div>
    )
};

// Full width
export const FullWidth: Story = {
    args: {
        label: 'Full Width Input',
        placeholder: 'This input takes up the full width',
        helperText: 'Helper text for full width input',
        fullWidth: true
    }
};
