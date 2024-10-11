import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Counter} from './Components/Counter.jsx'; 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>  
  </StrictMode>,
)
