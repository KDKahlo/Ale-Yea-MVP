import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <FlavorProvider> {/* Wrap App with the context provider */}
      <App />
    </FlavorProvider>
  </BrowserRouter>
</React.StrictMode>,
);