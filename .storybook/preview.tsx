import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '../src/theme';
import '../src/theme/variables.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ padding: '1rem' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default preview;
