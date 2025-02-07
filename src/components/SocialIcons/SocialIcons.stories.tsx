import type { Meta, StoryObj } from '@storybook/react';
import {
    SocialIcons,
    DiscordIcon,
    XIcon,
    TelegramIcon,
    RedditIcon,
    YoutubeIcon
} from './SocialIcons';
import { SocialLink } from './types';

const meta = {
    title: 'Components/SocialIcons',
    component: SocialIcons,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SocialIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example links for the stories
const exampleLinks: SocialLink[] = [
    { platform: 'discord', url: 'https://discord.gg/example' },
    { platform: 'x', url: 'https://x.com/example' },
    { platform: 'telegram', url: 'https://t.me/example' },
    { platform: 'reddit', url: 'https://reddit.com/r/example' },
    { platform: 'youtube', url: 'https://youtube.com/@example' }
];

// Main component stories
export const Default: Story = {
    args: {
        links: exampleLinks,
        size: 24
    }
};

export const LargeIcons: Story = {
    args: {
        links: exampleLinks,
        size: 32
    }
};

// Individual icon stories
const IconTemplate = (Icon: typeof DiscordIcon) => ({
    render: () => (
        <div style={{ padding: '1rem' }}>
            <Icon url="#" platform="discord" size={24} />
        </div>
    )
});

export const Discord = IconTemplate(DiscordIcon);
export const X = IconTemplate(XIcon);
export const Telegram = IconTemplate(TelegramIcon);
export const Reddit = IconTemplate(RedditIcon);
export const Youtube = IconTemplate(YoutubeIcon);

// Documentation and examples
export const Documentation: Story = {
    args: {
        links: exampleLinks,
        size: 24
    },
    parameters: {
        docs: {
            description: {
                component: `
# Social Icons Component

A collection of social media icons that can be used individually or as a group.

## Features

- Individual icons can be imported separately
- Supports Discord, X (Twitter), Telegram, Reddit, and YouTube
- Theme-aware with light/dark mode support
- Hover effects for better interactivity
- Accessible with proper ARIA labels
- Customizable size

## Usage

\`\`\`tsx
// Import individual icons
import { DiscordIcon, XIcon } from '@randaotoken/component-library';

// Use individual icons
<DiscordIcon url="https://discord.gg/example" platform="discord" size={24} />

// Import and use the full component
import { SocialIcons } from '@randaotoken/component-library';

const links = [
    { platform: 'discord', url: 'https://discord.gg/example' },
    { platform: 'x', url: 'https://x.com/example' }
];

<SocialIcons links={links} size={24} />
\`\`\`
                `
            }
        }
    }
};
