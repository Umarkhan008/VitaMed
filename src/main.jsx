import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Speciality from './Speciality.jsx'
import About from './About.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Speciality/>
    <About/>
  </StrictMode>,
)
