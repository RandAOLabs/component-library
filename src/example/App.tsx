import React from 'react';
import { Button } from '../components/Button';
import { ThemeProvider, useTheme } from '../theme';

const ExampleContent = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-text)',
            transition: 'var(--theme-transition)'
        }}>
            <header style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1>Component Library Example</h1>
                <Button
                    variant="outline"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Button>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button Variants</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="primary">
                        Primary Button
                    </Button>
                    <Button variant="secondary">
                        Secondary Button
                    </Button>
                    <Button variant="outline">
                        Outline Button
                    </Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button Sizes</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', alignItems: 'center' }}>
                    <Button variant="primary" size="small">
                        Small Button
                    </Button>
                    <Button variant="primary" size="medium">
                        Medium Button
                    </Button>
                    <Button variant="primary" size="large">
                        Large Button
                    </Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button States</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="primary" disabled>
                        Disabled Button
                    </Button>
                    <Button variant="primary" loading>
                        Loading Button
                    </Button>
                </div>
            </section>

            <section>
                <h2>Button with Icons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button
                        variant="primary"
                        startIcon={<span>👋</span>}
                    >
                        With Start Icon
                    </Button>
                    <Button
                        variant="primary"
                        endIcon={<span>🚀</span>}
                    >
                        With End Icon
                    </Button>
                    <Button
                        variant="primary"
                        startIcon={<span>⭐</span>}
                        endIcon={<span>⭐</span>}
                    >
                        Both Icons
                    </Button>
                </div>
            </section>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <ExampleContent />
        </ThemeProvider>
    );
};

export default App;
