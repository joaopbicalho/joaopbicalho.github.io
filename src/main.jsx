import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Imported before App so per-project stylesheets, which load with their
// components, can still override the shared project-page shell deliberately.
import './styles/project-page.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
