import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tooltip component that displays content on hover.'
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
            description: 'The position of the tooltip relative to its trigger'
        },
        children: {
            control: 'text',
            description: 'The trigger element that shows the tooltip on hover'
        }
    }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultButton = () => (
    <button style={{ padding: '0.5rem 1rem' }}>Hover me</button>
);

// Basic usage
export const Basic: Story = {
    args: {
        content: 'This is a tooltip',
        children: <DefaultButton />
    }
};

// Different positions
export const Positions: Story = {
    args: {
        content: 'Tooltip content',
        children: <DefaultButton />
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
            <Tooltip {...args} position="top">
                <button style={{ padding: '0.5rem 1rem' }}>Top</button>
            </Tooltip>
            <div />
            <Tooltip {...args} position="left">
                <button style={{ padding: '0.5rem 1rem' }}>Left</button>
            </Tooltip>
            <div style={{ padding: '1rem' }}>
                Hover the buttons
            </div>
            <Tooltip {...args} position="right">
                <button style={{ padding: '0.5rem 1rem' }}>Right</button>
            </Tooltip>
            <div />
            <Tooltip {...args} position="bottom">
                <button style={{ padding: '0.5rem 1rem' }}>Bottom</button>
            </Tooltip>
            <div />
        </div>
    )
};

// Long content
export const LongContent: Story = {
    args: {
        content: 'This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.',
        position: 'right',
        children: <button style={{ padding: '0.5rem 1rem' }}>Hover for long content</button>
    }
};

// With custom trigger
export const CustomTrigger: Story = {
    args: {
        content: 'Custom trigger element',
        position: 'top',
        children: <DefaultButton />
    },
    render: (args) => (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <Tooltip {...args}>
                <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer'
                }}>
                    Custom Element
                </div>
            </Tooltip>
            <Tooltip {...args} content="Icon tooltip">
                <span style={{ fontSize: '24px', cursor: 'pointer' }}>
                    🎯
                </span>
            </Tooltip>
            <Tooltip {...args} content="Image tooltip">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Placeholder"
                    style={{ borderRadius: '50%', cursor: 'pointer' }}
                />
            </Tooltip>
        </div>
    )
};

// Interactive example
export const Interactive: Story = {
    args: {
        content: 'Try changing my position!',
        position: 'top',
        children: <button style={{ padding: '0.5rem 1rem' }}>Interactive Example</button>
    },
    parameters: {
        docs: {
            description: {
                story: 'Experiment with different positions and content to see how the tooltip behaves.'
            }
        }
    }
};
