import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './scenes.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
