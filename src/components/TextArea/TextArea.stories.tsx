import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile textarea component with auto-resize capability and support for labels and helper text.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'filled', 'outlined'],
            description: 'The visual style variant of the textarea'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the textarea'
        },
        label: {
            control: 'text',
            description: 'Label text displayed above the textarea'
        },
        helperText: {
            control: 'text',
            description: 'Helper text displayed below the textarea'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text'
        },
        rows: {
            control: 'number',
            description: 'Number of visible text rows'
        },
        maxRows: {
            control: 'number',
            description: 'Maximum number of visible text rows when auto-resizing'
        },
        autoResize: {
            control: 'boolean',
            description: 'Whether to auto-resize based on content'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the textarea is disabled'
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
            description: 'Whether the textarea should take up full width'
        }
    }
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic textarea
export const Basic: Story = {
    args: {
        placeholder: 'Enter text...',
        rows: 3
    }
};

// With label and helper text
export const WithLabelAndHelper: Story = {
    args: {
        label: 'Message',
        helperText: 'Enter your message here',
        placeholder: 'Type your message...',
        rows: 4
    }
};

// Different variants
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <TextArea
                label="Default"
                placeholder="Default variant"
                variant="default"
            />
            <TextArea
                label="Filled"
                placeholder="Filled variant"
                variant="filled"
            />
            <TextArea
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
            <TextArea
                label="Small"
                placeholder="Small textarea"
                size="small"
            />
            <TextArea
                label="Medium"
                placeholder="Medium textarea"
                size="medium"
            />
            <TextArea
                label="Large"
                placeholder="Large textarea"
                size="large"
            />
        </div>
    )
};

// Auto-resize
export const AutoResize: Story = {
    args: {
        label: 'Auto-resize Textarea',
        placeholder: 'Type to see auto-resize in action...',
        helperText: 'This textarea will grow up to 10 rows',
        rows: 2,
        maxRows: 10,
        autoResize: true
    }
};

// States
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextArea
                label="Error State"
                placeholder="Error textarea"
                error
                helperText="This field is required"
            />
            <TextArea
                label="Success State"
                placeholder="Success textarea"
                success
                helperText="Looks good!"
                value="Valid input"
            />
            <TextArea
                label="Disabled State"
                placeholder="Disabled textarea"
                disabled
                helperText="This field is disabled"
            />
        </div>
    )
};

// Full width
export const FullWidth: Story = {
    args: {
        label: 'Full Width Textarea',
        placeholder: 'This textarea takes up the full width',
        helperText: 'Helper text for full width textarea',
        fullWidth: true
    }
};

// Long form content
export const LongForm: Story = {
    args: {
        label: 'Blog Post',
        placeholder: 'Write your blog post here...',
        helperText: 'Markdown formatting is supported',
        rows: 10,
        fullWidth: true,
        variant: 'outlined'
    }
};
