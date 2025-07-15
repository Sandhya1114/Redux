// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store';

// ✅ Unified Mirage server
import { makeServer } from './mirage/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
