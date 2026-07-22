import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
import Biryani from './Components.jsx'
import Birth from './Birthdays.jsx'
import Evolution from './History.jsx' 
import Count from './Count.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
import Lights from './Light.jsx'
import API from './API.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <API/>
    <Lights/>
    <Events/>
    <Forms/>
    <Count/>
    <JSX />
    <Biryani/>
    <Birth/>
    <Evolution/>
  </StrictMode>,
)
