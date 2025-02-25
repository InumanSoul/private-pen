import './assets/base.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
