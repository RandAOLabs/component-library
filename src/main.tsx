import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './example/App';
import './theme/variables.css';

// Add basic theme styles to the body
document.body.style.backgroundColor = 'var(--color-background)';
document.body.style.color = 'var(--color-text)';
document.body.style.margin = '0';
document.body.style.fontFamily = 'system-ui, -apple-system, sans-serif';
document.body.style.transition = 'var(--theme-transition)';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
