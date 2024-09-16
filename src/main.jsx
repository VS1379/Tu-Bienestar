import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App'; // Import your App component
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
