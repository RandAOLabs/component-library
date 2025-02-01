import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-docs"
    ],
    framework: "@storybook/react-vite",
    docs: {
        autodocs: true,
        defaultName: 'Documentation',
    },
};

export default config;
