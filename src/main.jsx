import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SignUpForm } from './form/SignUpForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpForm />
  </StrictMode>,
)
