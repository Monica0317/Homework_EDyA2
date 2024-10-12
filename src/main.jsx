import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FirstApp from './FirstApp.jsx'
import { ComponentApp } from './ComponentApp.jsx'
import { useCounter } from './hooks/useCounter.jsx'
import './index.css'
import { GifGrid } from './Components/GifGrid.jsx'
import { MultipleCustomHooks } from './Components/MultipleCustomHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <MultipleCustomHooks/>
  </StrictMode>,
)