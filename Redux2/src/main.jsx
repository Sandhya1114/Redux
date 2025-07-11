// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store'; // ✅ Make sure you import the store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* ✅ Pass store here */}
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
