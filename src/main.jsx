// src/main.jsx
import React from 'react'              // ✅ add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'                  // ✅ make sure styles are imported once here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
