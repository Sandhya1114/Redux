// src/App.jsx
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchChartData } from './redux/chartSlice'; // ✅ Import thunk

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChartData()); // ✅ Trigger API call from Mirage
  }, [dispatch]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
