import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//FONTS
import '@fontsource/playfair-display';
import '@fontsource/poppins'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
