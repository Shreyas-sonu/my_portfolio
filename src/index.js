import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './components/contexts/ThemeContext';
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

