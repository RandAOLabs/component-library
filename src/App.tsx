import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SocialIcons, SocialLink } from './components/SocialIcons'

function App() {
  const [count, setCount] = useState(0)

  const socialLinks: SocialLink[] = [
    { platform: 'discord' as const, url: 'https://discord.gg/randao' },
    { platform: 'x' as const, url: 'https://x.com/randao' },
    { platform: 'telegram' as const, url: 'https://t.me/randao' },
    { platform: 'reddit' as const, url: 'https://reddit.com/r/randao' },
    { platform: 'youtube' as const, url: 'https://youtube.com/@randao' }
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>RandAO Component Library</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card" style={{ marginTop: '2rem' }}>
        <h2>Social Icons Component</h2>
        <p>Hover over the icons to see the effects:</p>
        <SocialIcons links={socialLinks} size={32} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
