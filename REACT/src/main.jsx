import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
import Biryani from './Components.jsx'
import Birth from './Birthdays.jsx'
import Evolution from './History.jsx' 
import Count from './Count.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count/>
    <JSX />
    <Biryani/>
    <Birth/>
    <Evolution/>
  </StrictMode>,
)
