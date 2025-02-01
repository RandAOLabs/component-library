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
                <h1>RandAO Components</h1>
                <Button
                    variant="outline"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button Variants</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="primary">
                        Mint Token
                    </Button>
                    <Button variant="secondary">
                        Stake Now
                    </Button>
                    <Button variant="outline">
                        Connect
                    </Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button Sizes</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', alignItems: 'center' }}>
                    <Button variant="primary" size="small">
                        Small
                    </Button>
                    <Button variant="primary" size="medium">
                        Medium
                    </Button>
                    <Button variant="primary" size="large">
                        Large
                    </Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Button States</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                    <Button variant="primary" loading>
                        Loading
                    </Button>
                </div>
            </section>

            <section>
                <h2>Button with Icons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button
                        variant="primary"
                        startIcon={<span>🪙</span>}
                    >
                        Mint
                    </Button>
                    <Button
                        variant="primary"
                        endIcon={<span>🔒</span>}
                    >
                        Lock
                    </Button>
                    <Button
                        variant="primary"
                        startIcon={<span>💎</span>}
                        endIcon={<span>💎</span>}
                    >
                        Stake
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
