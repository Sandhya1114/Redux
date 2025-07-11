import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import ticketReducer from './ticketSlice';
import projectReducer from './projectSlice';
import chartReducer from './chartSlice';
const store = configureStore({
  reducer: {
    todos: todoReducer,
    tickets: ticketReducer, 
    charts: chartReducer,
    projects: projectReducer,
  },
});

export default store;
