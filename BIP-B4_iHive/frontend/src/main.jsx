import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IdeaPage from './IdeaPage.jsx'
import IdeaSubmission from './IdeaSubmission.jsx'
import RoutePage from './Routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutePage />
  </React.StrictMode>,
)
 