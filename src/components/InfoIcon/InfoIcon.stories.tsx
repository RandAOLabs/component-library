import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon } from './InfoIcon';

const meta = {
    title: 'Components/InfoIcon',
    component: InfoIcon,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'An information icon component that displays a tooltip on hover.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        content: {
            control: 'text',
            description: 'The content to display in the tooltip'
        },
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
            description: 'The position of the tooltip relative to the icon'
        },
        size: {
            control: 'number',
            description: 'The size of the icon in pixels'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply'
        }
    }
} satisfies Meta<typeof InfoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Basic: Story = {
    args: {
        content: 'This is a helpful tooltip message'
    }
};

// Different positions
export const Positions: Story = {
    args: {
        content: 'Tooltip content',
        position: 'top'
    },
    render: (args) => (
        <div style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '2rem',
            alignItems: 'center',
            justifyItems: 'center'
        }}>
            <div />
            <InfoIcon
                {...args}
                content="Tooltip appears above"
                position="top"
            />
            <div />
            <InfoIcon
                {...args}
                content="Tooltip appears to the left"
                position="left"
            />
            <div style={{ padding: '1rem' }}>
                Hover over the icons
            </div>
            <InfoIcon
                {...args}
                content="Tooltip appears to the right"
                position="right"
            />
            <div />
            <InfoIcon
                {...args}
                content="Tooltip appears below"
                position="bottom"
            />
            <div />
        </div>
    )
};

// Different sizes
export const Sizes: Story = {
    args: {
        content: 'Tooltip content',
        position: 'right'
    },
    render: (args) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <InfoIcon
                {...args}
                content="Small icon"
                size={12}
            />
            <InfoIcon
                {...args}
                content="Medium icon"
                size={16}
            />
            <InfoIcon
                {...args}
                content="Large icon"
                size={20}
            />
        </div>
    )
};

// Long content
export const LongContent: Story = {
    args: {
        content: 'This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.',
        position: 'right'
    }
};

// Interactive example
export const Interactive: Story = {
    args: {
        content: 'Try changing my position and size!',
        position: 'top',
        size: 16
    },
    parameters: {
        docs: {
            description: {
                story: 'Experiment with different positions and sizes to see how the tooltip behaves.'
            }
        }
    }
};
