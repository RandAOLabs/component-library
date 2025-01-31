import React from 'react';
import { Button } from '../components/Button';

const App: React.FC = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Component Library Example</h1>

            <section style={{ marginTop: '2rem' }}>
                <h2>Button Variants</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                        Primary Button
                    </Button>

                    <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
                        Secondary Button
                    </Button>

                    <Button variant="outline" onClick={() => alert('Outline clicked!')}>
                        Outline Button
                    </Button>

                    <Button variant="primary" disabled>
                        Disabled Button
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default App;
